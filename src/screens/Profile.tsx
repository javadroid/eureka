import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomPageCointainer from '../components/customComponnents/CustomPageContainer';
import { LinearGradient } from 'expo-linear-gradient';
import { HeaderMenu, HeaderProfileMenu } from '../components/header/HeaderMenu';
import fontSize from '../constants/fontSize';
import colors from '../constants/colors';
import ProfileImage from '../components/ProfileImage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Profile({ navigation }) {

  return (
    <>
      <View style={styles.container}>
        <HeaderProfileMenu headerTitleStyle={{ fontFamily: 'bold', fontSize: fontSize.header3.fontSize, color: colors.backgroundWhite }} headerTitle='Profile' navigation={navigation} />
        <View style={styles.topDesign}></View>
        <SafeAreaView edges={['right', 'left', 'bottom', 'top']} style={{ display: 'flex', flex: 1, }}>
          <View style={styles.topBox}>
            <ProfileImage showEditButton={false} />
            <Text style={styles.topBoxTitle}>Smith Jessica</Text>
            <View style={{ ...styles.lineDivider, }}></View>
            <Text style={styles.about}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed mi ut mi venenatis maximus. Duis tristique accumsan.</Text>
          </View>
          <ScrollView>
            <View style={styles.bottomContainers}>
            
            <BottomContainer style={{backgroundColor:'white'}} IconPage1={MaterialCommunityIcons} IconPage2={FontAwesome}
              iconName1={true?'gender-female':'gender-male'} iconName2={'user-o'} text1='Female' text2='Jessi' />
            <BottomContainer IconPage1={Feather} IconPage2={Ionicons}
              iconName1={'phone-call'} iconName2={'mail-open-outline'} text1='08030000000' text2='ansharma@gmail.com' />
            <BottomContainer style={{backgroundColor:'white'}} IconPage1={FontAwesome} IconPage2={FontAwesome}
              iconName1={'level-up'} iconName2={'id-card-o'} text1='100' text2='200012029' />
              <BottomContainer IconPage1={MaterialCommunityIcons} IconPage2={MaterialCommunityIcons}
              iconName1={'school-outline'} iconName2={'school-outline'} text1='Faculty of Computing' text2='Computer Science' />
          </View>
          </ScrollView>
          
       
        </SafeAreaView>
      

      </View>
    </>

  )
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    flex: 1,
    display: 'flex',
    backgroundColor: 'white',


  },
  topDesign: {
    display: 'flex',
    backgroundColor: colors.primaryHover,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    position: 'absolute',
    width: '100%',
    height: '30%'
  },
  topBox: {
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: 30,
    paddingHorizontal: 24,
    paddingVertical: 24,
    marginHorizontal: 24,

    marginTop: 100,
    borderColor: colors.borderColor,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',

  },
  topBoxTitle: {
    marginTop: 15,
    fontFamily: 'bold',
    fontSize: fontSize.titleLarge.fontSize,
    lineHeight: fontSize.titleLarge.lineHeight,
    marginBottom: 25,
    color: 'black',
  },
  lineDivider: {
    display: 'flex',
    width: '100%',
    // zIndex:10,
    backgroundColor: colors.primaryHover,
    height: 2

  },
  about: {
    fontFamily: 'interRegular',
    fontSize: fontSize.caption.fontSize,
    lineHeight: fontSize.caption.lineHeight,
    marginBottom: 25,
    color: 'black',
    textAlign: 'center',
    marginTop: 15,

  },
  bottomContainers: {

    marginTop: 15,
    marginHorizontal: 35,
    display: 'flex',



  },
  bottomContainer: {
    borderRadius: 10,
    width: '100%',
    borderWidth: 0.5,
    borderColor: colors.borderColor,
    backgroundColor: colors.primaryHover,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 8,
    marginTop: 15,

  },
  profileText: {
    marginTop: 5,
    fontFamily: 'interRegular',
    fontSize: fontSize.bodySmall.fontSize,
    lineHeight: fontSize.bodySmall.lineHeight,

    color: 'white',
  },

});
const BottomContainer = ({ style=undefined as any,IconPage1 = Feather as any, IconPage2 = Feather as any, iconName1 = '' as any, iconName2 = '' as any, text1 = '', text2 = '' }) => {

  return (
    <View style={{...styles.bottomContainer,...style}}>

      <IconPage1 name={iconName1} size={24} color={style?colors.primaryHover:"white"} />

      <Text style={{ ...styles.profileText, ...{ marginBottom: 8, color:style?"black":"white"} }}>{text1}</Text>
      <View style={{ ...styles.lineDivider, ...{ backgroundColor: colors.primaryInactive, marginBottom: 8, } }}></View>
      <IconPage2 name={iconName2} size={24} color={style?colors.primaryHover:"white"} />
      <Text style={{...styles.profileText,...{color:style?"black":"white"}}}>{text2}</Text>
    </View>
  )
}