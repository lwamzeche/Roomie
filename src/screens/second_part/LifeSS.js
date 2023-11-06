import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const LifeSS = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Life Style Survey</Text>
        <Text style={styles.subtitle}>Answer the following questions</Text>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 20,
    },
});
export default LifeSS;
