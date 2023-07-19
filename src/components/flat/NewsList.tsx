import { View, Text,StyleSheet,Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import colors from '../../constants/colors';
import fontSize from '../../constants/fontSize';


export default function NewsList({itemData,navigation,navigate=null,navigateData={},onPress=null}){
  const HandlePress = () => {
    navigate ? navigation.navigate(navigate, navigateData) :null
  }
  return (
    <Pressable onPress={HandlePress} style={styles.newsCard}>
    <Image style={styles.newsImage} source={itemData.item.img} />

    <View style={styles.newsContent}>
      <Text style={styles.newsContentCategory}>{itemData.item.category}</Text>
      <Text style={styles.newsContenttitle}>{itemData.item.title}</Text>
      <Text style={styles.newsContentDate}>{itemData.item.date}</Text>
    </View>
  </Pressable>
  )
}

const styles = StyleSheet.create({
 
    newsContainer: {
      // flex: 1,
      display: 'flex',
      flexDirection: 'column',
      paddingHorizontal: 20,
      // backgroundColor: 'red',
      flexShrink: 1,
      // width:'100%'
  
    },
    newsCard: {
      display: 'flex',
      flexDirection: 'row',
      padding: 5,
      // backgroundColor: 'white',
      borderRadius: 20,
      borderWidth: 1,
      borderColor: colors.background,
  
  
      marginBottom: 20,
      //  backgroundColor: 'red',
    },
    newsImage: {
      width: "40%",
      height: "100%",
      borderRadius: 20,
  
  
    },
    newsContent: {
      marginHorizontal: 10,
      flexShrink: 1,
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    newsContentCategory: {
      fontFamily: 'interSemiBold',
      fontSize: fontSize.bodySmall.fontSize,
      lineHeight: fontSize.bodySmall.lineHeight,
      color: colors.textTitle,
      marginBottom: 15
    },
    newsContenttitle: {
      fontFamily: 'interSemiBold',
      fontSize: fontSize.body.fontSize,
      lineHeight: fontSize.body.lineHeight,
      color: 'black',
      marginBottom: 15
    },
    newsContentDate: {
      fontFamily: 'interSemiBold',
      fontSize: fontSize.caption.fontSize,
      lineHeight: fontSize.caption.lineHeight,
      color: colors.textTitle,
      alignSelf: 'flex-end',
      // marginBottom:20
    },
  });