import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Settings from "./components/Settings";
import { createStackNavigator } from "@react-navigation/stack";
import { startClock } from "react-native-reanimated";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const HomeStackScreen = () => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Local weather" component={Home} />
		</HomeStack.Navigator>
	);
};

const SettingsStackScreen = () => {
	return (
		<SettingsStack.Navigator>
			<SettingsStack.Screen name="Settings" component={Settings} />
		</SettingsStack.Navigator>
	);
};

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Local weather" component={HomeStackScreen} />
				<Tab.Screen name="Settings" component={SettingsStackScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
