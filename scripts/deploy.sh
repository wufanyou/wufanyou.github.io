#!/bin/bash
set -e

REPO_URL=$(git remote get-url origin)

# Build the static site
echo "Installing dependencies..."
npm install
echo "Building..."
npm run build

# Clean unnecessary files from out/
echo "Cleaning build output..."
find out/ -name "*.txt" -delete
find out/ -name "*.map" -delete

# Commit and push source code to main
echo "Pushing source to main..."
git add -A
git commit -m "Update site" || echo "No source changes to commit"
git push origin main

# Update webpage branch in an isolated temp repo
echo "Pushing static output to webpage..."
TEMP_DIR=$(mktemp -d)
cd "$TEMP_DIR"
git init
git checkout --orphan webpage
cp -r "$OLDPWD"/out/. .
git add -A
git commit -m "Update static build"
git remote add origin "$REPO_URL"
git push origin webpage --force
cd "$OLDPWD"
rm -rf "$TEMP_DIR"

echo "Done! Both main and webpage branches updated."
