require('jest-fetch-mock').enableMocks()
// import "regenerator-runtime/runtime";
// import { sendForm } from "../src/client/js/formHandler"
// import { Client, sendForm } from "../dist/ClientLib.js"
global.Client = require('../dist/ClientLib')
// const fetch = require('node-fetch')


describe('formHandler', () => {

    // jest.mock('node-fetch')
    
    it('sendForm is defined', async done => {
        fetch.mockResponse(JSON.stringify({ data: '12345' }))
        // fetchMock.mockResponse({message: "mzck response"})
        Client.setFetch(global.fetch)
        const res = await Client.sendForm("Hello") // this hits fetch at /api/sentiment, and that needs to be mocked/proxied
        console.log(res)
        // expect(res).toBeDefined()
        done()
    })

})