import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Location from "expo-location";
import * as api from "./api";
import WeatherInfo from "./components/WeatherInfo";
import UnitsPicker from "./components/UnitsPicker";
import Reload from "./components/Reload";

export default function App() {
	const [errorMessage, setErrorMessage] = useState(null);
	const [currentWeather, setCurrentWeather] = useState(null);
	const [unitsSystem, setUnitsSystem] = useState("metric");

	useEffect(() => {
		load();
	}, [unitsSystem]);

	async function load() {
		setCurrentWeather(null);
		setErrorMessage(null);
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
				longitude,
				unitsSystem
			);

			if (currentWeatherResult) {
				setCurrentWeather(currentWeatherResult);
			} else setErrorMessage(currentWeatherResult.message);
		} catch (error) {
			setErrorMessage(error.message);
		}
	}

	if (currentWeather) {
		return (
			<View style={styles.container}>
				<StatusBar style="auto" />
				<View style={styles.main}>
					<UnitsPicker
						unitsSystem={unitsSystem}
						setUnitsSystem={setUnitsSystem}
					/>
					<Reload load={load} />
					<WeatherInfo currentWeather={currentWeather} />
				</View>
			</View>
		);
	} else if (errorMessage) {
		return (
			<View style={styles.container}>
				<Text>oop: {errorMessage}</Text>
				<StatusBar style="auto" />
			</View>
		);
	} else {
		return (
			<View style={styles.loaderContainer}>
				<Image
					style={styles.loaderImage}
					source={{
						uri: "https://media.giphy.com/media/QRhtqYeEywJI4/source.gif"
					}}
				/>
				<StatusBar style="auto" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#02a8e0",
		justifyContent: "center"
	},
	main: {
		justifyContent: "center",
		flex: 1
	},
	loaderContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	loaderImage: {
		height: 150,
		width: 150
	}
});
