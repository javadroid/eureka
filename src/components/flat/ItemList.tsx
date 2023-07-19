import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Pressable } from 'react-native'
import colors from '../../constants/colors'
import fontSize from '../../constants/fontSize'

export default function ItemList(itemData: any, navigation: any, navigate = undefined as any, navigateData = {},action=undefined as any) {
  const HandlePress = () => {
    navigate ? navigation.navigate(navigate, navigateData) : action(true)
  }
  return (
    <Pressable onPress={HandlePress} style={{ ...styles.container, ...{ marginTop: itemData.index === 0 ? 0 : 15 } }}>
      <Text style={styles.title}>{itemData.item.title}</Text>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }} >
        <Text style={styles.caption}>{itemData.item.caption}</Text>
        <Text style={styles.caption}>{itemData.item.questionN}</Text>
      </View>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: colors.primaryHover,
    padding: 13,
    borderWidth: 1,
  },
  title: {
    fontFamily: 'bold',
    fontSize: fontSize.title.fontSize,
    lineHeight: fontSize.title.lineHeight,
    color: colors.textTitle,
    marginBottom: 8,

  },
  caption: {
    fontFamily: 'interRegular',
    fontSize: fontSize.body.fontSize,
    lineHeight: fontSize.body.lineHeight,
    color: colors.textColor,
  },
})