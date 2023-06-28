import React from 'react'
import { View, StyleSheet, Text, SafeAreaView } from 'react-native'
import { HeaderProfileMenu, HeaderWithBackMenu } from '../../components/header/HeaderMenu'
import ProfileImage from '../../components/ProfileImage'
import CustomPageCointainer from '../../components/customComponnents/CustomPageContainer'
import fontSize from '../../constants/fontSize'
import colors from '../../constants/colors'
import CustomHeader from '../../components/customComponnents/CustomHeader'
import CustomInputText from '../../components/customComponnents/CustomInputText'
import SectionList from './SectionList'
import AsigningList from './AsigningList'

export default function AsigningRep({navigation}) {
    return (
        <CustomPageCointainer edgeTop={'top'} style={styles.container}>
            <HeaderWithBackMenu headerTitleStyle={{ fontFamily: 'bold', fontSize: fontSize.header3.fontSize, color: colors.backgroundWhite }} headerTitle='Profile' navigation={navigation} />
           <CustomHeader style={{ ...styles.headerTitle, ...{} }} label='Faculty of Science ' />
            <CustomInputText editable={false}  label='Faculty representative'/>
            <CustomInputText editable={false}  label='Faculty Dean'/>
          
              <AsigningList  navigation={navigation} />
        
          
        </CustomPageCointainer>
    )
}
const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        display: 'flex',
        


    },
    headerTitle: {
        marginTop: 60,
        fontFamily: 'bold',
        fontSize: fontSize.title.fontSize,
        lineHeight: fontSize.title.lineHeight,
        color: colors.textColor,

    },

})