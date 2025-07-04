#!/bin/bash

# MySQL User Creation Script for Multiple Servers
# Author: Auto-generated script
# Description: Creates MySQL users across multiple servers using Excel file input

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
EXCEL_FILE="mysql_servers.xlsx"
CSV_FILE="/tmp/mysql_servers.csv"
LOG_FILE="user_creation_log_$(date +%Y%m%d_%H%M%S).log"
RESULTS_FILE="user_creation_results_$(date +%Y%m%d_%H%M%S).txt"

# Default user details (can be overridden)
DEFAULT_USERNAME="newuser"
DEFAULT_PASSWORD=""
DEFAULT_HOST="%"
DEFAULT_PRIVILEGES="SELECT,INSERT,UPDATE,DELETE"

# Function to print colored output
print_message() {
    local color=$1
    local message=$2
    echo -e "${color}${message}${NC}" | tee -a "$LOG_FILE"
}

# Function to show usage
show_usage() {
    echo "Usage: $0 [OPTIONS]"
    echo "Options:"
    echo "  -f, --file FILE          Excel file with server details (default: mysql_servers.xlsx)"
    echo "  -u, --username USER      Username to create (default: newuser)"
    echo "  -p, --password PASS      Password for the new user"
    echo "  -h, --host HOST          Host pattern for user (default: %)"
    echo "  --privileges PRIVS       Privileges to grant (default: SELECT,INSERT,UPDATE,DELETE)"
    echo "  --help                   Show this help message"
    echo ""
    echo "Excel file should have columns: server_name, host, port, admin_user, admin_password, database"
    echo "Example:"
    echo "  $0 -f servers.xlsx -u myuser -p mypassword"
}

