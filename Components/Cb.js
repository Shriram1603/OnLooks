import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import React from 'react'

const Cb = () => {
const [isSelected, setSelection] = useState(false);
  return (
    
      <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
  )
}

export default Cb

const styles = StyleSheet.create({})