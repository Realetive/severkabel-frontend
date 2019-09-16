#!/bin/bash
BASE_DIR=`dirname "$0"`
$BASE_DIR/stop.sh

CONTAINER_NAME="severkabel_site"
docker load --input /home/deploy/severkabel/docker.tar
docker run --name $CONTAINER_NAME -p 3012:3012 -d -it severkabel
