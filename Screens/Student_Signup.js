import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { useState } from 'react';
import CryptoJS from "react-native-crypto-js";

const Student_Signup = ({ navigation }) => {
  const [emailID, setemailID] = useState('');
  const [password, setpassword] = useState('');
  const [userName, setusername] = useState('');

  const fb = async (id, emailID, r) => {
    console.log('Hi');
    await firestore()
      .collection('Users').doc(emailID)
      .set({
        name: id,
        email: emailID,
        role: r,
      })
      .then(() => {
        console.log('User added!');
      });
  };
  const fl = async (id, emailID, r) => {
    console.log('Hi');
    await firestore()
      .collection('Student').doc(emailID)
      .set({
        name: id,
        role: r,
        email: emailID,

      })
      .then(() => {
        console.log('User added!');
      });
  };


  const LoginAuth = async () => {
    let role = "student"
    // let passwd = CryptoJS.AES.encrypt(password, 'SecretKeyDes').toString();
    // console.log(passwd)
    // let decrypted_pass = CryptoJS.AES.decrypt(r, 'SecretKeyDes');
    // let depass = decrypted_pass.toString(CryptoJS.enc.Utf8);
    // console.log(depass)
    await auth()
      .createUserWithEmailAndPassword(emailID, password)
      .then(() => {
        console.log('User added!');
        fb(userName, emailID, role);
        fl(userName, emailID, role);
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
          <TextInput
            placeholder="username"
            value={userName}
            onChangeText={Text => setusername(Text)}
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              marginTop: 40,
              marginHorizontal: 10,
            }}
          />
          <TouchableOpacity style={styles.button} onPress={LoginAuth}>
            <Text style={{ color: 'white', fontSize: 15 }}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Student_Signup;

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