#!/usr/bin/env bash

docker-compose kill
docker-compose rm -vf
docker-compose build
docker-compose up --remove-orphans --abort-on-container-exit "$@"
