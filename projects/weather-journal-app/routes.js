const express = require("express");
const router = express.Router();

const weather = require('./weather.js');
const persistence = require('./persistence.js');

router.post('/weather', async function(req, res) {        
        try {
            const location = req.body;
            console.log(location)
            const temperatureCelsius = await weather.getTemperatureCelsius(location);
            res.send({
                temperatureDegreesCelcius: temperatureCelsius
            });
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

router.get('/mostrecent', async function (req, res) {
    try {
        const data = await persistence.getData();
        res.send(data[data.length - 1]) 
    } catch (error) {
        console.log("error", error);
    }
})

module.exports = router;