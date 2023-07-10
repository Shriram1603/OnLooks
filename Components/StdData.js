import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, } from 'react-native';

import { ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Cb from './Cb';

const StdData = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('Student')
      .onSnapshot(querySnapshot => {
        const usersData = [];
        querySnapshot.forEach(documentSnapshot => {
          usersData.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
            // role: documentSnapshot.role,
          });
        });
        setUsers(usersData);
        setLoading(false);
      });

    // Unsubscribe from snapshot listener when component unmounts
    return () => unsubscribe();
  }, []);

  const renderUser = ({ item }) => (
    <View style={styles.component}>
      <Text style={styles.txt}>{item.email}</Text>
      <Text style={styles.txt1}>{item.name}</Text>
      <Cb />
      
      {/* <Text style={styles.txt}>{item.status}</Text> */}
    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <FlatList
      data={users}
      scrollEnabled={false}
      renderItem={renderUser}
      keyExtractor={item => item.id}
      style={{ flex: 1 }}
    />
  );
};

const styles = StyleSheet.create({
  txt: {
    color: 'black',
    margin:5,
    textAlign:"right",
  },
  txt1:{
    textAlign:"left",
  },
  component: {
    alignItems:'center',
    marginRight:50,
    flexDirection: 'row',
    justifyContent:"space-around",
  },
});

export default StdData;