var path = require('path')
const express = require('express')

var bodyParser = require('body-parser')
var cors = require('cors')
const fetch = require('node-fetch');
const routes = require('./routes');

const app = express()
const dotenv = require('dotenv');
dotenv.config();

app.use(express.static('dist'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }))
app.use('/api', routes);
console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

  console.log(`Your API key is ${process.env.TEXT_API_KEY}`);

