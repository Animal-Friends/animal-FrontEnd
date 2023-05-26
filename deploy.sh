#!/bin/bash
sudo su

cd
cd animal-FrontEnd

git pull origin main

yarn build

sudo service nginx restart