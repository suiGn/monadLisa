# Workflow for Git Tags and NPM Publishing

## Overview
This document outlines our workflow for using git tags in conjunction with npm publishing within our monorepo structure. The purpose is to ensure a clear, traceable connection between the source code in our repository and the versions published to npm.

## Git Tags and NPM Releases

### When to Create a Git Tag
- A new git tag should be created whenever a new version of a package is ready to be published to npm.
- The tag should correspond to the version number being published.

### Creating a Git Tag
1. Ensure all changes for the release are merged into the main branch and that the repository is in a clean state.
2. Update the version in `package.json` using `npm version` which will also create a git tag automatically:
   ```bash
   npm version [major | minor | patch] -m "Release %s"

   Replace `[major | minor | patch]` with the appropriate version increment.
   The `%s` will be replaced by the new version number from `package.json`.

### Pushing Tags to GitHub
- After creating a tag, push it to GitHub along with your changes:
  ```bash
  git push origin main --tags
  ```
- This command pushes both the commits and the tags to the main branch.

### Publishing to NPM
- Once the tag is pushed to GitHub, you can publish the package to npm:
  ```bash
  npm publish
  ```
- Ensure you are logged into npm (`npm login`) with the account that has access to publish the package.

## Checking for Updates
- To see if the local version and the npm published version align, you can compare the latest git tag with the version on npm using:
  ```bash
  npm view [package-name] version
  git describe --tags
  ```

## Best Practices
- Always verify that the correct version is tagged and published.
- Maintain a clean and clear history by following a consistent commit message format, especially for version bumps and releases.

By following this workflow, we maintain a reliable and consistent process for versioning and publishing, ensuring our npm packages and git repository remain in sync.
