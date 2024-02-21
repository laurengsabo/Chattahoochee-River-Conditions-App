import React from 'react';
import { View, Text, ScrollView, Image} from 'react-native';
import styles from '../../styles';

export default function SafetyScreen() {
    return (
        <ScrollView>

            <View style={styles.safetyHeader}>
                <View style={styles.scrollSpacer}></View>

                <Text style={styles.simpleTitle}>
                    GT CREW SAFETY GUIDELINES</Text>

                <Text style={styles.simpleText}>
                    Updated: February 5, 2024</Text>

                <View style={styles.scrollSpacer}></View>
            </View>

            <View style={styles.scrollSpacer}></View>

            <View style={styles.safetyTextBox}>
                <Text style={styles.safetyText}>
                    <Text style={styles.safetyTitle}>TEMPERATURE: </Text>{"\n"}{"\n"}

                    <Text style={{fontStyle: 'italic'}}>
                    When air temperature is less than <Text style={{fontWeight: 'bold'}}>40F°</Text>, water temperature is less than <Text style={{fontWeight: 'bold'}}>50F°</Text>, 
                    and/or the combined temperature is less than <Text style={{fontWeight: 'bold'}}>90F°</Text>... {"\n"}{"\n"}
                    </Text>

                    - Only <Text style={{fontWeight: 'bold'}}>experienced rowers</Text> are allowed on the water.{"\n"}
                    - Launches are required and must stay within <Text style={{fontWeight: 'bold'}}>2 boat lengths</Text> of all shells they are representing.{"\n"}
                    - Everyone in the launch must have a life vest on <Text style={{fontWeight: 'bold'}}>regardless of swimming ability.</Text>

                    {"\n"}{"\n"}{"\n"}

                    <Text style={{fontStyle: 'italic'}}>
                    When air temperature is less than <Text style={{fontWeight: 'bold'}}>35F°</Text>, water temperature is less than <Text style={{fontWeight: 'bold'}}>45F°</Text>, 
                    and/or the combined temperature is less than <Text style={{fontWeight: 'bold'}}>80F°</Text>... {"\n"}{"\n"}
                    </Text>

                    <Text style={{fontWeight: 'bold'}}>NO SHELLS ARE ALLOWED ON THE WATER</Text>{"\n"}
                    
                </Text>
            </View>

            <View style={styles.scrollSpacer}></View>

            <View style={styles.safetyTextBox}>
                <Text style={styles.safetyText}>
                    <Text style={styles.safetyTitle}>FLOW RATE: </Text>{"\n"}{"\n"}

                    <Text style={{fontWeight: 'bold'}}>Flow ≥ 8,000CFS:</Text> NO SHELLS can go out {"\n"}
                    <Text style={{fontWeight: 'bold'}}>Flow ≥ 6,000CFS:</Text> Coaching Launch is required {"\n"}
                    <Text style={{fontWeight: 'bold'}}>Flow ≥ 4,000CFS:</Text> Less experienced rowers REQUIRE Coaching Launch{"\n"}

                </Text>
            </View>

            <View style={styles.scrollSpacer}></View>

            <View style={styles.safetyTextBox}>
                <Text style={styles.safetyText}>
                    <Text style={styles.safetyTitle}>FOG CONDITIONS: </Text>{"\n"}{"\n"}

                    Only go out if you can see the opposite of the river from the top of the dock.{"\n"}
                    If the other side of the river is visible, but it is a low light environment, it is 
                    required to put a white stern light and bow light that separates the starboard and port.{"\n"}

                </Text>
            </View>

            <View style={styles.scrollSpacer}></View>

            <View style={styles.safetyTextBox}>
                <Text style={styles.safetyText}>
                    <Text style={styles.safetyTitle}>WIND CONDITIONS: </Text>{"\n"}{"\n"}

                    - All boat classes are allowed on the water up to 15 mph sustained winds, and gusts of 20 mph.{"\n"}
                    - Between 15 and 20 mph sustained or gusts up to 25 mph, 4 oar rule applies (4-, 4+, 8+) and a safety launch is required.{"\n"}
                    - Above 20 mph sustained or gusts over 25 mph....<Text style={{fontWeight: 'bold'}}>no shells are allowed on the water.</Text>{"\n"}

                </Text>
            </View>

            <View style={styles.scrollSpacer}></View>

            <View style={styles.safetyTextBox}>
                <Text style={styles.safetyText}>
                    <Text style={styles.safetyTitle}>THUNDER: </Text>{"\n"}{"\n"}

                    <Text style={{fontWeight: 'bold'}}>Do not launch</Text> if you hear thunder or have heard 
                    thunder in the last <Text style={{fontWeight: 'bold'}}>HOUR.</Text>{"\n"}
                    If you hear thunder while on the water, get off the water immediately and seek shelter.

                </Text>
            </View>

            <View style={styles.scrollSpacer}></View>
            <View style={styles.scrollSpacer}></View>
            <View style={styles.scrollSpacer}></View>
        </ScrollView>
    )
}