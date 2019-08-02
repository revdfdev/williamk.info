#!/bin/bash

# This is the PRIMARY deploy script for the website. You should just have to call this one file and it will
# proceed to deploy the entire codebase. 
#
# Last Modified:
#       William Kwok
#       June 8, 2019


# Build and push the container
docker-compose -f "docker-compose.yml" build
docker-compose push

# SSH into the IUGA server and run an update script that is passed in through the ssh
# 
# MAKE SURE TO CHANGE THE USERNAME TO YOUR OWN!
ssh ec2-user@52.88.27.163 'bash -s' < zz_deploy_helper_update.sh