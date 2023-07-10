import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import React, { useEffect } from 'react';
import Button from '../Components/Button';
import { PermissionsAndroid } from 'react-native';
import auth from '@react-native-firebase/auth'

const Admin = ({ navigation }) => {

  useEffect(() => {
    getLocationPermissions()
  }, [])

  const getLocationPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Example App',
          'message': 'Example App access to your location '
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location")
      } else {
        console.log("location permission denied")
        alert("Location permission denied");
      }
    } catch (err) {
      console.warn(err)
    }
  }

  return (
    <View style={styles.container}>
      <Text>@Admin Dashboard</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Student_Signup', { name: 'Student_Signup' })
        }>
        <Text style={styles.text}>Create Student</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('ParentSignup')
        }>
        <Text style={styles.text}>Create Parent</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Teacher_signup', { name: 'Teacher_signup' })
        }>
        <Text style={styles.text}>Create Teacher</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Login', { name: 'Login' })
        }>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Admin;

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