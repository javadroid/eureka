import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { userImage } from '../../../assets/image/ImagesIndex';
import AsyncStorage from '@react-native-async-storage/async-storage';
import setlocalRedux from '../../utils/localRedux';
import { setIsAuthenticated, setUserData, setUserToken } from '../../utils/store/userSlice';
export function CustomSideMenu(props) {

    const paperTheme = useTheme();
    const userData = useSelector((state: any) => state.user.userData)
    // 
    const dispatch=useDispatch()
    const signOut=()=>{

    }
    const toggleTheme=()=>{
      
    }
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: userData?.profileImage||userImage
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>{userData?.username}</Title>
                                <Caption style={styles.caption}>{userData?.matricNo}</Caption>
                            </View>
                        </View>

                        <View style={{...styles.row,marginTop:10,marginBottom:-10}}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>Administrator</Paragraph>
                            </View>
                          
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Notification</Caption>
                            </View>
                            {/* <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>New Message</Caption>
                            </View> */}
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                              <Ionicons name="home-outline" size={24} color={color}/>
                            )}
                            label="Home"
                            onPress={() => {}}                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                            
                              <MaterialCommunityIcons name="timetable" size={size} color={color}/>
                            )}
                            label="Timetable"
                            onPress={() => {props.navigation.navigate('TimetableFlow')}}                        />
                          {/* <DrawerItem 
                            icon={({color, size}) => (
                      
                              <AntDesign name="addusergroup" size={size} color={color}/>
                            )}
                            label="Register Students"
                            onPress={() => {}}                        />
                       
                        <DrawerItem 
                            icon={({color, size}) => (
                              <Entypo name="add-to-list" size={size} color={color}/>
                            )}
                            label="Add Course"
                            onPress={() => {}}                        /> */}
                         <DrawerItem 
                            icon={({color, size}) => (
                      
                              <MaterialCommunityIcons name="book-edit-outline"  size={size} color={color}/>
                            )}
                            label="Add Pass Question"
                            onPress={() => {}}                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                              <MaterialCommunityIcons name="notebook-plus-outline"   size={size} color={color}/>
                            )}
                            label="Add Lecture Note"
                            onPress={() => {}}                        />
                      
                        <DrawerItem 
                            icon={({color, size}) => (
                              <Entypo name="info" size={size} color={color}/>
                            )}
                            label="About us"
                            onPress={() => {}}                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {}} >
                        <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section  style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                      <Ionicons name="exit-outline" size={size} color={color}/>
                    )}
                    label="Sign Out"
                    onPress={() => {
                      AsyncStorage.clear()
                      setlocalRedux({key:"isAuthenticated",data:false,dispatch,method:setIsAuthenticated})    
                      dispatch(setUserToken({userToken: null }))
                      dispatch(setIsAuthenticated({isAuthenticated: null}))
                      dispatch(setUserData({userData: null }))
                    }}   
                                   />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
        
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });