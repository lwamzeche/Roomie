import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AgreeScale from '../../components/AgreeScale';
import {TouchableOpacity} from 'react-native';

const LifeSS = ({navigation}) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.title}>Lifestyle survey</Text>
          <Text style={styles.description}>
            Enter your lifestyle habits to get a better match
          </Text>
        </View>

        <View style={styles.statementWrapper}>
          <Text style={styles.statement}>
            I generally go to sleep late at night
          </Text>
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
          <Text style={styles.statement}>
            I spend majority time in my dormitory room
          </Text>
          <AgreeScale />
        </View>
        <View style={styles.statementWrapper}>
          <Text style={styles.statement}>I often bring visitors</Text>
          <AgreeScale />
        </View>
        <View style={styles.statementWrapper}>
          <Text style={styles.statement}>
            I prefer keeping my place clean and neat
          </Text>
          <AgreeScale />
        </View>
        <View style={styles.statementWrapper}>
          <Text style={styles.statement}>
            I prefer eating in dormitory room
          </Text>
          <AgreeScale />
        </View>
        <View style={styles.statementWrapper}>
          <Text style={styles.statement}>
            I engage in activities that usually create significant amount of
            noise.
          </Text>
          <AgreeScale />
        </View>
        <View style={styles.statementWrapper}>
          <Text style={styles.statement}>
            I am comfortable with sharing my personal things with my roommate
          </Text>
          <AgreeScale />
        </View>
        <View style={styles.statementWrapper}>
          <Text style={styles.statement}>
            My religious/cultural practice significantly affect my routine in
            dorm.
          </Text>
          <AgreeScale />
        </View>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => navigation.navigate('SleepHabit')}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingVertical: 20,
  },
  statement: {
    fontSize: 17,
    fontWeight: 'normal',
    textAlign: 'left',
    marginBottom: 10,
    marginLeft: 49,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
    marginTop: 60,
    marginLeft: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 20,
    marginLeft: 20,
  },
  heading: {
    // marginBottom: 30,
    // borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingBottom: 20,
  },
  statementWrapper: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingBottom: 20,
    marginBottom: 20,
    marginLeft: 20,
  },
  saveButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    // alignItems: 'center',
    alignSelf: 'center',
    // justifyContent: 'center',
    marginTop: 20,
    width: '90%',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LifeSS;
