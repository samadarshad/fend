const projectData = {};

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('website'));

module.exports = app

app.get('/all', (req, res) => {
    res.send(projectData)
})

const weather = require('./weather.js');

app.get('/weather', async function(req, res) {        
        try {
            const data = await weather.getWeather("london");
            res.send(data);
        } catch(error) {
            console.log("error", error);
        }    
})
