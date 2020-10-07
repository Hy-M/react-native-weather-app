import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function WeatherInfo({ currentWeather }) {
	console.log(currentWeather, "<");
	const {
		main: { temp }
	} = currentWeather;
	return (
		<View style={styles.weatherInfo}>
			<Text>{temp}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	weatherInfo: {
		alignItems: "center"
	}
});
