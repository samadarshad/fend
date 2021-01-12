// import "regenerator-runtime/runtime";
// import { sendForm } from "../src/client/js/formHandler"
// import { Client, sendForm } from "../dist/ClientLib.js"
global.Client = require('../dist/ClientLib')
const fetch = require('node-fetch')

describe('formHandler', () => {
    
    it('sendForm is defined', async done => {
        Client.setFetch(fetch)
        console.log("get url:", Client.getServerUrl())
        // expect(Client.sendForm).toBeDefined();
        const res = await Client.sendForm("Hello")
        console.log(res)
        // expect(res).toBeDefined()
        done()
    })

})