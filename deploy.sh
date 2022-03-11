#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build


echo "Deploying files to server"
rsync -avP build/ root@45.79.180.26:/var/www/fetti.life/
echo "Deployment complete"