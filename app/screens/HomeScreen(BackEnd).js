import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../../styles';
import HomeFrontEnd from './HomeScreen(FrontEnd)';

export default function HomeScreenBackEnd({ navigation }) {

    [date, setDate] = useState("---");
    [time, setTime] = useState("---");
    [tempF, setTempF] = useState("---");
    [tempC, setTempC] = useState("---");
    [flow, setFlow] = useState("---");
    [depth, setDepth] = useState("---");

    const getRefresh = () => {
        axios.get('https://waterservices.usgs.gov/nwis/iv/?site=02335450')
        .then(res => {
            splitter = res.data.split("ns1:")
            subArr = splitter.filter(str => str.includes("value qualifiers=\"P\""));
            setDate((getTimeDate(subArr[0]))[0])
            setTime((getTimeDate(subArr[0]))[1])
            setTempF(celciusToF(cleanUp(subArr[0])))
            setTempC(cleanUp(subArr[0]))
            setFlow(cleanUp(subArr[1]))
            setDepth(depth = cleanUp(subArr[2]))
            console.log([date, time, tempF, tempC, flow, depth])
            
        }).catch(err => {
            console.log(err)
        })
    }

    const goToGraphs = () => navigation.navigate("Graphs")
    const goToSafety = () => navigation.navigate("Safety Guidelines")
    const goToUSGS = () => navigation.navigate("USGS")
    
    return (
        <ScrollView>
            <View style={styles.scrollSpacer}></View>

            <View style={styles.homeMenuRow}>
                <Text style={styles.homeMessage}>
                    <Text style={{fontWeight: 'bold'}}>Hi there!</Text> Welcome to GT Crew's live updates of the 
                    Chattahoochee River Conditions. Please hit the "Refresh Data ↺" button to see the current data 
                    at the USGS Water Services Site: 02335450
                </Text>
            </View>

            <View style={styles.scrollSpacer}></View>

            <View style={styles.homeMenuRow}>
                <Text style={styles.homeButtonStyle} onPress={getRefresh}>Refresh Data ↺</Text>
                <Text style={styles.homeButtonStyle} onPress={goToGraphs}>Forecast Graphs →</Text>
            </View>

            <View>
                <HomeFrontEnd date = {date} time = {time} tempF = {tempF} tempC = {tempC} depth = {depth} flow = {flow} />
            </View>

            <View style={styles.scrollSpacer}></View>
            <View style={styles.scrollSpacer}></View>
            <View style={styles.scrollSpacer}></View>

            <View style={styles.homeSafetyDesc}>
                <Text style={styles.homeMessage}>
                    *If any of the data above is encased in <Text style={styles.inLineRed}>RED</Text>, the current conditions 
                    are <Text style={{fontWeight: 'bold'}}>NOT SAFE TO ROW</Text>. <Text style={styles.inLineYellow}>YELLOW</Text> coloration 
                    recommends rowers proceed with caution and a coaches launch may be required. <Text style={styles.inLineGreen}>GREEN</Text> means all clear! {"\n"}
                </Text>

                <View style={styles.scrollSpacer}></View>

                <Text style={styles.homeMessage}>
                    Please refer to the "Safety Guidelines" page for further information on GT Crew's permittable rowing conditions.
                </Text>
            </View>

            <View style={styles.scrollSpacer}></View>

            <View style={styles.homeMenuColumn}>
                <Text style={styles.homeButtonStyle} onPress={goToSafety}>Safety Guidelines →</Text>
                <Text style={styles.homeButtonStyle} onPress={goToUSGS}>About the USGS Data →</Text>
            </View>

            <View style={styles.scrollSpacer}></View>
            <View style={styles.scrollSpacer}></View>

        </ScrollView>
    );
}

function cleanUp(raw) {
    things = raw.split(">")
    closer = things[1]
    yep = closer.substring(0, closer.length - 2)
    return yep
}

function celciusToF(celStr) {
    celFloat = parseFloat(celStr)
    farFloat = ((celFloat * (9/5)) + 32).toFixed(2)  // Calculating Celcius to Farenheit
    return farFloat
}

function getTimeDate(raw) {
    dateTime = (raw.split("\""))[3].split("T")
    date = dateTime[0]
    time = dateTime[1]
    time = (dateTime[1].split("-"))[0]
    return [date, time]
}