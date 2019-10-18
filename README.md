![Cat Engine](https://github.com/covertbert/cats-api-graphql/workflows/CI/badge.svg)

# 🐈 Cats GraphQL API

This is a cats API, which retrieves the cat data used to power the internet. It is a Node service, written in TypeScript, which uses Apollo Server to expose a GraphQL endpoint.

## Running locally

To get the service up and running quickly in a local environment you need to:

- Run `cd ops/docker` and then `./run.sh`
- Visit `http://localhost:4000` in the browser to interact with the API via the GraphQL playground

### In development

To run in watch mode for development you'll need to:

- Spin up just the Postgres container in Docker with `cd ops/docker` and `./run.sh db`.
- Then hit `./ops/watch.sh` from another tab in the root of the repo which will first run the migrations/seeds and then run the project in watch mode and serve it on `http://localhost:4000`

## Unit & integration tests

Because the integration tests rely on a database you need to first run Docker with `cd ops/docker` and `./run.sh db`. You can then run `./ops/test.sh` from the root of the repo.

## CI Pipeline

There are multiple CI pipelines that run in GitHub Actions:

- Branch pipeline: Runs unit and integration tests, preventing PRs being merged without passing checks
- Master pipeline: Runs unit and integration tests again but then deploys if they are successful
