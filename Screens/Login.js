import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import CryptoJS from "react-native-crypto-js";
import firestore from '@react-native-firebase/firestore';
import React from 'react';
import { PermissionsAndroid } from 'react-native';

const Login = ({ navigation }) => {
  const [userid, setuserid] = useState('');
  const [password, setpassword] = useState('');
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
  useEffect(() => {
    checkAndroidPermission = async () => {
      try {
        const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
        await PermissionsAndroid.request(permission);
        Promise.resolve();
      } catch (error) {
        Promise.reject(error);
      }
  };
    getLocationPermissions()
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if(user){
    const email = auth().currentUser.email
    firestore().collection('Users').doc(email).get()
      .then(doc => {
        if (doc.exists) {
          const r = doc.data().role
          const unsub = auth().onAuthStateChanged((user) => {
            console.log(user)
            let roles = doc._data.role
            console.log("Roles", roles)
            if (roles == 'student') {
              navigation.replace('Profile')
            } if (roles == 'parent') {
              navigation.replace('ParentHome')
            } if (roles == 'teacher') {
              navigation.replace('Attendance')
            } if (roles == 'admin') {
              navigation.replace('Admin')
            }

          })

          return unsubscribe
        }
      })
      .catch(error => {
        console.log('Error getting document:', error);
      });
  }})},[])

  const LoginAuth = async () => {
    console.log("Login")
    firestore()
      .collection('Users')
      .where('email', 'in', [userid])
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(snapshot => {
          console.log("In", snapshot)
          let roles = snapshot._data.role
          if (roles == 'student') {
            console.log("Student")
            auth().signInWithEmailAndPassword(userid, password).then(
              navigation.replace('Profile'))
          } if (roles == 'parent') {
            console.log("Parent")
            auth().signInWithEmailAndPassword(userid, password).then(
              navigation.replace('ParentHome'))
          } if (roles == 'teacher') {
            console.log("teacher")
            auth().signInWithEmailAndPassword(userid, password).then(
              navigation.replace('Attendance'))
          } if (roles == 'admin') {
            console.log("teacher")
            auth().signInWithEmailAndPassword(userid, password).then(
              navigation.replace('Admin'))
          }
        });
      });
  };

  return (
    <View style={styles.container}>

      <Text
        style={{
          fontSize: 24,
          marginTop: 100,
          textAlign: 'center',
          justifyContent: 'center',
        }}>
        Login
      </Text>
      <TextInput
        placeholder="Email"
        value={userid}
        onChangeText={Text => setuserid(Text)}
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 70,
          marginHorizontal: 10,
        }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={Text => setpassword(Text)}
        secureTextEntry={true}
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 40,
          marginHorizontal: 10,
          margin: 10,
        }}
      />
      <TouchableOpacity style={styles.button} onPress={LoginAuth}>
        <Text style={{ color: 'white', fontSize: 15 }}>Login</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    height: 50,
    width: "90%",
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 40,
    marginHorizontal: 20,

  },
  card: {
    // justifyContent:"center",
    // alignItems:"center",
  },
});