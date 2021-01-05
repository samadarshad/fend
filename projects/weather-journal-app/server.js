const projectData = {};

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('website'));


// const port = 3000;
// const server = app.listen(port, listening);

// function listening() {
//     console.log(`server running on port ${port}`);
// }

module.exports = app

app.get('/all', (req, res) => {
    res.send(projectData)
})

const weather = require('./weather.js');

app.get('/weather', (req, res) => {
    weather.getWeather("london").then( data => {
        res.send(data);
    })
})
