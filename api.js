import { WEATHER_API_KEY } from "@env";
const BASE_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?";

const getCurrentWeather = (lat, lon, unitsSystem) => {
	const weatherURL = `${BASE_WEATHER_URL}lat=${lat}&lon=${lon}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`;

	return fetch(weatherURL)
		.then(response => response.json())
		.catch(err => err);
};

module.exports = {
	getCurrentWeather
};
