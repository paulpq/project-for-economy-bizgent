#!/bin/bash

# This script removes the resources and partners pages from all HTML files

# Find all HTML files
HTML_FILES=$(find . -name "*.html")

for file in $HTML_FILES; do
  echo "Processing $file..."
  
  # Remove the resources page link from navigation
  sed -i '/<li class="nav-item"><a href="resources.*\.html" class="nav-link">/d' "$file"
  
  # Remove the partners page link from navigation
  sed -i '/<li class="nav-item"><a href="partners.*\.html" class="nav-link">/d' "$file"
  
  # Remove the partners preview section from index pages
  if [[ "$file" == *"index"* ]]; then
    # Delete the entire partners-preview section
    sed -i '/<section class="home-section partners-preview">/,/<\/section>/d' "$file"
  fi
  
  echo "  Removed resources and partners from $file"
done

echo "Done!" 