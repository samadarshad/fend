const express = require("express");
const router = express.Router();

const weather = require('./weather.js');
const persistence = require('./persistence.js');
const errors = require('./errors.js');

function sendErrorToClient(error, res) {
    if (error instanceof errors.HttpError) {                
        res.status(error.status_code).json({ error: error.message  });        
    } else {
        res.status(500).send(error)
    }    
}

router.post('/weather', async function(req, res) {        
        try {
            const location = req.body;
            const temperatureCelsius = await weather.getTemperatureCelsius(location);
            res.send({
                temperatureDegreesCelcius: temperatureCelsius
            });
        } catch(error) {            
            console.log("routes error", error);
            sendErrorToClient(error, res);
        } 
})

router.post('/add', async function(req, res) {
    try {
        const data = req.body;
        await persistence.storeData(data);
        res.send({success: "ok"}) 
    } catch(error) {
        console.log("routes error", error);
        sendErrorToClient(error, res);
    } 
})

router.get('/all', async function (req, res) {
    try {
        const data = await persistence.getData();
        res.send(data) 
    } catch (error) {
        console.log("routes error", error);
        sendErrorToClient(error, res);
    }
})

router.get('/mostrecent', async function (req, res) {
    try {
        const data = await persistence.getData();
        res.send(data[data.length - 1]) 
    } catch (error) {
        console.log("routes error", error);
        sendErrorToClient(error, res);
    }
})

module.exports = router;