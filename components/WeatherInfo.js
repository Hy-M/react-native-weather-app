import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function WeatherInfo({ currentWeather }) {
	const {
		main: { temp },
		weather: [weatherDetails],
		name
	} = currentWeather;
	const { icon, main, description } = weatherDetails;
	const iconURL = `https://openweathermap.org/img/wn/${icon}@4x.png`;

	return (
		<View style={styles.weatherInfo}>
			<Text>{name}</Text>
			<Image style={styles.weatherIcon} source={{ uri: iconURL }} />
			<Text>{temp}</Text>
			<Text>{main}</Text>
			<Text>{description}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	weatherInfo: {
		alignItems: "center"
	},
	weatherIcon: {
		width: 100,
		height: 100
	}
});
