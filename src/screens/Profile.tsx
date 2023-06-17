import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import CustomPageCointainer from '../components/customComponnents/CustomPageContainer';
import { LinearGradient } from 'expo-linear-gradient';


export default function Profile() {
 
  return (
    <CustomPageCointainer edgeTop={'top'} style={styles.container}>
        <Text  >
      You are using an old version
    </Text>
  </CustomPageCointainer>
  )
}
const styles = StyleSheet.create({
    container: {
        
        flex:1,
      justifyContent:'center',alignItems:'center',
      flexDirection:'column'

    },
});
