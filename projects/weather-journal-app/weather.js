require('dotenv').config()

const api_key = process.env.WEATHER_API_KEY;
const base_url = process.env.WEATHER_BASE_URL;
const api_key_prefix = process.env.WEATHER_API_KEY_PREFIX;

module.exports = {
    getWeather: function (city_name) {
        return base_url+city_name+api_key_prefix+api_key;
    }
}
