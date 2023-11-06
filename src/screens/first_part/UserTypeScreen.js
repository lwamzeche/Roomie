import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const UserTypeScreen = ({navigation}) => {
  const [selectedType, setSelectedType] = useState(null);

  const handleSelectType = type => {
    setSelectedType(type);
  };

  const isSelected = type => {
    return selectedType === type;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who are you?</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.option,
            isSelected('International') && styles.selectedOption,
          ]}
          onPress={() => handleSelectType('International')}>
          <View
            style={[
              styles.circle,
              isSelected('International') && styles.selectedCircle,
            ]}
          />
          <Text style={styles.optionText}>International</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.option,
            isSelected('Domestic') && styles.selectedOption,
          ]}
          onPress={() => handleSelectType('Domestic')}>
          <View
            style={[
              styles.circle,
              isSelected('Domestic') && styles.selectedCircle,
            ]}
          />
          <Text style={styles.optionText}>Domestic</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.nextButton, selectedType ? styles.activeNextButton : {}]}
        onPress={() => selectedType && navigation.navigate('Gender')}
        disabled={!selectedType}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: 'left', // Align text to the left
    marginTop: 250, // Adjust the top space
    marginBottom: 8, // Adjust the top space
    width: '100%', // Ensure the text align property works as expected
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '20%',
    marginBottom: 200,
  
  },
  option: {
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
  },
  selectedOption: {
    borderColor: '#007AFF',
  },
  circle: {
    height: 34,
    width: 34,
    borderRadius: 67,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 10,
  },
  selectedCircle: {
    backgroundColor: '#007AFF',
  },
  optionText: {
    fontSize: 18,
  },
  nextButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#007AFF',
    width: '100%',
    alignItems: 'center',
    marginBottom: 58,
  },
  activeNextButton: {
    backgroundColor: '#007AFF',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
  },
});

export default UserTypeScreen;
