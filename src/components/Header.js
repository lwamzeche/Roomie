import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.heartIcon}>♥</Text>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 80,
    right: 26,
    flexDirection: 'row', // Align children in a row
    alignItems: 'center', // Center items vertically
  },
  heartIcon: {
    fontSize: 25,
    color: '#007AFF', // The blue color for the heart
    // marginRight: 15,
  },
  headerText: {
    fontSize: 20,
    color: '#007AFF', // Black color for the text, change if you need another color
    marginLeft: 5,
  },
});

export default Header;
