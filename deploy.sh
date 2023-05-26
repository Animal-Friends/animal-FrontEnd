#!/bin/bash

sudo su
cd

cd animal-Frontend
git pull origin main

yarn build

sudo service nginx restart