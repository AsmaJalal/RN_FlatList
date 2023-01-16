import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Asma';

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
      <Text style={styles.status}>Exercise number one using two different text elements with different font size (45, 20)in React Native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    color: 'black'
  },
  subHeaderStyle: {
    fontSize: 20,
    color: 'blue'
  },
  status:{
    fontSize: 22,
    color: 'green',
    marginTop: 300,
    backgroundColor: 'yellow'
  }
});

export default ComponentsScreen;
