import React from 'react'
import { StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { Attend } from '../Components/Attend';
import Navbar from '../Components/Navbar';

export const Attendance = () => {
  return (
    <LinearGradient colors={['#383875','#34346D','#33316A','#302D65','#2C2B5D','#353470', '#2E2C63', '#272657']} style={style.container}>
      
      <Attend/>
      <Navbar />
    </LinearGradient>
    
  );
};
const style=StyleSheet.create({
  container:{
    flex:1,
  },
})
export default Attendance;