import React from 'react';
import { View, Image, StyleSheet, Platform, Text} from 'react-native';
import styles from '../../styles';

interface WelcomeScreenProps {
    navigation: any;
}

function WelcomeScreen(props: WelcomeScreenProps) {

    const goToHome = () => props.navigation.navigate("Home")

    return (
        <View style={styles.welcomeContainer}>
                <View style={styles.welcomeSpacer}></View>

                <Image style={styles.welcomeImage} source={require("../assets/images/GTCrewLogo.jpeg")}/>
                
                <View style={styles.welcomeSpacer}> 
                    <Text style={styles.simpleTitle}>Chattahoochee River Conditions</Text>
                </View>

                <View style={styles.welcomeStartButton}>
                    <View style={styles.welcomeSpacer}></View>
                    <Text style={styles.simpleTitle} onPress={goToHome}>Start</Text>
                    <View style={styles.welcomeSpacer}></View>
                </View>

                <View style={styles.welcomeSpacer}></View>
        </View>
    );
}

export default WelcomeScreen;