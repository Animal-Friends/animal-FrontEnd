#!/bin/sh
# 👇️ for macOS and Linux
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock

# 👇️ clean npm cache
npm cache clean --force

# 👇️ install packages


sudo yarn install
sudo yarn build

