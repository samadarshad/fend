const express = require('express');
const router = express.Router();
const mockAPIResponse = require('./mockAPI.js')
const textApi = require('./text_api.js');

function sendErrorToClient(error, res) {
    res.status(error.message).send(error)  
}

router.post('/add', async function(req, res) {
    res.send({success: "ok"})
})

router.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

router.get('/test', function (req, res) {
    // res.send(mockAPIResponse)
    res.send(textApi.getSentimentData("abc"))
})

module.exports = router;