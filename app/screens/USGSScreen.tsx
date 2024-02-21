import React from 'react';
import { View, Text, ScrollView, Image} from 'react-native';
import styles from '../../styles';

export default function USGSScreen() {
    return (
        <ScrollView>

            <View style={styles.usgsHeader}>
                <View style={styles.scrollSpacer}></View>

                <Text style={styles.usgsTitle}>
                    About the USGS Data</Text>

                <View style={styles.scrollSpacer}></View>
            </View>

            <View style={styles.scrollSpacer}></View>

            <View style={styles.safetyTextBox}>
                <Text style={styles.safetyText}>
                    <Text style={{fontWeight: 'bold'}}>All data has been provided by the USGS: Deparment of Water Data at Site No. 02335450</Text> {"\n"}{"\n"}

                    For further information, copy and paste the link below into your browser.{"\n"}{"\n"}

                    https://waterdata.usgs.gov/monitoring-location/02335450/#parameterCode=00065&period=P7D&showMedian=false
                    
                </Text>
            </View>

            <View style={styles.scrollSpacer}></View>
            <View style={styles.scrollSpacer}></View>
            <View style={styles.scrollSpacer}></View>
        </ScrollView>
    )
}