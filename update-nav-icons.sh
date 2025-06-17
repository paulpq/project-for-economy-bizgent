#!/bin/bash

# This script adds navigation icons to all HTML files

# Find all HTML files
HTML_FILES=$(find . -name "*.html")

for file in $HTML_FILES; do
  echo "Processing $file..."
  
  # Add icons to navigation menu items
  sed -i 's|<a href="index.html" class="nav-link">Acasă</a>|<a href="index.html" class="nav-link"><i class="fas fa-home"></i> Acasă</a>|g' "$file"
  sed -i 's|<a href="services-ro.html" class="nav-link">Servicii</a>|<a href="services-ro.html" class="nav-link"><i class="fas fa-cogs"></i> Servicii</a>|g' "$file"
  sed -i 's|<a href="use-cases-ro.html" class="nav-link">Studii de Caz</a>|<a href="use-cases-ro.html" class="nav-link"><i class="fas fa-lightbulb"></i> Studii de Caz</a>|g' "$file"
  sed -i 's|<a href="about-ro.html" class="nav-link">Despre</a>|<a href="about-ro.html" class="nav-link"><i class="fas fa-info-circle"></i> Despre</a>|g' "$file"
  sed -i 's|<a href="pricing-ro.html" class="nav-link">Prețuri</a>|<a href="pricing-ro.html" class="nav-link"><i class="fas fa-tags"></i> Prețuri</a>|g' "$file"
  sed -i 's|<a href="contact-ro.html" class="nav-link">Contact</a>|<a href="contact-ro.html" class="nav-link"><i class="fas fa-envelope"></i> Contact</a>|g' "$file"
  
  # Also update English and Russian versions
  sed -i 's|<a href="index-en.html" class="nav-link">Home</a>|<a href="index-en.html" class="nav-link"><i class="fas fa-home"></i> Home</a>|g' "$file"
  sed -i 's|<a href="services.html" class="nav-link">Services</a>|<a href="services.html" class="nav-link"><i class="fas fa-cogs"></i> Services</a>|g' "$file"
  sed -i 's|<a href="use-cases.html" class="nav-link">Case Studies</a>|<a href="use-cases.html" class="nav-link"><i class="fas fa-lightbulb"></i> Case Studies</a>|g' "$file"
  sed -i 's|<a href="about.html" class="nav-link">About</a>|<a href="about.html" class="nav-link"><i class="fas fa-info-circle"></i> About</a>|g' "$file"
  sed -i 's|<a href="pricing.html" class="nav-link">Pricing</a>|<a href="pricing.html" class="nav-link"><i class="fas fa-tags"></i> Pricing</a>|g' "$file"
  sed -i 's|<a href="contact.html" class="nav-link">Contact</a>|<a href="contact.html" class="nav-link"><i class="fas fa-envelope"></i> Contact</a>|g' "$file"
  
  sed -i 's|<a href="index-ru.html" class="nav-link">Главная</a>|<a href="index-ru.html" class="nav-link"><i class="fas fa-home"></i> Главная</a>|g' "$file"
  sed -i 's|<a href="services-ru.html" class="nav-link">Услуги</a>|<a href="services-ru.html" class="nav-link"><i class="fas fa-cogs"></i> Услуги</a>|g' "$file"
  sed -i 's|<a href="use-cases-ru.html" class="nav-link">Кейсы</a>|<a href="use-cases-ru.html" class="nav-link"><i class="fas fa-lightbulb"></i> Кейсы</a>|g' "$file"
  sed -i 's|<a href="about-ru.html" class="nav-link">О нас</a>|<a href="about-ru.html" class="nav-link"><i class="fas fa-info-circle"></i> О нас</a>|g' "$file"
  sed -i 's|<a href="pricing-ru.html" class="nav-link">Цены</a>|<a href="pricing-ru.html" class="nav-link"><i class="fas fa-tags"></i> Цены</a>|g' "$file"
  sed -i 's|<a href="contact-ru.html" class="nav-link">Контакты</a>|<a href="contact-ru.html" class="nav-link"><i class="fas fa-envelope"></i> Контакты</a>|g' "$file"
  
  echo "  Updated navigation icons in $file"
done

echo "Done!" 