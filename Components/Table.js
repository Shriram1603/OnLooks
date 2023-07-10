import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StdData from './StdData';

const Table = () => {
  return (
    <View style={style.container}>
      <View style={style.nav}>
        <Text style={style.txt1}>ID</Text>
        <Text style={style.txt2}>Names</Text>
        <Text style={style.txt}>Present</Text>
      </View>
    <ScrollView>
        <StdData />
    </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: 400,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 30,
    marginTop: 30,
    marginLeft: 39,
  },
  txt1: {
    color: 'black',
    margin: 15,
    marginLeft:85,
  },
  txt: {
    color: 'black',
    margin: 15,
    // marginLeft:85,
  },
  txt2:{
    color: 'black',
    margin: 15,
    marginRight:80,

  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
});
export default Table;