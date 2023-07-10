import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Table from './Table';

export const Attend = () => {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.text1}>Classroom</Text>
        <Text style={style.text2}>March 25, 17:20:00-18:00:00</Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          height: 80,
          justifyContent: 'center',
          width: '90%',
          marginLeft: 20,
          borderColor: 'white',
        }}>
        <View style={style.nav1}>
          <Text style={style.txtnav1}>Room</Text>
          <Text style={style.txtnav1}>Total</Text>
          <Text style={style.txtnav1}>Dept</Text>
          <Text style={style.txtnav1}>Year</Text>
          <Text style={style.txtnav1}>Sem</Text>
        </View>

        <View style={style.nav2}>
          <Text style={style.txtnav2}>T10</Text>
          <Text style={style.txtnav2}>67</Text>
          <Text style={style.txtnav2}>IT</Text>
          <Text style={style.txtnav2}>2nd</Text>
          <Text style={style.txtnav2}>IV</Text>
        </View>
      </View>

      <View style={style.outbox}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <Text style={style.text3}> 56</Text>
          <Text style={style.text3}> 3</Text>
          <Text style={style.text3}> 2</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <Text style={style.text4}> Present</Text>
          <Text style={style.text4}> late</Text>
          <Text style={style.text4}> Absent</Text>
        </View>
        <Table />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    fontWeight: 700,
    color:"white",
  },
  text2: {
    fontSize: 13,
    marginTop: 2,
    marginLeft: 20,
    color:"white",
  },
  nav1: {
    flexDirection: 'row',
    // fontSize:10,
    justifyContent: 'space-between',
    marginTop: 20,
  },
  txtnav1: {
    fontSize: 11,
    color:"white",
  },
  nav2: {
    flexDirection: 'row',
    // fontSize:10,
    justifyContent: 'space-between',
    marginTop: 11,
    // color:"white",
    // backgroundColor:"#3C3A88",
  },
  txtnav2: {
    fontSize: 13,
    fontWeight: 'bold',
    color:"white",
  },
  outbox: {
    marginTop: 20,
    height: '100%',
    width: '100%',
    backgroundColor:"#3C3A88",
    // opacity: 1,
    borderWidth:1,

    borderRadius: 30,
  },
  text3: {
    fontSize: 15,
    marginTop: 5,
    // marginLeft:10,
    color:"white",
  },
  text4: {
    fontSize: 15,
    marginTop: 5,
    // marginLeft:10,
    color:"white",
  },
});