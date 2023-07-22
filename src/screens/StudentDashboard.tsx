import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Alert, Animated, FlatList, Image, ImageBackground, LayoutAnimation, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import CustomPageCointainer from '../components/customComponnents/CustomPageContainer';
import { HeaderMenu } from '../components/header/HeaderMenu';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../components/customComponnents/CustomHeader';
import colors from '../constants/colors';
import fontSize from '../constants/fontSize';
import { MaterialIcons } from '@expo/vector-icons';
import TrendingList from '../components/flat/TrendingList';
import NewsList from '../components/flat/NewsList';
import { addStudent, findById, profile } from '../utils/service/ApiService';
import { AxiosError } from 'axios';
import { async } from 'validate.js';
import { useDispatch, useSelector } from 'react-redux';
import setlocalRedux from '../utils/localRedux';
import { setIsAuthenticated, setUserData } from '../utils/store/userSlice';
import { download } from '../../assets/image/ImagesIndex';
import { checkConnection } from '../utils/store/internetConnectionSlice';
import InternetStatus from '../loaders/InternetStatus';

export default function StudentDashboard({ navigation }) {
  const userToken= useSelector((state:any)=> state.user.userToken)
  const isAuthenticated= useSelector((state:any)=> state.user.isAuthenticated)
  const userData = useSelector((state: any) => state.user.userData)
  const dispatch = useDispatch()
  const { width, height } = useWindowDimensions();
  const [greeter, setGreeter] = useState('')
  const [timeUpdate, setTimeUpdate] = useState('')
  const [timeSecUpdate, setTimeSecUpdate] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  let [userDataState, setuserDataState] = useState(userData)
const [loading, setLoading] = useState(true)
  

 useEffect(() => {
    HandleTime()
   
  }, [loading ])

  const HandleTime = () => {

    setInterval(() => {
      let now = new Date();
      let hour = now.getHours();
    
      let time = now.toLocaleTimeString()
      let HM = time.split(':')[0] + ':' + time.split(':')[1]
      let AMPM = ':' + time.split(':')[2].substring(0, 2) + ' ' + time.split(':')[2].substring(3, 5)
      setTimeUpdate(HM)
      setTimeSecUpdate(AMPM)
      if (hour >= 5 && hour < 12) {
        setGreeter("Good morning 🌅");
      } else if (hour >= 12 && hour < 17) {
        setGreeter("Good afternoon 🏌️‍♂️");
      } else if (hour >= 17 && hour < 21) {
        setGreeter("Good evening 🌃");
      } else {
        setGreeter("Good night 💤");
      }
    }, 1000)
  }

  const scrollViewRef = useRef(null);
  const [hideTrending, setHideTrending] = useState(true);
  const animation = useRef(new Animated.Value(hideTrending ? 1 : 0)).current;
  const handleScroll = (event) => {
    const { y } = event.nativeEvent.contentOffset;
    if (y >= 300) {
      setHideTrending(false);
    } else {
      setHideTrending(true)
    }
  };

  const viewStyle = {
    height: hideTrending ? null : 0,
    opacity: hideTrending ? 1 : 0,
    overflow: 'hidden',
    duration: 3000, 
  };
  return (
    <CustomPageCointainer edgeTop={'top'} style={styles.container}>
      <HeaderMenu  navigation={navigation} />

      <View style={styles.timeTableContainer}>

        <View style={{ flex: 1, }}>
          <Text style={styles.today}>{new Date().toDateString()}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
            <Text style={styles.todayTime}>{timeUpdate}</Text>
            <Text style={{}}>{timeSecUpdate}</Text>
          </View>

          <Text style={styles.todaygreeter}>{greeter}</Text>
          <View style={{ height: 50, justifyContent: 'flex-end' }}>
            <Text style={{ color: colors.textColor, textAlign: 'center', alignSelf: 'flex-end' }} >Learning is a treasure that will follow its owner everywhere.</Text>
          </View>

        </View>

        <View style={{ flex: 1, paddingLeft: 20, justifyContent: 'flex-end', paddingRight: 10, }}>
          <Text style={styles.currentTaskName}>{'Introduction to computer science'}</Text>
          <Text style={styles.currentTaskCode}>{'CSC 101'}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.currentTaskVenue}>{"AUD 2"}</Text>
            <Text style={styles.currentTaskTime}>{'9:10pm'}</Text>
          </View>
          <View style={styles.lineDivider}></View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '100%', flexShrink: 1, }}>
            <MaterialIcons name="navigate-next" size={40} color={colors.primaryHover} />
            <MaterialIcons style={{ marginLeft: -20 }} name="navigate-next" size={30} color={colors.primaryHover} />
            <MaterialIcons style={{ marginLeft: -14 }} name="navigate-next" size={20} color={colors.primaryHover} />

            <View style={{ flexShrink: 1 }}>
              {/* <Text style={styles.nextTaskName}>{'Introduction to computer science'}</Text> */}
              <Text style={styles.nextTaskCode}>{'CSC 101'}</Text>
              <View style={{ flexDirection: 'row', marginTop: 5, }}>
                <Text style={styles.nextTaskVenue}>{"AUD 2"}</Text>
                <Text style={styles.nextTaskTime}>{'9:10pm'}</Text>
              </View>

            </View>
          </View>
        </View>

      </View>

      <CustomHeader 
      style={{ ...styles.headerTitle, ...{ marginTop: 10, } }} 
      label='Trending Now' 
      />

      <View style={viewStyle}>
        <FlatList 
        data={[{ img: download, title: "Potter explains what $89m Mudryk will bring to Chelsea &..." }, {}]} 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        renderItem={(item) => TrendingList(width, height, item,navigation,'NewsPage',)} 
        />
      </View>

      <CustomHeader 
      style={{ ...styles.headerTitle, ...{ marginTop: 10, } }} 
      label="New's Update" 
      />

      <View style={styles.newsContainer}>
        <FlatList  
        ref={scrollViewRef} 
        onScroll={handleScroll} 
        scrollEventThrottle={16} 
        data={[
          { img: download, category: "Sport", title: "Potter explains what $89m Mudryk will bring to Chelsea &...", date: new Date().toDateString() },
          { img: download, category: "Sport", title: "Potter explains what $89m Mudryk will bring to Chelsea &...", date: new Date().toDateString() },
          { img: download, category: "Sport", title: "Potter explains what $89m Mudryk will bring to Chelsea &...", date: new Date().toDateString() },
          { img: download, category: "Sport", title: "Potter explains what $89m Mudryk will bring to Chelsea &...", date: new Date().toDateString() },
          { img: download, category: "Sport", title: "Potter explains what $89m Mudryk will bring to Chelsea &...", date: new Date().toDateString() }
        ]} 
        showsVerticalScrollIndicator={false} 
        renderItem={(item) => {
          return(
            <NewsList 
            itemData={item}
            navigation={navigation} 
            navigate={'NewsPage'}
            />
         )
         }}/>

      </View>  


    </CustomPageCointainer>
  );
}


