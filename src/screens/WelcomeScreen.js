import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Find your ideal roommate</Text>
        <Text style={styles.subtitle}>
          Find your perfect roommate using our survey and preferences to connect
          with potential roommates who share similar lifestyle habits and
          preferences
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', //center vertically
    alignItems: 'stretch', //'stretch' to allow children to fill the width
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  textContainer: {
    alignSelf: 'stretch', // ensures the container takes full width
    justifyContent: 'center', // centers text vertically in the remaining space
  },
  title: {
    fontSize: 32, // larger font size
    fontWeight: '800', // extra bold
    textAlign: 'left', // Align text to the left
    marginBottom: 50, // adjust the space between the title and subtitle
    color: '#000',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'left', // Align text to the left
    paddingHorizontal: 0, // Remove horizontal padding for left alignment
    color: '#666',
    marginBottom: 50,
    lineHeight: 27, // Adjust line height for better readability of longer text
  },
  button: {
    width: '100%', // button will fill the horizontal space
    paddingVertical: 20, // taller button
    borderRadius: 10, // adjust for roundness of button corners
    backgroundColor: '#007AFF',
    justifyContent: 'center', // centers text vertically
    alignItems: 'center', // centers text horizontally
    position: 'absolute', // Position the button absolutely...
    bottom: 70, // ...and place it 70 units up from the bottom
    left: 20, // Align the left edge of the button 20 units from the left screen edge
    right: 20, // Align the right edge of the button 20 units from the right screen edge
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20, // larger font size for button text
    fontWeight: '600',
  },
});

export default WelcomeScreen;
