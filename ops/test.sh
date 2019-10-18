#!/usr/bin/env bash

cd ops/docker || exit
./run-ci.sh
npm run migrate:run
npm run seed:run

DISABLE_LOGGING=true jest --forceExit