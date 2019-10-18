#!/usr/bin/env bash

npm run migrate:run
npm run seed:run

DISABLE_LOGGING=true npx jest --forceExit