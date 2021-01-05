const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require("./routes");

function createServer() {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors());
    app.use(express.static('website'));
    app.use("/api", routes);
    return app
}

module.exports = createServer