#!/usr/bin/sh

echo "Packaging up build."

# Compress contents into a tarball.
tar -czf package.tgz . --warning=no-file-changed

echo "Sending package to remote host..."

# Scp into remote host and place tarball into builds in home.
scp -o stricthostkeychecking=no package.tgz "$REMOTE_USER@$REMOTE_HOST:/home/deploy/builds/coachella" || exit 1

# Start ssh session.
ssh -t -o stricthostkeychecking=no "$REMOTE_USER@$REMOTE_HOST"

# Prod mode.
echo "Setting NODE_ENV, REACT_APP_ENV to production."
export NODE_ENV=production
export REACT_APP_ENV=production

# Go into deploy folder.
cd /home/deploy/builds/coachella || exit 1

# Extract the package we just scp'd over.
echo "Extracting contents of tarball into /var/www/coachella.upword.ly/html."
tar -zxf package.tgz -C /var/www/coachella.upword.ly/html --unlink-first

# Delete package.
echo "Removing package."
rm package.tgz

ENDSSH

