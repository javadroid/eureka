import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Pressable } from 'react-native'
import colors from '../../constants/colors'
import fontSize from '../../constants/fontSize'

export default function ItemList(itemData: any, navigation: any, navigate = undefined as any, navigateData = {},action=undefined as any) {
  const HandlePress = () => {
    navigate ? navigation.navigate(navigate, navigateData) : action(true)
  }
  return (
    <TouchableOpacity 
    activeOpacity={0.8}
    onPress={HandlePress} 
    style={{ ...styles.container, ...{ marginTop: itemData.index === 0 ? 0 : 15 } }}
    >
      <Text 
      style={styles.title}
      >{itemData.item.title}</Text>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }} >
        <Text style={styles.caption}>{itemData.item.caption}</Text>
        <Text style={styles.caption}>{itemData.item.questionN}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 13.5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.primaryHover,
    borderRadius: 22,
    paddingLeft: 18,
    paddingTop: 17,
    paddingBottom: 21,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    fontFamily: 'bold',
    fontSize: fontSize.title.fontSize,
    lineHeight: fontSize.title.lineHeight,
    color: colors.textColor,
    marginBottom: 10,
  },
  caption: {
    fontFamily: 'interRegular',
    fontSize: fontSize.body.fontSize,
    lineHeight: fontSize.body.lineHeight,
    color: colors.grey,
  },
})