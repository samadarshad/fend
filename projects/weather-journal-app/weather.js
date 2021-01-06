require('dotenv').config()

const api_key = process.env.WEATHER_API_KEY;
const base_url = process.env.WEATHER_BASE_URL;
const api_key_prefix = process.env.WEATHER_API_KEY_PREFIX;
const temperature_units = process.env.WEATHER_API_TEMPERATURE_UNITS;

const requests = require('./server-side-requests');
const errors = require('./errors.js');

module.exports = {
    getTemperatureCelsius: async function (location) {        
        try {
            const zip = location.zip
            const weatherData = await getWeather(zip);
            
            if (weatherData.cod != '200') {
                const error = new errors.HttpError(weatherData.cod, weatherData.message);
                return Promise.reject(error)
            } 
            return weatherData.main.temp;
        } catch(error) {
            console.log("weather error", error);
        }
    }
}

const getWeather = async (zip) => {
    const url = `${base_url}${zip}${temperature_units}${api_key_prefix}${api_key}`;
    try {
        const data = await requests.getData(url);        
        return data;
    } catch(error) {
        console.log("weather error", error);
    }
}