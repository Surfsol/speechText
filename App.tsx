import React from 'react'
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Home from "./components/Home";
import Notes from "./components/Notes";
import About from "./components/About";
const Tab = createBottomTabNavigator();
const queryClient = new QueryClient()
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let iconName = "record";
            if (route.name === "Record") {
              iconName = "record-vinyl";
            } else if (route.name === "History") {
              iconName = "history";
            }
            console.log({route}); // Check if "History" is logged
            return <FontAwesome5 name={iconName} size={24} color="black" />;
          },
        })}
      >
        <Tab.Screen name="Record" component={Home} />
        <Tab.Screen name="History" component={Notes} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
    </QueryClientProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
