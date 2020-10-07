import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Reload({ load }) {
	return (
		<View style={styles.reloadIcon}>
			<Ionicons name="ios-refresh" size={20} color="white" onPress={load} />
		</View>
	);
}

const styles = StyleSheet.create({
	reloadIcon: {
		position: "absolute",
		top: 95,
		right: 45
	}
});
