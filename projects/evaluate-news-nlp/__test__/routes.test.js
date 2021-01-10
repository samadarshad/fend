import "regenerator-runtime/runtime";
const createServer = require('../src/server/server')
const messageScheme = require('../src/shared/messageScheme')
const supertest = require('supertest')

const app = createServer();
const request = supertest(app)

describe('test /sentiment', () => {
    const data = new messageScheme().getJson("hello")

    it('post', async done => {        
        const response = await request.post('/api/sentiment').send(data)    
        expect(response.status).toBe(200)
        expect(response.body.sentence_list[0].text).toBe('hello')
        done()
    })

})