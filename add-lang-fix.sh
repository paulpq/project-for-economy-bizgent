#!/bin/bash

# This script adds the lang-fix.js script to all HTML files that don't already have it

# List of HTML files to process (excluding the ones we've already fixed)
HTML_FILES=$(find . -name "*.html" | grep -v "index.html\|index-en.html\|index-ru.html")

for file in $HTML_FILES; do
  echo "Processing $file..."
  
  # Check if the file already includes lang-fix.js
  if grep -q "lang-fix.js" "$file"; then
    echo "  lang-fix.js already included in $file, skipping."
  else
    # Add the lang-fix.js script before the closing body tag
    sed -i 's|<script src="js/script.js"></script>|<script src="js/script.js"></script>\n    <script src="lang-fix.js"></script>|' "$file"
    echo "  Added lang-fix.js to $file"
  fi
done

echo "Done!" 