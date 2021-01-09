var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
const fetch = require('node-fetch');

const app = express()
const dotenv = require('dotenv');
dotenv.config();

app.use(express.static('dist'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

  console.log(`Your API key is ${process.env.TEXT_API_KEY}`);

//   fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.TEXT_API_KEY}&of=json&txt=Main%20dishes%20were%20quite%20good%2C%20but%20desserts%20were%20too%20sweet%20for%20me.&lang=en`)
//   .then(res => res.json())
//   .then(function(res) {
//     console.log(res)
//     //   document.getElementById('results').innerHTML = res.message
//   })

  console.log("hello")


  var https = require('follow-redirects').https;
  var fs = require('fs');

  var options = {
    'method': 'POST',
    'hostname': 'api.meaningcloud.com',
    'path': `/sentiment-2.1?key=${process.env.TEXT_API_KEY}&lang=en&txt=Main%20dishes%20were%20quite%20good%2C%20but%20desserts%20were%20too%20sweet%20for%20me.`,
    'headers': {
    },
    'maxRedirects': 20
  };

  var req = https.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function (chunk) {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
    });

    res.on("error", function (error) {
      console.error(error);
    });
  });

  req.end();