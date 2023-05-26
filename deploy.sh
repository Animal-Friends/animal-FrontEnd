#!/bin/bash
sudo su
cd
cd animal-FrontEnd
chmod +x deploy.sh

git pull origin main


yarn build

sudo service nginx restart