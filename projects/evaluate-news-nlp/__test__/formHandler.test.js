// import "regenerator-runtime/runtime";
// import { sendForm } from "../src/client/js/formHandler"
// import { Client, sendForm } from "../dist/ClientLib.js"
global.Client = require('../dist/ClientLib')
const fetch = require('node-fetch')

describe('formHandler', () => {
    
    it('sendForm is defined', async done => {
        Client.setFetch(fetch)
        Client.setServerUrl('https://abdus-samad-weather-journal-test.free.beeceptor.com')
        console.log("get url:", Client.getServerUrl())
        // expect(Client.sendForm).toBeDefined();
        const res = await Client.sendForm("Hello")
        console.log(res)
        // expect(res).toBeDefined()
        done()
    })

})