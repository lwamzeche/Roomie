import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const AgreeScale = ({ onChange }) => {
  const options = [
    { label: 'Completely Agree', size: 40, displayLabel: 'AGREE' },
    { label: 'Strongly Agree', size: 30 },
    { label: 'Agree', size: 25 },
    { label: 'Neutral', size: 20 },
    { label: 'Disagree', size: 25 },
    { label: 'Strongly Disagree', size: 30 },
    { label: 'Completely Disagree', size: 40, displayLabel: 'DISAGREE' }
  ];

  const [selected, setSelected] = useState(-1);

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              { width: option.size, height: option.size, borderRadius: option.size / 2 },
              selected === index && styles.selectedOption
            ]}
            onPress={() => {
              setSelected(index);
              console.log(option.label);  // terminal output for future database use
              onChange(option.label, index);
            }}
          ></TouchableOpacity>
        ))}
      </View>
      <View style={styles.labelContainer}>
        {options.map((option, index) => (
          <View key={index} style={[styles.labelWrapper, (option.displayLabel === 'DISAGREE' && styles.disagreeLabelWrapper)]}>
            {option.displayLabel && <Text style={styles.displayLabelText}>{option.displayLabel}</Text>}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5
  },
  labelWrapper: {
    flex: 1,
    alignItems: 'center'
  },
  disagreeLabelWrapper: {
    flex: 1.5  
  },
  option: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 5
  },
  selectedOption: {
    backgroundColor: '#ccc',
  },
  displayLabelText: {
    color: 'black'
  }
});

export default AgreeScale;