# Function to check dependencies
check_dependencies() {
    print_message "$BLUE" "Checking dependencies..."
    
    # Check for required tools
    local deps=("mysql" "ssconvert")
    local missing_deps=()
    
    for dep in "${deps[@]}"; do
        if ! command -v "$dep" &> /dev/null; then
            missing_deps+=("$dep")
        fi
    done
    
    if [ ${#missing_deps[@]} -ne 0 ]; then
        print_message "$RED" "Missing dependencies: ${missing_deps[*]}"
        print_message "$YELLOW" "Installing missing dependencies..."
        
        # Install missing dependencies
        if [[ " ${missing_deps[*]} " =~ " mysql " ]]; then
            sudo apt-get update && sudo apt-get install -y mysql-client
        fi
        
        if [[ " ${missing_deps[*]} " =~ " ssconvert " ]]; then
            sudo apt-get install -y gnumeric
        fi
    fi
    
    print_message "$GREEN" "Dependencies check completed."
}

# Function to convert Excel to CSV
convert_excel_to_csv() {
    local excel_file=$1
    local csv_file=$2
    
    if [ ! -f "$excel_file" ]; then
        print_message "$RED" "Excel file not found: $excel_file"
        return 1
    fi
    
    print_message "$BLUE" "Converting Excel file to CSV..."
    
    # Try using ssconvert (from gnumeric)
    if command -v ssconvert &> /dev/null; then
        ssconvert "$excel_file" "$csv_file" 2>/dev/null
        if [ $? -eq 0 ]; then
            print_message "$GREEN" "Excel file converted successfully."
            return 0
        fi
    fi
    
    # Alternative: Try using in2csv (from csvkit)
    if command -v in2csv &> /dev/null; then
        in2csv "$excel_file" > "$csv_file"
        if [ $? -eq 0 ]; then
            print_message "$GREEN" "Excel file converted successfully using in2csv."
            return 0
        fi
    fi
    
    print_message "$RED" "Failed to convert Excel file. Please install gnumeric or csvkit."
    return 1
}

# Function to validate CSV format
validate_csv() {
    local csv_file=$1
    
    if [ ! -f "$csv_file" ]; then
        print_message "$RED" "CSV file not found: $csv_file"
        return 1
    fi
    
    # Check if CSV has required columns
    local header=$(head -n 1 "$csv_file")
    local required_cols=("server_name" "host" "port" "admin_user" "admin_password")
    
    for col in "${required_cols[@]}"; do
        if [[ ! "$header" =~ $col ]]; then
            print_message "$RED" "Required column '$col' not found in CSV header"
            print_message "$YELLOW" "CSV header: $header"
            return 1
        fi
    done
    
    print_message "$GREEN" "CSV format validation passed."
    return 0
}

# Function to create user on a single MySQL server
create_user_on_server() {
    local server_name=$1
    local host=$2
    local port=$3
    local admin_user=$4
    local admin_password=$5
    local database=$6
    local new_username=$7
    local new_password=$8
    local user_host=$9
    local privileges=${10}
    
    print_message "$BLUE" "Attempting to create user '$new_username' on server: $server_name ($host:$port)"
    
    # Create MySQL commands
    local create_user_sql="CREATE USER IF NOT EXISTS '${new_username}'@'${user_host}' IDENTIFIED BY '${new_password}';"
    local grant_privileges_sql="GRANT ${privileges} ON ${database:-'*'}.* TO '${new_username}'@'${user_host}';"
    local flush_privileges_sql="FLUSH PRIVILEGES;"
    
    # Combine all SQL commands
    local full_sql="${create_user_sql} ${grant_privileges_sql} ${flush_privileges_sql}"
    
    # Execute MySQL commands
    local mysql_output
    mysql_output=$(mysql -h "$host" -P "$port" -u "$admin_user" -p"$admin_password" -e "$full_sql" 2>&1)
    local mysql_exit_code=$?
    
    if [ $mysql_exit_code -eq 0 ]; then
        print_message "$GREEN" "✓ User '$new_username' created successfully on $server_name"
        echo "$server_name,$host,$port,SUCCESS,User created successfully" >> "$RESULTS_FILE"
        return 0
    else
        print_message "$RED" "✗ Failed to create user '$new_username' on $server_name"
        print_message "$RED" "Error: $mysql_output"
        echo "$server_name,$host,$port,FAILED,$mysql_output" >> "$RESULTS_FILE"
        return 1
    fi
}

# Function to process all servers
process_servers() {
    local csv_file=$1
    local username=$2
    local password=$3
    local user_host=$4
    local privileges=$5
    
    local success_count=0
    local total_count=0
    
    print_message "$BLUE" "Starting user creation process..."
    print_message "$BLUE" "Username: $username"
    print_message "$BLUE" "Host pattern: $user_host"
    print_message "$BLUE" "Privileges: $privileges"
    print_message "$BLUE" "$(printf '%.0s-' {1..50})"
    
    # Initialize results file
    echo "Server Name,Host,Port,Status,Message" > "$RESULTS_FILE"
    
    # Skip header and process each server
    tail -n +2 "$csv_file" | while IFS=',' read -r server_name host port admin_user admin_password database rest; do
        # Clean up fields (remove quotes and spaces)
        server_name=$(echo "$server_name" | tr -d '"' | xargs)
        host=$(echo "$host" | tr -d '"' | xargs)
        port=$(echo "$port" | tr -d '"' | xargs)
        admin_user=$(echo "$admin_user" | tr -d '"' | xargs)
        admin_password=$(echo "$admin_password" | tr -d '"' | xargs)
        database=$(echo "$database" | tr -d '"' | xargs)
        
        # Skip empty lines
        [ -z "$server_name" ] && continue
        
        ((total_count++))
        
        if create_user_on_server "$server_name" "$host" "$port" "$admin_user" "$admin_password" "$database" "$username" "$password" "$user_host" "$privileges"; then
            ((success_count++))
        fi
        
        echo "" # Add spacing between servers
    done
    
    # Update counters from subshell
    success_count=$(grep -c "SUCCESS" "$RESULTS_FILE")
    total_count=$(( $(wc -l < "$RESULTS_FILE") - 1 )) # Subtract header
    
    print_message "$BLUE" "$(printf '%.0s-' {1..50})"
    print_message "$GREEN" "Process completed!"
    print_message "$GREEN" "Successful: $success_count out of $total_count servers"
    print_message "$BLUE" "Results saved to: $RESULTS_FILE"
    print_message "$BLUE" "Log saved to: $LOG_FILE"
}

# Function to generate sample Excel file
generate_sample_excel() {
    local sample_file="sample_mysql_servers.xlsx"
    local sample_csv="/tmp/sample_servers.csv"
    
    cat > "$sample_csv" << EOF
server_name,host,port,admin_user,admin_password,database
Production DB,prod-db.example.com,3306,admin,admin123,myapp
Staging DB,staging-db.example.com,3306,root,root123,myapp
Development DB,dev-db.example.com,3306,devuser,dev123,myapp
Test DB,test-db.example.com,3306,testadmin,test123,myapp
EOF
    
    if command -v ssconvert &> /dev/null; then
        ssconvert "$sample_csv" "$sample_file" 2>/dev/null
        if [ $? -eq 0 ]; then
            print_message "$GREEN" "Sample Excel file created: $sample_file"
        else
            print_message "$YELLOW" "Could not create Excel file. Sample CSV created: $sample_csv"
        fi
    else
        print_message "$YELLOW" "Sample CSV created: $sample_csv"
        print_message "$YELLOW" "Install gnumeric to convert to Excel format"
    fi
}

# Main function
main() {
    # Parse command line arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            -f|--file)
                EXCEL_FILE="$2"
                shift 2
                ;;
            -u|--username)
                DEFAULT_USERNAME="$2"
                shift 2
                ;;
            -p|--password)
                DEFAULT_PASSWORD="$2"
                shift 2
                ;;
            -h|--host)
                DEFAULT_HOST="$2"
                shift 2
                ;;
            --privileges)
                DEFAULT_PRIVILEGES="$2"
                shift 2
                ;;
            --help)
                show_usage
                exit 0
                ;;
            --sample)
                generate_sample_excel
                exit 0
                ;;
            *)
                print_message "$RED" "Unknown option: $1"
                show_usage
                exit 1
                ;;
        esac
    done
    
    # Validate required parameters
    if [ -z "$DEFAULT_PASSWORD" ]; then
        print_message "$RED" "Password is required. Use -p or --password option."
        exit 1
    fi
    
    print_message "$GREEN" "MySQL User Creation Script Started"
    print_message "$BLUE" "Timestamp: $(date)"
    
    # Check dependencies
    check_dependencies
    
    # Convert Excel to CSV
    if ! convert_excel_to_csv "$EXCEL_FILE" "$CSV_FILE"; then
        print_message "$RED" "Failed to process Excel file. Exiting."
        exit 1
    fi
    
    # Validate CSV format
    if ! validate_csv "$CSV_FILE"; then
        print_message "$RED" "CSV validation failed. Exiting."
        exit 1
    fi
    
    # Process all servers
    process_servers "$CSV_FILE" "$DEFAULT_USERNAME" "$DEFAULT_PASSWORD" "$DEFAULT_HOST" "$DEFAULT_PRIVILEGES"
    
    # Cleanup temporary files
    rm -f "$CSV_FILE"
    
    print_message "$GREEN" "Script execution completed!"
}

# Run main function with all arguments
main "$@"