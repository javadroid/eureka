import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


export default function StudentDashboard() {
  return (
    <View style={styles.container}>
    <Text  >
      You are using an old version
    </Text>
  </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});