#!/bin/bash
BASE_DIR=`dirname "$0"`
$BASE_DIR/stop.sh

CONTAINER_NAME="severkabel_site"
docker load --input /root/severkabel/docker.tar
docker run --name $CONTAINER_NAME -p 80:3012 -d -it severkabel
