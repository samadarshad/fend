const fetch = require('node-fetch');
// import "regenerator-runtime/runtime";
const requestsService = require('../shared/requests.js');
const serverSideRequests = new requestsService.requestsService(fetch);
module.exports = serverSideRequests