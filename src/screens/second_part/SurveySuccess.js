import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

const SurveySuccess = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Placeholder for an image or logo */}
      <View style={styles.imagePlaceholder} />

      <Text style={styles.title}>Survey Success</Text>
      <Text style={styles.description}>
        Your information is successfully saved,{'\n'}
        now you can proceed to find your most{'\n'}
        compatible roommate
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SurveySuccess')} // Update with actual navigation call
      >
        <Text style={styles.buttonText}>Find a roommate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white', // or your preferred background color
  },
  imagePlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'lightgrey', // Placeholder color
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    width: width - 40, // some padding from the sides
    backgroundColor: '#007AFF', // your primary button color
    padding: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default SurveySuccess;
