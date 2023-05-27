#!/bin/sh
git pull origin main
yarn install
yarn build

sudo service nginx restart