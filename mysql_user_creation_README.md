# MySQL User Creation Script

This bash script automates the process of creating MySQL users across multiple database servers by reading server connection details from an Excel file.

## Features

- ✅ **Excel File Support**: Reads server details from Excel (.xlsx) files
- ✅ **Multiple Server Support**: Processes multiple MySQL servers in batch
- ✅ **Comprehensive Logging**: Creates detailed logs and result files
- ✅ **Error Handling**: Robust error handling with colored output
- ✅ **Dependency Management**: Automatically installs required dependencies
- ✅ **Flexible Configuration**: Customizable user privileges and host patterns
- ✅ **Results Reporting**: Generates detailed success/failure reports

## Prerequisites

The script will automatically install missing dependencies, but you may want to install them manually:

```bash
# Install MySQL client
sudo apt-get update
sudo apt-get install -y mysql-client

# Install gnumeric for Excel file conversion
sudo apt-get install -y gnumeric

# Alternative: Install csvkit for Excel conversion
pip install csvkit
```

## Excel File Format

Your Excel file should contain the following columns:

| Column Name | Description | Example |
|-------------|-------------|---------|
| server_name | Descriptive name for the server | Production DB |
| host | MySQL server hostname or IP | prod-db.example.com |
| port | MySQL server port | 3306 |
| admin_user | MySQL admin username | admin |
| admin_password | MySQL admin password | admin123 |
| database | Target database (optional, defaults to *) | myapp |

### Sample Excel Structure

```
server_name         | host                    | port | admin_user | admin_password | database
Production DB       | prod-db.example.com     | 3306 | admin      | admin123       | myapp
Staging DB          | staging-db.example.com  | 3306 | root       | root123        | myapp
Development DB      | dev-db.example.com      | 3306 | devuser    | dev123         | myapp
```

A sample CSV file (`sample_mysql_servers.csv`) is provided for reference.

## Usage

### Basic Usage

```bash
# Create user with basic options
./script.sh -u myuser -p mypassword

# Specify custom Excel file
./script.sh -f custom_servers.xlsx -u myuser -p mypassword

# Create user with specific host pattern
./script.sh -u myuser -p mypassword -h "%.example.com"

# Grant specific privileges
./script.sh -u myuser -p mypassword --privileges "SELECT,INSERT,UPDATE"
```

### Command Line Options

| Option | Description | Default |
|--------|-------------|---------|
| `-f, --file FILE` | Excel file with server details | mysql_servers.xlsx |
| `-u, --username USER` | Username to create | newuser |
| `-p, --password PASS` | Password for the new user | (required) |
| `-h, --host HOST` | Host pattern for user | % |
| `--privileges PRIVS` | Privileges to grant | SELECT,INSERT,UPDATE,DELETE |
| `--help` | Show help message | - |
| `--sample` | Generate sample Excel file | - |

### Examples

```bash
# Example 1: Create user on all servers with default privileges
./script.sh -u appuser -p SecurePass123

# Example 2: Create user with limited privileges
./script.sh -u readonly_user -p ReadOnlyPass456 --privileges "SELECT"

# Example 3: Create user accessible only from specific subnet
./script.sh -u local_user -p LocalPass789 -h "192.168.1.%"

# Example 4: Use custom Excel file
./script.sh -f production_servers.xlsx -u prod_user -p ProdPass123

# Generate sample Excel file
./script.sh --sample
```

## Output Files

The script generates several output files:

1. **Log File**: `user_creation_log_YYYYMMDD_HHMMSS.log`
   - Contains detailed execution logs with timestamps
   - Includes all operations, errors, and status messages

2. **Results File**: `user_creation_results_YYYYMMDD_HHMMSS.txt`
   - CSV format with success/failure status for each server
   - Columns: Server Name, Host, Port, Status, Message

### Sample Results File
```csv
Server Name,Host,Port,Status,Message
Production DB,prod-db.example.com,3306,SUCCESS,User created successfully
Staging DB,staging-db.example.com,3306,FAILED,Access denied for user 'admin'@'%'
Development DB,dev-db.example.com,3306,SUCCESS,User created successfully
```

## Security Considerations

1. **Password Security**: The script accepts passwords via command line. Consider using environment variables or secure input methods for production use.

2. **Connection Security**: Ensure secure connections to MySQL servers when possible.

3. **Admin Credentials**: Store admin credentials securely in the Excel file. Consider file encryption for sensitive environments.

4. **Log Files**: Log files may contain sensitive information. Secure or delete them after use.

## Error Handling

The script includes comprehensive error handling for:

- Missing dependencies (auto-installation)
- Invalid Excel file format
- Network connection issues
- MySQL authentication failures
- Invalid SQL syntax
- Missing required parameters

## Troubleshooting

### Common Issues

1. **Excel Conversion Fails**
   ```
   Error: Failed to convert Excel file
   Solution: Install gnumeric or csvkit
   ```

2. **MySQL Connection Fails**
   ```
   Error: Access denied for user
   Solution: Verify admin credentials in Excel file
   ```

3. **Permission Denied**
   ```
   Error: Permission denied
   Solution: Ensure script is executable (chmod +x script.sh)
   ```

### Debug Mode

For detailed debugging, check the log file generated during execution. It contains:
- Dependency check results
- Excel conversion status
- Individual server connection attempts
- SQL command execution results

## Limitations

1. Currently supports MySQL servers only
2. Requires Excel file format with specific column names
3. Creates one user per execution (not multiple users at once)
4. Requires admin privileges on target MySQL servers

## Contributing

To enhance the script:
1. Add support for other database types
2. Implement encrypted credential storage
3. Add parallel processing for faster execution
4. Include user deletion functionality

## License

This script is provided as-is for educational and operational purposes. Use at your own risk and ensure proper testing in non-production environments first.