#!/bin/bash
set -e

# Build the static site
echo "Building..."
npm run build

# Commit and push source code to main
echo "Pushing source to main..."
git add -A
git commit -m "Update site" || echo "No source changes to commit"
git push origin main

# Update webpage branch with static output
echo "Pushing static output to webpage..."
TEMP_DIR=$(mktemp -d)
cp -r out/* "$TEMP_DIR"
cp out/.nojekyll "$TEMP_DIR" 2>/dev/null || true

git checkout webpage
# Remove old files (except .git)
git rm -rf . > /dev/null 2>&1 || true
cp -r "$TEMP_DIR"/. .
rm -rf "$TEMP_DIR"
git add -A
git commit -m "Update static build" || echo "No build changes to commit"
git push origin webpage

# Switch back to main
git checkout main

echo "Done! Both main and webpage branches updated."
