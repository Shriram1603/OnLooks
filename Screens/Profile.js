import { Image, StyleSheet, Text, TouchableOpacity, View,ActivityIndicator } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons'
import React, { useEffect, useState } from 'react'
import firestore from   '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import Geolocation from 'react-native-geolocation-service';
import haversine from 'haversine';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Profile = () => {
  const [userID,setuserid] = useState('')
  const [Inside,setInside] = useState('')

  useEffect(() => {
    Geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;
        console.log(position.coords)
        const geofence = {
          latitude: 12.9214,
          longitude: 80.2400,
          radius: 300,
        };

        const distance = haversine(
          { latitude, longitude },
          { latitude: geofence.latitude, longitude: geofence.longitude },
          { unit: 'meter' },
        );

        if (distance <= geofence.radius) {
          console.log('User is inside the geofence!');
          setInside('Inside')
          const email = auth().currentUser.email
          console.log(email)
          firestore().collection('location').doc(email).set({
            email : email,
            reachedCollege:'true'
          })
        } else {
          console.log('User is outside the geofence.');
          setInside('Outside')
        }
      },
      error => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 50, // in meters
        fastestInterval: 3000, // in milliseconds
      },
    );
  }, []);


  return (
    <LinearGradient colors={['#383875','#34346D','#33316A','#302D65','#2C2B5D','#353470', '#2E2C63', '#272657']} style={styles.linearGradient}>
      
      <TouchableOpacity style={{height: 40,width: 40,borderRadius: 100,backgroundColor: "white",justifyContent:"center",alignItems:"center",opacity:0.2,marginTop:30,marginLeft:20,}}>
        <Ionicons name={'chevron-back-sharp'} style={{fontSize:25}} color={"white"} />
      </TouchableOpacity>
      <View style={{flexDirection:"column",alignItems:"center",}}>
      {/* <View style={{height: 200,width: 200,borderRadius: 100,backgroundColor: "white",justifyContent:"center",alignItems:"center",marginTop:35,}}> */}
      <Image style={styles.dp} source={require("../assets/studentdp2.jpg")} />
      {/* </View> */}
      <Text style={{color:"white",fontSize:30,fontWeight:"bold",marginTop:10,}}>Kashmira Paradesi</Text>
      <View style={{height:40,width:190,borderRadius:25,marginTop:10,backgroundColor:"#2F82FA",alignItems:"center",justifyContent:"center"}}><Text style={{color:"white"}}>Student</Text></View>
      </View>
      {/* Dp and NAme */}
      <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:30,}}>
        <View style={{flexDirection:"column",alignItems:"center",}}>
          <Text style={{fontSize:16,color:'#73739F',}}>Semester</Text>
          <Text style={{color:"white",marginTop:7,fontSize:17}}>4</Text>
        </View>
        <View style={{flexDirection:"column",alignItems:"center",}}>
          <Text style={{fontSize:16,color:'#73739F',}}>Year</Text>
          <Text style={{color:"white",marginTop:7,fontSize:17}}>2</Text>
        </View>
        <View style={{flexDirection:"column",alignItems:"center",}}>
          <Text style={{fontSize:16,color:'#73739F',}}>Batch</Text>
          <Text style={{color:"white",marginTop:7,fontSize:17}}>2021-2025</Text>
        </View>
      </View>
      {/* begining of cards */}
      {/* <LinearGradient colors={['#3C3A88','#3A3987','#383785','#383785','#383581','#383581', '#35327E',]} style={styles.card}>
      </LinearGradient> */}
      <View style={styles.card}>
        {/* <ActivityIndicator size={50} Text={"72%"} color={'red'} style={{alignItems:"flex-start",marginTop:45,marginLeft:55,}}/> */}
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",}}>
        <Text style={{fontSize:18,color:'white',marginTop:25,}}>Present Percentage:</Text>
        <AntDesign name={'loading1'} style={{fontSize:45,color:'red',marginLeft:15,marginTop:25,}} />
        <Text style={{color:'#B6B3DB',marginTop:25,right:35,fontSize:14,}}>75%</Text>
        </View>
        <View style={{flexDirection:"row",alignItems:"center",}}>
        <Text style={{fontSize:18,color:'white',marginTop:25,}}>Absent Percentage:</Text>
        <AntDesign name={'loading2'} style={{fontSize:45,color:'green',marginLeft:15,marginTop:25,}} />
        <Text style={{color:'#B6B3DB',marginTop:25,right:35,fontSize:14,}}>15%</Text>
        </View>
        <View style={{flexDirection:"row",alignItems:"center",}}>
        <Text style={{fontSize:18,color:'white',marginTop:25,}}>Total Percentage:</Text>
        <AntDesign name={'loading1'} style={{fontSize:45,color:'yellow',marginLeft:25,marginTop:25,}} />
        <Text style={{color:'#B6B3DB',marginTop:25,right:35,fontSize:14,}}>85%</Text>
        </View>
        <TouchableOpacity style={{height:60,width:300,borderRadius:25,backgroundColor:"#2F82FA",alignItems:"center",justifyContent:"center",marginTop:20,}}>
          <Text style={{color:"white"}}>Settings</Text>
        </TouchableOpacity>

      </View>

     
    </LinearGradient>
  )
}

export default Profile

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,    
  },
  card:{
    height:300,
    width:'90%',
    // margin:50,
    marginTop:30,
    marginHorizontal:20,
    alignItems:"center",
    borderRadius:45,
    backgroundColor:"#3C3A88",

  },
  dp:{
    resizeMode:"cover",
    height: 200,
    width: 200,
    borderRadius: 100,

  },
})