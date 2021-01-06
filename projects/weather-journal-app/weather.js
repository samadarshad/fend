require('dotenv').config()

const api_key = process.env.WEATHER_API_KEY;
const base_url = process.env.WEATHER_BASE_URL;
const api_key_prefix = process.env.WEATHER_API_KEY_PREFIX;

const requests = require('./requests.js');

module.exports = {
    getTemperatureCelsius: async function (city_name) {        
        try {
            const weatherData = await getWeather(city_name);             
            return KelvinToCelsius(weatherData.main.temp);
        } catch(error) {
            console.log("error", error);
        }
    }
}

const KelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2);

const getWeather = async (city_name) => {
    const url = `${base_url}${city_name}${api_key_prefix}${api_key}`;
    try {
        const data = await requests.getData(url);        
        return data;
    } catch(error) {
        console.log("error", error);
    }
}