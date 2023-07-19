import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, Pressable } from 'react-native'
import colors from '../../constants/colors';
import fontSize from '../../constants/fontSize';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function TrendingList(width,height,itemData ,navigation: any,navigate=null,navigateData={},onPress=null){
  const HandlePress = () => {
    navigate ? navigation.navigate(navigate, navigateData) :null
  }
  return (
    <Pressable onPress={HandlePress} style={{ ...styles.trendingContainer,}}>
  
    <View style={{ ...styles.trendingCard, minWidth: width * 0.7, maxWidth: width * 0.7 }}>
      <ImageBackground resizeMode='center' imageStyle={{}} borderRadius={20} style={styles.trendingImage} source={(itemData.item.img)}>
        <View style={{ flexDirection: 'row', backgroundColor: colors.primaryHover, padding: 5,height:35, width: 100, borderRadius: 7, alignItems: 'center' }}>
          <MaterialCommunityIcons name="fire" size={24} color="black" />
          <Text>Trending</Text>
        </View>

      </ImageBackground>
      <Text style={styles.trendingHeader}> {itemData.item.title}</Text>
    </View>

  </Pressable>
  )
}
const styles = StyleSheet.create({
    
    trendingContainer: {
      alignItems: 'center',
      // marginVertical:40,
      flexDirection: 'row',
    },
    trendingCard: {
      padding: 15,
      flexDirection: 'column',
      elevation: 2,
      shadowColor: colors.primaryColor,
      backgroundColor:'white',
      marginBottom: 10,
      flexShrink: 1,
      marginRight: 30,
      borderRadius: 20,
    },
    trendingImage: {
      padding: 15,
      paddingBottom: 100,
      borderRadius: 20,
  
  
  
    },
    trendingHeader: {
      fontFamily: 'interSemiBold',
      fontSize: fontSize.bodySmall.fontSize,
      lineHeight: fontSize.bodySmall.lineHeight,
      color: 'black',
      width: '80%',
      marginTop: 8,
      maxHeight: 35,
      minHeight: 35,
  
  
    },
  });