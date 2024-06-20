#!/bin/bash

# Iterate over all submodules and commit & push changes
git submodule foreach --recursive '
  echo "Processing submodule at $name"
  git add .
  git commit -m "Commit message for submodule at $name"
  git push origin main # Change branch name if necessary
'

# Commit and push changes in the main repository
echo "Processing main repository"
git add .
git commit -m "Commit message for main repository"
git push origin main # Change branch name if necessary
'

# Print completion message
echo "All changes have been committed and pushed."
