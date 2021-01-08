const createServer = require('../server.js')
const supertest = require('supertest')

const app = createServer();
const request = supertest(app)

describe('test /mostrecent', () => {
    it('get', async done => {
        const response = await request.get('/api/mostrecent')
    
        expect(response.status).toBe(200)
        done()
    })

    it('post', async done => {
        const response = await request.post('/api/mostrecent')
    
        expect(response.status).toBe(404)
        done()
    })
})

describe('test /add', () => {
    const data = {
        title: "post 1",
        content: "abcdef",
    }
    it('post', async done => {        
        const response = await request.post('/api/add').send(data)    
        expect(response.status).toBe(200)
        expect(response.body.success).toBe('ok')
        done()
    })

    it('get', async done => {
        const response = await request.get('/api/mostrecent')    
        expect(response.body).toStrictEqual(data)
        done()
    })
})