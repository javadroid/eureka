import { View, Text, StyleSheet, ScrollView } from 'react-native'
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
import { Button } from 'react-native-paper';
import CustomButtonSubmit from '../../components/customComponnents/CustomButtonSubmit';


export default function OneFeed({ item, navigate,  }) {
  
  const opPress = (item: any) => {
  }
  
  return (

     <View 
      style={{ marginTop: 10, }}>
      
        <View style={{ ...styles.userContainer }}>
          <View style={styles.userDetailsContainer}>
            <Avatar rounded
              size={'medium'}
              overlayContainerStyle={{ backgroundColor: colors.grey45 }}
              icon={{ name: 'user', type: 'font-awesome' }}
            />
            <View style={styles.userDetails}>
              <View style={styles.userName}>
                <CustomText
                  letterSpacing={0}
                  style={{ padding: 0 }} color='white'
                  fontFamily='bold' fontsize={fontSize.body} text={item.name} />

                <View style={styles.verifiedContainer}>
                  <View style={styles.verifiedBackgroud}></View>
                  {/* <AntDesign style={{ position: "absolute", }} name="checkcircle" size={20} color="green" /> */}
                  <MaterialIcons style={{ position: "absolute", }} name="verified" size={20} color="green" />
                </View>

              </View>
              
              <CustomText letterSpacing={0} style={{ padding: 0, }} color={colors.grey45} fontsize={fontSize.body} text={item.location || 'MCB, Fulafia 2 hrs '} />

            </View>
          </View>
<View style={{display:"flex",flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
    <Text style={{...styles.lable}}>{"Link Up"}</Text>
      <Entypo name="dots-three-vertical" size={15} color={colors.grey45} />
</View>
        
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
        <CustomText style={ { minHeight: "10%" } } letterSpacing={0} fontsize={fontSize.body} color='white' text={item.tweet} />
</ScrollView>
        
      
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
  FeedsActionContainer: {position:"absolute", bottom:0, paddingLeft: 8, display: "flex", flexDirection: "row", width: "100%", },
  FeedsActionRight: {  display: "flex", flexDirection: "row", alignSelf: "flex-end", flexGrow: 1, alignItems: "flex-end", justifyContent: "flex-end" },
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
  },
  lable: {
    fontFamily: "bold",
    backgroundColor:"white",
    fontSize: fontSize.caption.fontSize,
    // lineHeight: fontSize.caption.lineHeight,
    marginRight:7,
    paddingHorizontal:10,
    paddingVertical:3,
    borderRadius:200,

    textAlign:"center",
    color: "black",
  },

});