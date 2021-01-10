require('dotenv').config()

const api_key = process.env.TEXT_API_KEY;
const base_url = process.env.TEXT_API_ENDPOINT;

const requests = require('./server-side-requests');
const messageScheme = require('../shared/messageScheme');

module.exports = {
    getSentimentData: async function (text) { 
        const message = messageScheme.getMessage(text);
        const sentimentData = await getSentiment(message);
        // console.log(sentimentData)
        return sentimentData;
    }
}


const fakedata = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

const getSentiment = async (text) => {
    const textUtf8 = Buffer.from(text, 'utf-8');
    console.log("textUtf8", textUtf8)
    const url = `${base_url}key=${api_key}&of=json&txt=${textUtf8}&lang=en`;
    console.log(url)
    // const url = `${base_url}key=${api_key}&of=json&txt=Main%20dishes%20were%20quite%20good%2C%20but%20desserts%20were%20too%20sweet%20for%20me.&lang=en`;
    const data = await requests.getData(url);
    // console.log(data);
    console.log(data.sentence_list[0].text);

    return data;
}