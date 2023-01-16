import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const App = () => {
  const name =  'Asma ';

  return (
< View>
  <Text style={styles.textStyle}>Getting Started with React Native</Text>
  <Text style={styles.subHeaderStyle}>My Name is {name}</Text>
  <Text style={styles.exerciseone}>Exercise number one using two different text elements with different font size (45, 20)in React Native </Text>
  <Button style={styles.button}  title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
  </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    color: '#000000'
  },
  subHeaderStyle: {
fontSize: 20,
color: 'red'
  },
  exerciseone: {
   fontSize: 18,
   marginTop: 300,
    color: 'blue'
  },
  TouchableOpacity: {
    fontSize:25,
    color: 'black',
    height: 40,
    width: 100,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#ccffcc'
  }
});

export default App;