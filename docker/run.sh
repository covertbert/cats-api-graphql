#!/usr/bin/env bash

docker-compose kill
docker-compose rm -vf
docker-compose build
docker-compose up -d
