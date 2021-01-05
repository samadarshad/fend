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


const requests = require('./requests.js');
app.get('/testpost', async function(req, res) {
    try {
        const data = await requests.postData('https://proud-bush-7085.getsandbox.com/users', {'data':'test2'})
        res.send(data);
    } catch(error) {
        console.log("error", error);
    } 
    
})
