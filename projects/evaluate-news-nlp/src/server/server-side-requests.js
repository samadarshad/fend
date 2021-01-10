const fetch = require('node-fetch');
// import "regenerator-runtime/runtime";
const requestsServiceModule = require('../shared/requests.js');
const serverSideRequests = new requestsServiceModule.requestsServiceClass(fetch);
module.exports = serverSideRequests