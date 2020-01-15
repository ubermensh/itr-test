#!/bin/sh
#get credentials for docker to push to ecr
#$(aws ecr get-login --no-include-email --region us-east-2)
aws ecr get-login --no-include-email --region us-east-2