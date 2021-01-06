const fetch = require("node-fetch");
const requestsService = require('./shared/requests.js');
const serverSideRequests = new requestsService.requestsService(fetch);
module.exports = serverSideRequests