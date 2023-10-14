import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import colors from '../../constants/colors';
import fontSize from '../../constants/fontSize';
import { typescale } from '../../constants/Typography';
import { FeedsAction } from './FeedsAction';

export default function CustomOptionList({item}) {
  return (
    <View style={{flex:1,  display:"flex",marginTop:10}}>
  
        <FeedsAction fontFamily='semibold' styleText={{marginLeft:10,}} font={fontSize.body} count={item.name} name={item.iconname} />
    </View>
  )
}

const styles = StyleSheet.create({
 
    container: {
        backgroundColor:colors.grey2,
        // marginBottom:30,
        height:35,
    },
  

});