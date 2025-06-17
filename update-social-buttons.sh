#!/bin/bash

# This script updates the social media buttons in all HTML files

# Find all HTML files
HTML_FILES=$(find . -name "*.html")

for file in $HTML_FILES; do
  echo "Processing $file..."
  
  # Replace the social links section with updated icons
  sed -i '/<div class="social-links">/,/<\/div>/c\
    <div class="social-links">\
        <a href="#" aria-label="X"><i class="fab fa-x-twitter"></i></a>\
        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>\
        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>\
    </div>' "$file"
  
  echo "  Updated social media buttons in $file"
done

echo "Done!" 