#!/bin/bash

# List of pages to download
PAGES=("index.html" "about.html" "contact.html")

# Base URL
BASE_URL="https://www.monadlisa.com/"

# Destination directory
DEST_DIR="./downloaded_pages/"

# Create destination directory if it doesn't exist
mkdir -p $DEST_DIR

# Loop through all pages and download them
for PAGE in "${PAGES[@]}"; do
    curl -o "$DEST_DIR$PAGE" "$BASE_URL$PAGE"
done

