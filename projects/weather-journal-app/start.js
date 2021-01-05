require('dotenv').config()

const hostname = process.env.HOST;
const port = process.env.PORT;

const app = require('./server.js');
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})