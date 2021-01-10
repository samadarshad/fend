const express = require('express');
const router = express.Router();
const mockAPIResponse = require('./mockAPI.js')
const textApi = require('./text_api.js');

function sendErrorToClient(error, res) {
    res.status(error.message).send(error)  
}

router.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

router.get('/test', async function (req, res) {
    const data = await textApi.getSentimentData("abc");
    res.send(data)
})

module.exports = router;