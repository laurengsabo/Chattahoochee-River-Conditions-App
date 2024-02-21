import React from "react";
import { View, Text, ScrollView } from 'react-native';
import styles from "../../styles";

export default function HomeScreenFrontEnd({date, time, tempF, tempC, depth, flow}) {
    const tempColorKey = {backgroundColor: tempColor({tempF}), height: 20}
    const depthColorKey = {backgroundColor: depthColor({depth}), height: 20}
    const flowColorKey = {backgroundColor: flowColor({flow}), height: 20}

    return (
        <ScrollView>
            <View style={styles.boxFrame}>
                <View style={styles.boxBox}>
                    <Text style={styles.simpleText}>Last Updated: </Text>
                    <Text style={styles.boldText}>{date}</Text>
                    <Text style={styles.simpleText}> at </Text>
                    <Text style={styles.boldText}>{time}</Text>
                </View>
            </View>

            <View style={styles.scrollSpacer}></View>

            <View style={styles.boxFrame}>
                <View style={styles.boxBox}>
                    <View><Text style={styles.simpleText}>Temperature (Farenheit): </Text></View>
                    <View style={tempColorKey}><Text style={styles.boldText}> {tempF} F° </Text></View>
                </View>
            </View>

            <View style={styles.scrollSpacer}></View>

            <View style={styles.boxFrame}>
                <View style={styles.boxBox}>
                    <View><Text style={styles.simpleText}>Temperature (Celcius): </Text></View>
                    <View style={tempColorKey}><Text style={styles.boldText}> {tempC} C° </Text></View>
                </View>
            </View>

            <View style={styles.scrollSpacer}></View>

            <View style={styles.boxFrame}>
                <View style={styles.boxBox}>
                    <View><Text style={styles.simpleText}>Depth: </Text></View>
                    <View style={depthColorKey}><Text style={styles.boldText}> {depth} ft </Text></View>
                </View>
            </View>

            <View style={styles.scrollSpacer}></View>

            <View style={styles.boxFrame}>
                <View style={styles.boxBox}>
                    <View><Text style={styles.simpleText}>Flow Rate: </Text></View>
                    <View style={flowColorKey}><Text style={styles.boldText}> {flow} cfs </Text></View>
                </View>
            </View>
        </ScrollView>
    )
}

function tempColor({tempF}) {
    if (tempF < 50.0 && tempF > 45.0) {
        return '#FDB813'    // yellow highlight
    } if (tempF < 45.0) {
        return '#e37b7b'    // red highlight
    }
    return '#97e391'        // green highlight
}

function depthColor({depth}) {
    if (depth < 4 && depth > 3) {
        return '#FDB813'    // yellow highlight
    } if (depth <= 3) {
        return '#e37b7b'    // red highlight
    }
    return '#97e391'        // green highlight
}

function flowColor({flow}) {
    if (flow >= 4000 && flow < 8000) {
        return '#FDB813'    // yellow highlight
    } if (flow >= 8000) {
        return '#e37b7b'    // red highlight
    }
    return '#97e391'        // green highlight
}