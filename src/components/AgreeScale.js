/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const AgreeScale = ({onChange}) => {
  const options = [
    {label: 'Completely Agree', size: 40, displayLabel: 'AGREE'},
    {label: 'Strongly Agree', size: 30},
    {label: 'Agree', size: 25},
    {label: 'Neutral', size: 20},
    {label: 'Disagree', size: 25},
    {label: 'Strongly Disagree', size: 30},
    {label: 'Completely Disagree', size: 40, displayLabel: 'DISAGREE'},
  ];

  const [selected, setSelected] = useState(-1);

  const handleSelection = index => {
    // If the currently selected index is clicked again, toggle it off.
    if (selected === index) {
      setSelected(-1);
      if (onChange) {
        onChange(null, -1); // Call onChange with no value, indicating deselection.
      }
    } else {
      setSelected(index);
      if (onChange) {
        onChange(options[index].label, index);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              {
                width: option.size,
                height: option.size,
                borderRadius: option.size / 2,
                borderColor: selected === index ? '#007AFF' : 'black', // Blue if selected, black otherwise
                borderWidth: 1,
              },
              selected === index && styles.selectedOption, // Apply the selected style
            ]}
            onPress={() => handleSelection(index)}
          />
        ))}
      </View>

      <View style={styles.labelContainer}>
        {options.map((option, index) => (
          <View
            key={index}
            style={[
              styles.labelWrapper,
              option.displayLabel === 'DISAGREE' && styles.disagreeLabelWrapper,
            ]}>
            {option.displayLabel && (
              <Text style={styles.displayLabelText}>{option.displayLabel}</Text>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    marginHorizontal: 20,
  },
  labelWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  disagreeLabelWrapper: {
    flex: 1.5,
  },
  option: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 5,
  },
  selectedOption: {
    backgroundColor: '#007AFF', // Use your primary color here
    borderColor: '#007AFF',
  },
  displayLabelText: {
    color: 'black',
  },
});

export default AgreeScale;
