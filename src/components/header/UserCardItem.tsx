import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import ProfileImage from '../ProfileImage';
import colors from '../../constants/colors';
import { useSelector } from 'react-redux';



export default function UserCardItem({   onPress = undefined as any }) {
  const userData =  useSelector((state: any) => state.user.userData)
  const image = userData?.profileImage 
  // console.log(userData?.profileImage,"ll")

  return (

    <View
    // onPress={onPress}
    >
      <View style={styles.container}>
        <ProfileImage style={{ height: 30, width: 30 }} showEditButton={false} profileImage={image} />
        <View style={styles.textContainer}>
          {/* <Text numberOfLines={1} style={styles.title}>{userData.username }</Text> */}
          {/* <Text numberOfLines={1}  style={styles.subtitle}>{userData.matricNo}</Text> */}
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 7,
    // borderBottomColor:colors.extraLightGrey,
    // borderBottomWidth:1,
    alignItems: 'center',
    minHeight: 50,

  },
  textContainer: {
    marginLeft: 5,

  },
  title: {
    letterSpacing: 0.3,
    fontSize: 10,
    fontFamily: 'interRegular'
  },
  subtitle: {
    letterSpacing: 0.3,

    color: colors.grey,
    fontFamily: 'regular'

  },

});
