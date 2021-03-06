require('dotenv').config()

const api_key = process.env.WEATHER_API_KEY;
const base_url = process.env.WEATHER_BASE_URL;
const api_key_prefix = process.env.WEATHER_API_KEY_PREFIX;
const temperature_units = process.env.WEATHER_API_TEMPERATURE_UNITS;

const requests = require('./server-side-requests');

module.exports = {
    getTemperatureCelsius: async function (location) {  
        const zip = location.zip
        const weatherData = await getWeather(zip);
        return weatherData.main.temp;
    }
}

const getWeather = async (zip) => {
    const url = `${base_url}${zip}${temperature_units}${api_key_prefix}${api_key}`;
    const data = await requests.getData(url);        
    return data;
}