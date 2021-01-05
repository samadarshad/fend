const app = require('../server.js')
const supertest = require('supertest')
const request = supertest(app)

describe('test /all', () => {
    it('get', async done => {
        const response = await request.get('/all')
    
        expect(response.status).toBe(200)
        // expect(response.body.message).toBe('pass!')
        done()
    })

    it('post', async done => {
        const response = await request.post('/all')
    
        expect(response.status).toBe(404)
        done()
    })
})

describe('test /add', () => {
    it('post', async done => {
        const data = {
            title: "post 1",
            content: "abcdef",
        }
        const response = await request.post('/add').send(data)
    
        expect(response.status).toBe(200)
        expect(response.body.success).toBe('ok')
        done()
    })
})