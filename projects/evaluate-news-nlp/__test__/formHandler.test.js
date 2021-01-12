// import "regenerator-runtime/runtime";
// import { sendForm } from "../src/client/js/formHandler"
// import { Client, sendForm } from "../dist/ClientLib.js"
global.Client = require('../dist/ClientLib')

describe('formHandler', () => {
    
    it('sendForm is defined', async done => {
        console.log(Client.testabc())
        // expect(Client.sendForm).toBeDefined();
        // const res = await Client.sendForm("Hello")

        // expect(res).toBeDefined()
        done()
    })

})