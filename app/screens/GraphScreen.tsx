import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from '../../styles';

export default function GraphScreen() {

    return (
        <ScrollView >
            <View style={styles.scrollSpacer}></View>

            <View style={styles.graphMenu}>
                <Text style={styles.homeMessage}>
                    It may take a few moments for the graphs to load.
                </Text>
            </View>

            <View style={styles.graphContainer}>
                <Text style={styles.simpleTitle}>Flow Rate (cfs)</Text>
                <View style={styles.scrollSpacer}></View>
                <Image style={styles.graphFormat} 
                source={{uri:'https://waterdata.usgs.gov/nwisweb/graph?agency_cd=USGS&site_no=02335450&parm_cd=00060&period=1'}}
                />
            </View>

            <View style={styles.scrollSpacer}></View>

            <View style={styles.graphContainer}>
                <Text style={styles.simpleTitle}>Depth (ft)</Text>
                <View style={styles.scrollSpacer}></View>
                <Image style={styles.graphFormat} 
                    source={{uri:'https://waterdata.usgs.gov/nwisweb/graph?agency_cd=USGS&site_no=02335450&parm_cd=00065&period=1'}}
                />
            </View>

            <View style={styles.scrollSpacer}></View>

            
            <View style={styles.graphContainer}>
                <Text style={styles.simpleTitle}>Temperature (C° & F°)</Text>
                <View style={styles.scrollSpacer}></View>
                <Image style={styles.graphFormat} 
                    source={{uri:'https://waterdata.usgs.gov/nwisweb/graph?agency_cd=USGS&site_no=02335450&parm_cd=00010&period=1'}}
                />
            </View>

            <View style={styles.scrollSpacer}></View>
            <View style={styles.scrollSpacer}></View>
            <View style={styles.scrollSpacer}></View>

        </ScrollView>
    );

}