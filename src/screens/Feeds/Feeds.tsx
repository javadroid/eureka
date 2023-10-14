import { View, Text, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import colors from '../../constants/colors';
import fontSize from '../../constants/fontSize';
// import { Avatar,  } from 'react-native-paper';
import CustomText from '../../components/customComponnents/CustomText';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Avatar, Divider, Icon } from 'react-native-elements';
import { fonts } from 'react-native-elements/dist/config';
import { TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { addThread } from '../../utils/store/ThreadSlice';


export default function Feeds({ item, 
  navigation,
  hideModal =undefined as any,
  dispatch=undefined as any
}) {
  
  const opPress = (item: any) => {
    console.log("open feed")
    hideModal&&hideModal()
    dispatch&& dispatch(addThread({data:item}))
      navigation.navigate("OpenFeed", { item })
    
  }
  const font =  fontSize.caption
  return (

    <TouchableHighlight onPress={() => opPress(item)}
      style={item.comment ? { marginTop: 10, paddingHorizontal: 10 } : { marginTop: 20, }}>
      <>
        <View style={{ ...styles.userContainer }}>
          <View style={styles.userDetailsContainer}>
            <Avatar rounded
              size={'small'}
              overlayContainerStyle={{ backgroundColor: colors.grey45 }}
              icon={{ name: 'user', type: 'font-awesome' }}
            />
            <View style={styles.userDetails}>
              <View style={styles.userName}>
                <CustomText
                  letterSpacing={0}
                  style={{ padding: 0 }} color='white'
                  fontFamily='bold' fontsize={font} text={item.name} />

                <View style={styles.verifiedContainer}>
                  <View style={styles.verifiedBackgroud}></View>
                  {/* <AntDesign style={{ position: "absolute", }} name="checkcircle" size={20} color="green" /> */}
                  <MaterialIcons style={{ position: "absolute", }} name="verified" size={20} color="green" />
                </View>

              </View>
              <CustomText letterSpacing={0} style={{ padding: 0, }} color={colors.grey45} fontsize={font} text={item.location || 'MCB, Fulafia 2 hrs '} />

            </View>
          </View>

          <Entypo name="dots-three-vertical" size={15} color={colors.grey45} />
        </View>


        <CustomText numberOfLines={10} style={ {}} letterSpacing={0} fontsize={font} color='white' text={item.tweet} />

        <View style={{ ...styles.FeedsActionContainer, }}>
          <FeedsAction name='heart' type='feather' count='1k' />
          <FeedsAction name='message-circle' type='feather' count='1k' />

          {item.comment ? (
            <FeedsAction name='share-2' type='feather' count='' />
          ) : (
            <>
              <FeedsAction name='bar-chart-2' type='feather' count='1k' />
              <View style={styles.FeedsActionRight}>
                <FeedsAction name='share-2' type='feather' count='' />
              </View>
            </>
          )}

        </View>
        <Divider style={{ marginTop: 10, backgroundColor: colors.grey2 }} />
      </>
    </TouchableHighlight>
  )
}
const FeedsAction = ({ type = 'feather', name = 'share-2', count = '1k' }) => {

  return (
    <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "center" }}>
      <Icon size={18} style={{ padding: 0, marginBottom: 10 }} name={name} type={type} color={colors.grey45} />
      <CustomText style={{ marginLeft: -8 }} fontsize={fontSize.caption} text={count} />
    </View>

  )
}
const styles = StyleSheet.create({
  userContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  userDetailsContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  userDetails: { display: "flex", flexDirection: "column", paddingLeft: 8, justifyContent: "space-between" },
  userName: { display: "flex", flexDirection: "row", justifyContent: "space-between" },
  verifiedContainer: { display: "flex", justifyContent: "center", alignItems: "center", marginLeft: 15 },
  verifiedBackgroud: { position: "absolute", height: 10, width: 10, backgroundColor: "white", borderRadius: 100 },
  FeedsActionContainer: { paddingLeft: 8, display: "flex", flexDirection: "row", width: "100%", },
  FeedsActionRight: { display: "flex", flexDirection: "row", alignSelf: "flex-end", flexGrow: 1, alignItems: "flex-end", justifyContent: "flex-end" },
  headerTitle: {
    marginTop: 20,
    fontFamily: 'bold',
    fontSize: fontSize.title.fontSize,
    lineHeight: fontSize.title.lineHeight,
  },
  container: { backgroundColor: colors.grey2, },
  registerContainer: {
    width: '100%',
    padding: 20,
    position: "relative"
  }, font: {
    fontSize: 12,
    fontFamily: "regular",
    color: colors.grey45
  }

});