const styles = StyleSheet.create({
  lineDivider: {
    margin: 5,
    width: '80%',
    alignSelf: 'center',
    height: 2,
    backgroundColor: colors.primaryHover
  },
  currentTaskName: {
    fontFamily: 'regular',
    fontSize: fontSize.bodySmall.fontSize,
    lineHeight: fontSize.bodySmall.lineHeight,
    color: colors.textColor
  },
  currentTaskCode: {
    fontFamily: 'bold',
    fontSize: fontSize.bodyLarge.fontSize,
    lineHeight: fontSize.bodyLarge.lineHeight,

  },
  currentTaskVenue: {
    fontFamily: 'regular',
    fontSize: fontSize.bodySmall.fontSize,
    lineHeight: fontSize.bodySmall.lineHeight,
    color: colors.textColor
  },
  currentTaskTime: {
    alignSelf: 'flex-end',
    fontFamily: 'regular',
    fontSize: fontSize.bodySmall.fontSize,
    lineHeight: fontSize.bodySmall.lineHeight,
    color: colors.textColor
  },

  nextTaskCode: {
    fontFamily: 'bold',
    fontSize: fontSize.bodySmall.fontSize,
    lineHeight: fontSize.bodySmall.lineHeight,
    color: colors.textColor
  },
  nextTaskVenue: {
    fontFamily: 'regular',
    fontSize: 10,
    lineHeight: fontSize.caption.lineHeight,
    color: colors.textTitle
  },
  nextTaskTime: {
    marginLeft: 20,
    alignSelf: 'flex-end',
    fontFamily: 'regular',
    fontSize: 10,
    lineHeight: fontSize.caption.lineHeight,
    color: colors.textTitle
  },

  today: {
    fontFamily: 'regular',
    fontSize: fontSize.bodyLarge.fontSize,
    lineHeight: fontSize.bodyLarge.lineHeight,
    marginBottom: 5,
    color: colors.textColor
    // color:colors.,

  },
  todayTime: {
    fontFamily: 'bold',
    fontSize: 40,


  },
  todaygreeter: {
    textAlign: 'justify',
    alignSelf: 'baseline',
    fontFamily: 'regular',
    fontSize: fontSize.caption.fontSize,
    lineHeight: fontSize.caption.lineHeight,
    marginBottom: 9,
    // marginTop: 10,
    color: colors.textColor
    // color:colors.,
  },
  container: {
    flex: 1,
    paddingHorizontal: 0,
  },
  headerTitle: {
    marginTop: 60,
    fontFamily: 'bold',
    fontSize: fontSize.title.fontSize,
    lineHeight: fontSize.title.lineHeight,
    color: colors.textColor,
    marginBottom: 10,
    paddingHorizontal: 20,
  },

  timeTableContainer: {
    flexDirection: 'row',
    marginTop: 40,
    padding: 20,
    borderBottomWidth: 0.51,
    borderRadius: 20,
    borderBottomColor: colors.background

    // backgroundColor:'red'
  },
  timeTableCard: {
    backgroundColor: 'red',
    borderRadius: 20,
    marginHorizontal: 15,

  },
  trendingContainer: {
    alignItems: 'center',
    marginVertical: 40,
    flexDirection: 'row',
  },
  trendingCard: {
    padding: 15,
    flexDirection: 'column',
    elevation: 5,
    shadowColor: colors.primaryColor,
    marginBottom: 10,
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
    marginTop: 10,
  },
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