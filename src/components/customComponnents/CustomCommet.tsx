import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import colors from '../../constants/colors';
import fontSize from '../../constants/fontSize';
import { typescale } from '../../constants/Typography';

export default function CustomComment({ lable = "Search", style = {} }) {
  return (
    <TextInput
      placeholder={lable}
      placeholderTextColor={colors.grey3}
      mode='flat'
      multiline
      contentStyle={{
        fontFamily: "regular",
       borderColor:"transparent",
        ...typescale.bodyLarge,
        color:"white"
      }}    
      cursorColor={colors.grey5}
      textColor={colors.grey5}
      activeOutlineColor={"transparent"}
      activeUnderlineColor={colors.grey4}
      outlineColor='transparent'
      // outlineStyle={{ borderRadius: 30,borderColor:"transparent", borderWidth: 0.5 }}
      style={{ ...styles.container,  ...style, }} />
  )
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'black',
    width:"90%",
    borderColor:"transparent",
    letterSpacing: 0.2,
    display:"flex",
    // alignItems:"center",
    height: 40,
    color:"white"
  },


});