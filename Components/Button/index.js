import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const Button = ({props}) => (
  <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{props}</Text>
      </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#79CBF3',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    // marginTop:15,
    borderRadius: 30,
  },
  text: {
    color: '#FFF',
    fontSize: 17,
  },
});

export default Button;
