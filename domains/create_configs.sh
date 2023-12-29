#!/bin/bash

# Define the directory containing domain directories
PARENT_DIR="./"
# Define the content to write to config.json
CONFIG_CONTENT=$(cat <<EOL
{
  "network": "chosen_network_name",
  "additional_config": "some_value"
}
EOL
)

# Loop over all directories under the parent directory
for domain_dir in "$PARENT_DIR"/*; do
  # Check if it is a directory
  if [ -d "$domain_dir" ]; then
    # Define the path to the cdn/config.json
    CONFIG_FILE="$domain_dir/cdn/config.json"

    # Create the cdn directory if it doesn't exist
    mkdir -p "$(dirname "$CONFIG_FILE")"

    # Write the content to config.json
    echo "$CONFIG_CONTENT" > "$CONFIG_FILE"
    
    # Provide some feedback
    echo "Config file created at $CONFIG_FILE"
  fi
done
