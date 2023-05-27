#!/bin/sh
git pull origin main
yarn install
yarn build

service nginx restart