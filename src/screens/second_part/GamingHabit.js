import React, {useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const ChoiceButton = ({label, isSelected, onSelect}) => {
  return (
    <TouchableOpacity
      style={[styles.choiceButton, isSelected && styles.choiceButtonSelected]}
      onPress={onSelect}>
      <Text
        style={[
          styles.choiceButtonText,
          isSelected && styles.choiceButtonTextSelected,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const GamingHabits = ({navigation}) => {
  const [selectedGamingHabit, setSelectedGamingHabit] = useState(null);
  const {width} = useWindowDimensions();
  // eslint-disable-next-line no-shadow
  const GamingHabits = ['Gamer', 'Non Gamer', 'occasional', 'Does not matter'];

  const selectGamingHabit = habit => {
    setSelectedGamingHabit(habit);
  };

  const buttonWidth = width - 32;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Lifestyle preference</Text>
      <Text style={styles.description}>
        Select your preferences in ideal roommate
      </Text>
      <View style={styles.separator} />

      <Text style={styles.subTitle}>Their gaming habits in room</Text>

      <View style={styles.choicesContainer}>
        {GamingHabits.map(habit => (
          <ChoiceButton
            key={habit}
            label={habit}
            isSelected={selectedGamingHabit === habit}
            onSelect={() => selectGamingHabit(habit)}
            style={{width: buttonWidth}}
          />
        ))}
      </View>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('TinDorm')}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  separator: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
    marginVertical: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  choicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  choiceButton: {
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 10,
    // marginHorizontal: 8,
    marginVertical: 10,
    minWidth: '48%', // Ensure the button is at least half the width of the screen
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.1, // Shadow effect
    shadowRadius: 3,
    shadowColor: 'black',
    shadowOffset: {height: 1, width: 0},
  },
  choiceButtonSelected: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF', // Same color for the border
  },
  choiceButtonText: {
    textAlign: 'black',
  },
  choiceButtonTextSelected: {
    color: 'white',
  },
  nextButton: {
    backgroundColor: '#007AFF', // Primary color for the login button
    padding: 15,
    borderRadius: 8,
    // marginBottom: 10, // Ensure space between buttons if needed
    marginTop: 390,
    // Position at the bottom
    position: 'relative',
    bottom: 0, // 50 units up from the bottom
    alignSelf: 'stretch', // Center in the parent view
    marginHorizontal: 16,
    // width: buttonWidth, // Set width to match design
  },
  nextButtonText: {
    // Text inside primary button
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default GamingHabits;
