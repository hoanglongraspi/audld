#!/bin/bash

# Test script to verify MIME types are correctly configured
echo "Testing MIME types for JavaScript files..."

# Build the project first
echo "Building the project..."
npm run build

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "Error: dist folder not found. Build may have failed."
    exit 1
fi

# Find JS files in dist
echo "JavaScript files found in dist:"
find dist -name "*.js" -type f | head -5

echo ""
echo "To test MIME types after deployment, run:"
echo "curl -I http://your-domain/assets/main.js"
echo ""
echo "Look for: Content-Type: text/javascript"
echo ""
echo "If you see 'application/octet-stream', the MIME type is not configured correctly."
