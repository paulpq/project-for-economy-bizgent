#!/bin/bash

# This script updates the Font Awesome CDN link in all HTML files

# Find all HTML files
HTML_FILES=$(find . -name "*.html")

for file in $HTML_FILES; do
  echo "Processing $file..."
  
  # Update the Font Awesome CDN link
  sed -i 's|https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css|https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css|g' "$file"
  
  echo "  Updated Font Awesome CDN in $file"
done

echo "Done!" 