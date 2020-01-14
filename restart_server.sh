#!/bin/sh
NAME=server
REGISTRY=347594456574.dkr.ecr.us-east-2.amazonaws.com
sudo docker run -d -p 3000:80 --name ${NAME} --restart=always ${REGISTRY}/${NAME}:latest
