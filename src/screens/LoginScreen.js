import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Roomie" />
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>Login into your account</Text>

      <Text style={styles.inputTitle}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.inputTitle}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="*********"
        secureTextEntry
        autoCapitalize="none"
      />

      <TouchableOpacity
        onPress={() => {
          /* forgot password */
        }}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('UserType')}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.universityButton}
        onPress={() => navigation.navigate('UserType')}>
        <Text style={styles.universityButtonText}>University login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left', // Align text to the left
  },
  subtitle: {
    fontSize: 18,
    color: 'gray', // Adjusted to match the prototype's subtitle color
    marginBottom: 60,
    textAlign: 'left', // Align text to the left
  },
  inputTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000', // Black color for the title
    marginBottom: 8, // Spacing between title and text input
  },
  input: {
    borderWidth: 1,
    borderColor: '#D3D3D3', // Lighter border color
    padding: 15,
    marginBottom: 25,
    borderRadius: 8, // Slightly more rounded corners
    fontSize: 16,
  },
  forgotPasswordText: {
    textAlign: 'right',
    color: '#007AFF', // blue color
    marginBottom: 20,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#007AFF', // Primary color for the login button
    padding: 15,
    borderRadius: 8,
    marginBottom: 10, // Ensure space between buttons if needed
    // Position at the bottom
    position: 'absolute',
    bottom: 50, // 50 units up from the bottom
    alignSelf: 'center', // Center in the parent view
    width: '90%', // Set width to match design
  },
  loginButtonText: {
    // Text inside primary button
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  universityButton: {
    borderColor: '#007AFF',
    borderWidth: 1,
    padding: 15,
    borderRadius: 8,
    backgroundColor: 'white', // White background for university login

    position: 'absolute',
    bottom: 120, // Positioned above the login button
    alignSelf: 'center', // Center in the parent view
    width: '90%', // Set width to match design
  },
  universityButtonText: {
    color: '#007AFF',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default LoginScreen;
