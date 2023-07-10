import {StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';
import React from 'react';
import {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import CryptoJS from "react-native-crypto-js";


const Teacher_signup = () => {
    const [emailID, setemailID] = useState('');
    const [password, setpassword] = useState('');

  const fb = (id,role) => {
    firestore()
      .collection('Users').doc(id)
      .set({
        email: id,
        role: role,
        stat: 0,
      })
      .then(() => {
        console.log('User added!');
      });
  };

  const LoginAuth = async () => {
    let role = "teacher"
    await auth()
      .createUserWithEmailAndPassword(emailID, password)
      .then(() => {
        console.log('User added!');
        fb(emailID,role);
      });

    console.log(auth().currentUser?.email);
  };
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text
            style={{
              fontSize: 24,
              marginTop: 100,
              textAlign: 'center',
              justifyContent: 'center',
            }}>
            Signup
          </Text>
          <TextInput
            placeholder="Email"
            value={emailID}
            onChangeText={Text => setemailID(Text)}
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
            }}
          />
          <TouchableOpacity style={styles.button} onPress={LoginAuth}>
            <Text style={{color: 'white', fontSize: 15}}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Teacher_signup;

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: 400,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginLeft: 5,
        marginTop: 40,
      },
});