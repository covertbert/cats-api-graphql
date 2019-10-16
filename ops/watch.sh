#!/usr/bin/env bash

export DB_HOST=localhost

npm run migrate:run
npm run seed:run

npm run watch