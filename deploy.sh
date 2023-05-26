#!/bin/bash


git pull origin main

yarn build

sudo service nginx restart