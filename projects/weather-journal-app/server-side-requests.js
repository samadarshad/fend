global.fetch = require("node-fetch");
// const fetch = require("node-fetch");
const requests = require('./shared/requests.js');

class testFetch {
    foo() {
        return "I am testFetch"
    }
}

const testObj = new testFetch();
const requestsWithFetch = new requests.requestsService(testObj)
console.log("server-side-requests:", requestsWithFetch.getDisplayData());

module.exports = requests