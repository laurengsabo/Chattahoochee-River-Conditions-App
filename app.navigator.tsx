import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import HomeScreen from "./app/screens/HomeScreen(BackEnd)";
import GraphScreen from "./app/screens/GraphScreen";
import SafetyScreen from "./app/screens/SafetyScreen";
import USGSScreen from "./app/screens/USGSScreen";

const { Navigator, Screen} = createNativeStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Navigator initialRouteName="Welcome">
            <Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}></Screen>
            <Screen name="Home" component={HomeScreen}></Screen>
            <Screen name="Graphs" component={GraphScreen}></Screen>
            <Screen name="Safety Guidelines" component={SafetyScreen}></Screen>
            <Screen name="USGS" component={USGSScreen}></Screen>
        </Navigator>
    </NavigationContainer>
)

export default AppNavigator;

//screenOptions={{headerShown: false}} 
// put ^ after "WelcomeScreen" on line 11