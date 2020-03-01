#!/usr/bin/sh

echo "Packaging up build."

# Compress contents into a tarball.
#tar -czf package.tgz . --warning=no-file-changed

echo "Sending package to remote host..."

# Scp into remote host and place tarball into builds in home.
scp -o stricthostkeychecking=no -r ./* "$REMOTE_USER@$REMOTE_HOST:/var/www/coachella.upword.ly/html/" || exit 1

## Start ssh session.
#ssh -t -o stricthostkeychecking=no "$REMOTE_USER@$REMOTE_HOST" << "ENDSSH"
#
## Prod mode.
#echo "Setting NODE_ENV, REACT_APP_ENV to production."
#export NODE_ENV=production
#export REACT_APP_ENV=production
#
## Go into existing build.
#cd /var/www/coachella.upword.ly
#
## Remove it.
#rm -r html
#
## Create empty folder.
#mkdir html
#
## Go into deploy folder.
#cd /home/deploy/builds/coachella || exit 1
#
## Extract the package we just scp'd over.
#echo "Extracting contents of tarball into /var/www/coachella.upword.ly/html."
#tar -zxf package.tgz -C /var/www/coachella.upword.ly/html --unlink-first
#
## Delete package.
#echo "Removing package."
#rm package.tgz

ENDSSH

