import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import AgreeScale from '../../components/AgreeScale';
import { TouchableOpacity } from 'react-native';

const LifeSS = ({navigation}) => {
    return (
        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.title}>Lifestyle survey</Text>
                <Text style={styles.description}>Enter your lifestyle habits to get a better match</Text>
            </View>

            <View style={styles.statementWrapper}>
                <Text style={styles.statement}>I generally go to sleep late at night</Text>
                <AgreeScale />
            </View>

            <View style={styles.statementWrapper}>
                <Text style={styles.statement}>I am a habitual smoker</Text>
                <AgreeScale />
            </View>

            <View style={styles.statementWrapper}>
                <Text style={styles.statement}>I play noise games in my room</Text>
                <AgreeScale />
            </View>

            <View style={styles.statementWrapper}>
                <Text style={styles.statement}>I spend majority time in my dormitory room</Text>
                <AgreeScale />
            </View>

            <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate('SurveySuccess')}>  
                    <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>

        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    statement: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        marginRight: 130,
        marginTop: 100,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    heading: {
        marginBottom: 30,
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        paddingBottom: 20,
    },
    statementWrapper: {
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        paddingBottom: 20,
        marginBottom: 20,
    },
    saveButton: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    saveButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
})

export default LifeSS;
