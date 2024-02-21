import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    welcomeSpacer: {
        flex: 1,
    },
    welcomeContainer: {
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        textAlign: 'center',
    },
    welcomeImage: {
        flex: 2,
        resizeMode: 'contain',
    },
    simpleTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationColor: "#000000",
    },
    welcomeStartButton: {
        flex: 0,
        width: '50%',
        textAlign: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height: 70,
        backgroundColor: '#FDB813',
    },

    scrollSpacer: {
        height: 20,
    },
    bigSpacer: {
        height: 50,
    },
    homeMenuRow: {
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-evenly',
        width: '100%'
    },
    homeMenuColumn: {
        flexDirection: 'column',
        height: 80,
        justifyContent: 'space-evenly',
        width: '100%',
        alignItems: 'center',
    },
    homeSafetyDesc: {
        flexDirection: 'column',
        height: 130,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%'
    },
    homeMessage: {
        width: '85%',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 15
    },
    boxFrame: {
        alignItems: 'center'
    },
    boxBox: {
        flexDirection: 'row',
        height: 75,
        justifyContent: 'center',
        width: '90%',
        borderColor: '#FDB813',
        borderWidth: 3,
        alignItems: 'center'
    },
    simpleText: {
        fontSize: 17,
        
    },
    boldText: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    graphContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    graphFormat: {
        resizeMode: 'contain',
        width: '80%',
        height: 250,resizeMode: 'contain',
        width: '80%',
        height: 250,
    },
    graphMenu: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-evenly',
        width: '100%'
    },
    inLineRed: {
        color: '#e37b7b', 
        fontWeight: 'bold',
    },
    inLineYellow: {
        color: '#FDB813', 
        fontWeight: 'bold',
    },
    inLineGreen: {
        color: '#4b8c46', 
        fontWeight: 'bold',
    },

    safetyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textDecorationColor: "#000000",
    },
    safetyText: {
        width: '85%',
        textAlign: 'left',
        justifyContent: 'center',
        fontSize: 15
    },
    safetyTextBox: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%'
    },
    safetyHeader: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#FDB813'
    },
    usgsHeader: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#134391'
    },
    usgsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    homeButtonStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#326ba8'
    }
})

export default styles;