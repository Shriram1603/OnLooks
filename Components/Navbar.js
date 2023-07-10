import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import React from 'react'

const Navbar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity><MaterialCommunityIcons name={'home-plus'} style={{fontSize:35}} color={"white"} /></TouchableOpacity>
      <TouchableOpacity><Entypo name={'open-book'} style={{fontSize:35}} color={"white"} /></TouchableOpacity>
      <TouchableOpacity><Feather name={'user'} style={{fontSize:35}} color={"white"} /></TouchableOpacity>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#3624A5",
        // color:"white",
        width:400,
        height:80,
        borderRadius:15,
        left:5,
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        padding:20,
        paddingStart:50,
        paddingEnd:50,

        
    }

})