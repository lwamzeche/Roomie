import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const SchoolDormitory = ({navigation}) => {
  const [selectedDorm, setSelectedDorm] = useState(null);
  const genderData = [
    {label: 'Sarang Hall', value: 'Sarang Hall'},
    {label: 'Somang Hall', value: 'Somang Hall'},
    {label: 'Silloe Hall', value: 'Silloe Hall'},
    {label: 'Jihye Hall', value: 'Jihye Hall'},
    {label: 'Heemang Hall', value: 'Heemang Hall'},
    {label: 'Sejong Hall', value: 'Sejong Hall'},
    {label: 'Mir Hall', value: 'Mir Hall'},
    {label: 'Jilli Hall', value: 'Jilli Hall'},
    {label: 'Munji Hall', value: 'Munji Hall'},
    {label: 'Hwaam Hall', value: 'Hwaam Hall'},
    {label: 'Seongsil Hall', value: 'Seongsil Hall'},
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello,</Text>
      <Text style={styles.title}>Select your dormitory</Text>
      <Dropdown
        data={genderData}
        labelField="label"
        valueField="value"
        placeholder="Select program"
        value={selectedDorm}
        onChange={item => {
          setSelectedDorm(item.value);
        }}
        style={styles.dropdown}
      />
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('MBTI')}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'left',
    marginTop: 130,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  dropdown: {
    marginVertical: 10,
    height: 50,
    borderWidth: 1, // This will create a border around the dropdown
    borderColor: 'gray', // Color of the border
    borderRadius: 4, // Rounded corners for the border
    paddingHorizontal: 10, // Horizontal padding within the dropdown
    backgroundColor: '#FFF', // White background for the dropdown
    justifyContent: 'center', // Vertically center the dropdown content
  },
  nextButton: {
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
  nextButtonText: {
    // Text inside primary button
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default SchoolDormitory;
