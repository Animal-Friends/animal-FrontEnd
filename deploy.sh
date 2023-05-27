#!/bin/sh
sudo rm -rf node_modules
nvm install 18.0.0
nvm use 18.0.0

npm install -g yarn

sudo yarn install
sudo yarn build