import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { colors } from "../utils/index";
const { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, BORDER_COLOR } = colors;
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

export default function WeatherDetails({ currentWeather }) {
	const {
		main: { feels_like, humidity, pressure }
	} = currentWeather;

	return (
		<View style={styles.weatherDetails}>
			<View style={styles.weatherDetailsRow}>
				<View
					style={{
						...styles.weatherDetailsBox,
						borderRightWidth: 1,
						borderRightColor: "white"
					}}
				>
					<View style={styles.weatherDetailsRow}>
						<FontAwesome5
							name="temperature-low"
							size={20}
							color={TERTIARY_COLOR}
						/>

						<Text style={{ color: SECONDARY_COLOR }}>
							Feels like: {feels_like}
						</Text>
					</View>
				</View>
				<View style={styles.weatherDetailsBox}>
					<View style={styles.weatherDetailsRow}>
						<MaterialCommunityIcons
							name="water"
							size={27}
							color={TERTIARY_COLOR}
						/>
						<Text style={{ color: SECONDARY_COLOR }}>
							Humidity: {humidity}%
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	weatherDetails: {
		margin: 15,
		borderWidth: 1,
		borderColor: BORDER_COLOR,
		borderRadius: 10
	},
	weatherDetailsRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	weatherDetailsBox: {
		flex: 1,
		padding: 20
	}
});
