#!/usr/bin/env bash

export NODE_ENV=development

npm run migrate:run
npm run seed:run

DISABLE_LOGGING=true npx jest --forceExit