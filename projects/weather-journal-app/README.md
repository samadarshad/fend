# Weather-Journal App Project

## Overview
Asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Prerequisite
This project was tested on:

```
npm version 6.14.0
node version 14.15.1
```

## Installation
Run `sudo npm ci` to install the dependencies, fail if not work. Do `sudo npm install` if it doesnt work.

## How to run 
`sudo npm run start`

Go to `http://localhost:3000`

## Running the tests
`sudo npm run tests`

Note the tests rely on https://beeceptor.com/console/abdus-samad-weather-journal-test being live. 

## Errors
Errors are handled by logging to the server console, and sending to the client in the form `Error: <status_code>`.