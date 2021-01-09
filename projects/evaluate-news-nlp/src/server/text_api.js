require('dotenv').config()

const api_key = process.env.TEXT_API_KEY;
const base_url = process.env.TEXT_API_ENDPOINT;

const requests = require('./server-side-requests');

module.exports = {
    getSentimentData: async function (text) { 
        const sentimentData = await getSentiment(text);
        return sentimentData;
    }
}

let fakedata = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}


const getSentiment = async (text) => {
    // const url = `${base_url}key=${api_key}&of=json&txt=Main%20dishes%20were%20quite%20good%2C%20but%20desserts%20were%20too%20sweet%20for%20me.&lang=en`;
    // const data = await requests.getData(url);
    // console.log(data);
    // console.log(data.sentence_list[0].text);
    return fakedata;
}