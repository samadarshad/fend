# Evaluate NLP Project

## Overview
A web app which uses a Natural Language Processing API to display sentiment information for input text.

The project is hosted at https://evaluate-nlp-abdus-samad.herokuapp.com/

## Prerequisite
This project was tested on:

```
npm version 6.14.0
node version 14.15.1
```

## Installation
Run `sudo npm ci` to install the dependencies, fail if not work. Do `sudo npm install` if it doesnt work.

## Build & run for production (client and server)
Run `sudo npm build-prod` to build for production.

`sudo npm run start`

Go to `http://localhost:3000`

## Build & run for development (client only)
Run `sudo npm build-dev` to build and run for development. 

Go to `http://localhost:8080`

Note that if you are going to test server functionality while on development, you must also have the production server running (follow instructions for building and running for production), as the client refers to SERVER_BASE_ENDPOINT_URL=http://127.0.0.1:3000/api as defined in .dev_env. 

## Running the tests
`sudo npm run tests`

Note the tests rely on https://beeceptor.com/console/abdus-samad-weather-journal-test being live. 

## Errors
Errors are handled by logging to the server console, and sending to the client in the form `Error: <status_code>`.