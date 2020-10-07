import { WEATHER_API_KEY } from "@env";
const BASE_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?";

const getCurrentWeather = (lat, lon) => {
	const weatherURL = `${BASE_WEATHER_URL}lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`;

	return fetch(weatherURL)
		.then(response => response.json())
		.catch(err => console.log(err, "err in getCurrentWeather"));
};

module.exports = {
	getCurrentWeather
};
