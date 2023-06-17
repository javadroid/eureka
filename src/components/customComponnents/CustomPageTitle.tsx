import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import colors from '../../constants/colors';


export default function CustomPageTitle({lable}) {
  return (
    <View style={styles.container}>
        <Text style={styles.lable}>
            {lable}
        </Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
     marginBottom:10
    },
  
    lable:{
      color:colors.textColor,
      fontSize:28,
      fontFamily:'bold',
      letterSpacing:0.3
    }
  });
  