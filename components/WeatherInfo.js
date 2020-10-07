import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { colors } from "../utils/index";
const { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } = colors;

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
			<Text style={styles.weatherLocation}>{name}</Text>
			<Text style={styles.textPrimary}>{Math.round(temp)}°</Text>
			<Image style={styles.weatherIcon} source={{ uri: iconURL }} />
			<Text style={styles.textSecondary}>{main}</Text>
			<Text style={styles.textTertiary}>{description}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	weatherInfo: {
		alignItems: "center"
	},
	weatherIcon: {
		width: 200,
		height: 200
	},
	weatherLocation: {
		textTransform: "uppercase",
		fontSize: 20,
		color: TERTIARY_COLOR
	},
	textPrimary: {
		fontSize: 40,
		color: PRIMARY_COLOR,
		marginTop: 40,
		marginBottom: -20
	},
	textSecondary: {
		fontSize: 20,
		color: SECONDARY_COLOR,
		fontWeight: "500",
		marginTop: -30
	},
	textTertiary: {
		textTransform: "capitalize",
		color: TERTIARY_COLOR,
		marginTop: 10
	}
});
