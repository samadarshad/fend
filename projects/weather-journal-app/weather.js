require('dotenv').config()

const api_key = process.env.WEATHER_API_KEY;
const base_url = process.env.WEATHER_BASE_URL;
const api_key_prefix = process.env.WEATHER_API_KEY_PREFIX;

const asyncWrapper = require('./asyncWrapper.js');

module.exports = {
    getWeather: async function (city_name) {
        const url = base_url+city_name+api_key_prefix+api_key;
        // await asyncWrapper.getData(url).then( data => {
        //     console.log("weather.js", data);
        //     return data;
        // })   
        
        const data = await asyncWrapper.getData(url);
        try {
            console.log("weather.js", data);
            return data;
        } catch(error) {
            console.log("error", error);
        }
    }
}


