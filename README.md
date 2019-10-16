![CI](https://github.com/covertbert/cats-api-graphql/workflows/CI/badge.svg)

# 🐈 Cats GraphQL API

The cats graphql API, which retrieves cat data. This is a Node service, written in TypeScript, which uses Apollo Server to expose a GraphQL endpoint.

## Running locally

This project uses `ts-node` to for typescript which you can run using `npm run start`. To run in watch mode in development use `npm run watch`.

However, this won't work on its own because the service relies on database which is set up as follows:

- To spin up Docker `cd docker` and run `./run.sh`.
- You can then run `./ops/watch.sh` which will run the migrations, seeds and then run the project in watch mode.

## Unit & Integration tests

Because the integrations tests rely on a database you need to first run docker with `cd docker` and run `./run.sh`. You can then run `./ops/watch.sh` from the root of the repo
