#!/bin/bash

# Test script for MySQL User Creation Script
# This script demonstrates how to use the main script

echo "=== MySQL User Creation Script Test ==="
echo ""

# Check if main script exists
if [ ! -f "script.sh" ]; then
    echo "Error: script.sh not found!"
    exit 1
fi

# Make sure script is executable
chmod +x script.sh

echo "1. Showing help information:"
echo "========================================="
./script.sh --help
echo ""

echo "2. Generating sample Excel file:"
echo "========================================="
./script.sh --sample
echo ""

echo "3. Showing sample CSV structure:"
echo "========================================="
if [ -f "sample_mysql_servers.csv" ]; then
    echo "Sample CSV content:"
    cat sample_mysql_servers.csv
    echo ""
else
    echo "Sample CSV file not found!"
fi

echo "4. Testing script validation (without password - should fail):"
echo "========================================="
./script.sh -u testuser 2>/dev/null || echo "✓ Correctly failed due to missing password"
echo ""

echo "5. Testing with missing Excel file (should fail gracefully):"
echo "========================================="
./script.sh -f nonexistent.xlsx -u testuser -p testpass 2>/dev/null || echo "✓ Correctly failed due to missing Excel file"
echo ""

echo "=== Test Complete ==="
echo ""
echo "To run the actual script with your servers:"
echo "1. Create an Excel file with your server details"
echo "2. Run: ./script.sh -f your_servers.xlsx -u username -p password"
echo ""
echo "For more information, see: mysql_user_creation_README.md"