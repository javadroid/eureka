import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import CustomPageCointainer from '../components/customComponnents/CustomPageContainer';


export default function StudentDashboard() {
  return (
    <CustomPageCointainer style={styles.container}>
    <Text  >
      You are using an old version
    </Text>
  </CustomPageCointainer>
  )
}
const styles = StyleSheet.create({
    container: {
        
       
    },
});
