const express = require("express");
const router = express.Router();

const weather = require('./weather.js');
const requests = require('./server-side-requests');
const persistence = require('./persistence.js');

router.get('/weather', async function(req, res) {        
        try {
            const temperatureCelsius = await weather.getTemperatureCelsius("london");
            res.send({
                temperature: temperatureCelsius
            });
        } catch(error) {
            console.log("error", error);
        } 
})

router.get('/testpost', async function(req, res) {
    try {
        const data = await requests.postData('https://proud-bush-7085.getsandbox.com/users', {'data':'test2'})
        res.send(data);
    } catch(error) {
        console.log("error", error);
    } 
    
})

router.post('/add', async function(req, res) {
    try {
        const data = req.body;
        await persistence.storeData(data);
        res.send({success: "ok"}) 
    } catch(error) {
        console.log("error", error);
    } 
})

router.get('/all', async function (req, res) {
    try {
        const data = await persistence.getData();
        res.send(data) 
    } catch (error) {
        console.log("error", error);
    }
})

module.exports = router;