import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const IntroToSurvey = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.blueSection}>
            </View>

            <View style={styles.whiteSection}>
            <Text style={styles.title}>Take our survey</Text>

            <View style={styles.listItem}>
                    <View style={styles.listBullet}><Text style={styles.listBulletText}>1</Text></View>
                    <View>
                        <Text style={styles.listHeading}>10 questions</Text>
                        <Text style={styles.listDescription}>Learn about your lifestyle and preferences in roomates</Text>
                    </View>
                    
                </View>
            <View style={styles.listItem}>
                <View style={styles.listBullet}><Text style={styles.listBulletText}>2</Text></View>
                <View>
                    <Text style={styles.listHeading}>Find your match</Text>
                    <Text style={styles.listDescription}>Our system will match you with the most compatible roomate</Text>
                </View>
            </View>

            <TouchableOpacity 
                style={styles.button}
                onPress={() => {navigation.navigate('LifeSS')}}
            >
                <Text style={styles.buttonSkipText}>Skip survey</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, styles.startButton]}
                onPress={() => {navigation.navigate('LifeSS')}}
            >
                <Text style={styles.buttonText}>Start survey</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    blueSection: {
        flex: 1,
        backgroundColor: '#EDF0F7',
        justifyContent: 'center',
        alignItems: 'center',
    },
    whiteSection: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 50,
    },
    title: {
        fontSize: 30,
        marginBottom: 15, 
        fontWeight: 'bold',
        marginRight: 150,
    },
    button: {
        width: '80%',
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        borderColor: '#007AFF',
        borderWidth: 1,
    },
    startButton: {
        backgroundColor: '#007AFF',  
        borderColor: 'white',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    buttonSkipText: {
        color: '#007AFF',
        fontSize: 16,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50,
    },
    listBullet: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    listBulletText: {
        color: 'white',
        fontSize: 14,
    },
    listText: {
        fontSize: 16,
        color: '#8C91A3',
        flex: 1,
    },
    listHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default IntroToSurvey;
