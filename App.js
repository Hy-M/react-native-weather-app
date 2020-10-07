import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import * as api from "./api";

export default function App() {
	const [errorMessage, setErrorMessage] = useState(null);
	const [currentWeather, setCurrentWeather] = useState(null);

	useEffect(() => {
		load();
	}, []);

	async function load() {
		try {
			let { status } = await Location.requestPermissionsAsync();

			if (status !== "granted") {
				setErrorMessage("Location access is needed to run this app.");
				return;
			}

			const location = await Location.getCurrentPositionAsync();
			const { latitude, longitude } = location.coords;

			const currentWeatherResult = await api.getCurrentWeather(
				latitude,
				longitude
			);

			console.log(currentWeatherResult, "<<< currentWeatherResult!");

			if (currentWeatherResult) {
				setCurrentWeather(currentWeatherResult);
			} else setErrorMessage(currentWeatherResult.message);
		} catch (error) {}
	}

	if (currentWeather) {
		const {
			main: { temp }
		} = currentWeather;
		return (
			<View style={styles.container}>
				<Text>Your current temp is: {temp}</Text>
				<StatusBar style="auto" />
			</View>
		);
	} else {
		return (
			<View style={styles.container}>
				<Text>{errorMessage}</Text>
				<StatusBar style="auto" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
