#!/bin/bash

# Iterate over all submodules and commit & push changes
git submodule foreach --recursive '
  echo "Processing submodule at $name"
  git add .
  git commit -m "$name"
  git push origin main 
'

# Commit and push changes in the main repository
echo "Processing main repository"
git add .
git commit -m "main repository"
git push origin main 
'

# Print completion message
echo "All changes have been committed and pushed."
