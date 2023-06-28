import { View, Text, StyleSheet, ImageBackground, useWindowDimensions, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import CustomPageCointainer from '../components/customComponnents/CustomPageContainer'
import { HeaderMenu, HeaderProfileMenu, HeaderWithBackMenu } from '../components/header/HeaderMenu'
import colors from '../constants/colors';
import fontSize from '../constants/fontSize';
import { download } from '../../assets/image/ImagesIndex';
import RenderHtml from 'react-native-render-html'; 

export default function NewsPage({ navigation }) {
  const { width, height } = useWindowDimensions();
  const scrollViewRef = useRef(null);
  const [descHTML, setDescHTML] = useState(`
  Eid Mubarak
  Hi Emmanuel, 
  
  Here's us wishing you joy, love, and blessings this Eid. 
  
  We hope you have fun and share happiness with your family this season.
  Happy Eid El Kabir!
  
  With ❤️,
  From Bella & The Entire Geegpay Team1
  
Eid Mubarak
Hi Emmanuel, 

Here's us wishing you joy, love, and blessings this Eid. 

We hope you have fun and share happiness with your family this season.
Happy Eid El Kabir!

With ❤️,
From Bella & The Entire Geegpay Team

Eid Mubarak
Hi Emmanuel, 
Eid Mubarak
Hi Emmanuel, 

Here's us wishing you joy, love, and blessings this Eid. 

We hope you have fun and share happiness with your family this season.
Happy Eid El Kabir!

With ❤️,
From Bella & The Entire Geegpay Team
Eid Mubarak
Hi Emmanuel, 

Here's us wishing you joy, love, and blessings this Eid. 

We hope you have fun and share happiness with your family this season.
Happy Eid El Kabir!

With ❤️,
From Bella & The Entire Geegpay Team
Eid Mubarak
Hi Emmanuel, 

Here's us wishing you joy, love, and blessings this Eid. 

We hope you have fun and share happiness with your family this season.
Happy Eid El Kabir!

With ❤️,
From Bella & The Entire Geegpay Team
Eid Mubarak
Hi Emmanuel, 

Here's us wishing you joy, love, and blessings this Eid. 

We hope you have fun and share happiness with your family this season.
Happy Eid El Kabir!

Eid Mubarak
Hi Emmanuel, 

Here's us wishing you joy, love, and blessings this Eid. 

We hope you have fun and share happiness with your family this season.
Happy Eid El Kabir!

With ❤️,
From Bella & The Entire Geegpay Team
Eid Mubarak
Hi Emmanuel, 

Here's us wishing you joy, love, and blessings this Eid. 

We hope you have fun and share happiness with your family this season.
Happy Eid El Kabir!

With ❤️,
From Bella & The Entire Geegpay Team
Eid Mubarak
Hi Emmanuel, 

Here's us wishing you joy, love, and blessings this Eid. 

We hope you have fun and share happiness with your family this season.
Happy Eid El Kabir!

With ❤️,
From Bella & The Entire Geegpay Team
Eid Mubarak
Hi Emmanuel, 

Here's us wishing you joy, love, and blessings this Eid. 

We hope you have fun and share happiness with your family this season.
Happy Eid El Kabir!

With ❤️,
From Bella & The Entire Geegpay Team
Eid Mubarak
Hi Emmanuel, 

Here's us wishing you joy, love, and blessings this Eid. 

We hope you have fun and share happiness with your family this season.
Happy Eid El Kabir!

With ❤️,
From Bella & The Entire Geegpay Team
With ❤️,
From Bella & The Entire Geegpay Team
From Bella & The Entire Geegpay Team
From Bella & The Entire Geegpay Team

Here's us wishing you joy, love, and blessings this Eid. 

We hope you have fun and share happiness with your family this season.
Happy Eid El Kabir!

With ❤️, Hi Emmanuel, 
  
Here's us wishing you joy, love, and blessings this Eid. 

We hope you have fun and share happiness with your family this season.
Happy Eid El Kabir!

With ❤️,
From Bella & The Entire Geegpay Team1

Eid Mubarak
Hi Emmanuel, 

Here's us wishing you joy, love, and blessings this Eid. 

We hope you have fun and share happiness with your family this season.
Happy Eid El Kabir!

With ❤️,
From Bella & The Entire Geegpay Team

Eid Mubarak
Hi Emmanuel, 
Eid Mubarak
Hi Emmanuel, 

Here's us wishing you joy, love, and blessings this Eid. 

We hope you have fun and share happiness with your family this season.
Happy Eid El Kabir!

With ❤️,
From Bella & The Entire Geegpay Team
Eid Mubarak
Hi Emmanuel, 

Here's us wishing you joy, love, and blessings this Eid. 

We hope you have fun and share happiness with your family this season.
Happy Eid El Kabir!

With ❤️,
From Bella & The Entire Geegpay Team
Eid Mubarak
Hi Emmanuel, 

Here's us wishing you joy, love, and blessings this Eid. 

We hope you have fun and share happiness with your family this season.
Happy Eid El Kabir!

With ❤️,
From Bella & The Entire Geegpay Team
Eid Mubarak
Hi Emmanuel, 

Here's us wishing you joy, love, and blessings this Eid. 

We hope you have fun and share happiness with your family this season.
Happy Eid El Kabir!

Eid Mubarak
Hi Emmanuel, 

Here's us wishing you joy, love, and blessings this Eid. 

We hope you have fun and share happiness with your family this season.
Happy Eid El Kabir!

With ❤️,
From Bella & The Entire Geegpay Team
Eid Mubarak
Hi Emmanuel, 

Here's us wishing you joy, love, and blessings this Eid. 

We hope you have fun and share happiness with your family this season.
Happy Eid El Kabir!

With ❤️,
From Bella & The Entire Geegpay Team
Eid Mubarak
Hi Emmanuel, 

Here's us wishing you joy, love, and blessings this Eid. 

We hope you have fun and share happiness with your family this season.
Happy Eid El Kabir!

With ❤️,
From Bella & The Entire Geegpay Team
Eid Mubarak
Hi Emmanuel, 

Here's us wishing you joy, love, and blessings this Eid. 

We hope you have fun and share happiness with your family this season.
Happy Eid El Kabir!

With ❤️,
From Bella & The Entire Geegpay Team
Eid Mubarak
Hi Emmanuel, 

Here's us wishing you joy, love, and blessings this Eid. 

We hope you have fun and share happiness with your family this season.
Happy Eid El Kabir!

With ❤️,
From Bella & The Entire Geegpay Team
With ❤️,
From Bella & The Entire Geegpay Team
From Bella & The Entire Geegpay Team
From Bella & The Entire Geegpay Team

Here's us wishing you joy, love, and blessings this Eid. 

We hope you have fun and share happiness with your family this season.
Happy Eid El Kabir!

With ❤️,
From Bella & The Entire Geegpay Team`);
let [backgroundImageHeight, setBackgroundImageHeight] = useState<number>(height*0.5);
const handleScroll = (event) => {
  const { y } = event.nativeEvent.contentOffset;
  // const scrollThreshold = 200; // Set your desired scroll threshold here
  // console.log(y, hideTrending)
  console.log(backgroundImageHeight," scroll " + y)
  if (y >= 200 &&y <=600) {
   
    setBackgroundImageHeight(height-(y));
    backgroundImageHeight=height-y
    console.log(backgroundImageHeight)
  } else  {
    // setBackgroundImageHeight(height)
  }
};
  return (
    <CustomPageCointainer style={styles.container}>
      <HeaderMenu backButton={false} headerTitle='' navigation={navigation} />
      <ImageBackground source={download} style={{ ...styles.imageContainer, ...{ height: backgroundImageHeight , maxHeight: height * 0.5 } }}>


        <Text style={styles.category}>Sport</Text>

        <Text style={styles.title}>dzs</Text>
        <Text style={styles.date}>{new Date().toDateString()}</Text>
      </ImageBackground>

      <ScrollView showsVerticalScrollIndicator={false}  ref={scrollViewRef} onScroll={handleScroll} scrollEventThrottle={10} style={styles.news}>
        <View style={{marginTop:20, flexShrink:1}}>
           <RenderHtml
    
          contentWidth={width}
          source={{
            html: descHTML
          }}
          ignoredDomTags={['video']}
        />
        </View>
       
        
      </ScrollView>

    </CustomPageCointainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: -20

  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  category: {
    padding: 15,
    backgroundColor: colors.primaryColor,
    textAlign: 'center',
    borderRadius: 24,
    width: 100,
    fontFamily: 'interRegular',
    fontSize: fontSize.caption.fontSize,
    lineHeight: fontSize.caption.lineHeight,
    color: colors.backgroundWhite,
    marginBottom: 10,
  },
  title: {
    width: "70%",
    fontFamily: 'interRegular',
    fontSize: fontSize.body.fontSize,
    lineHeight: fontSize.body.lineHeight,
    color: colors.backgroundWhite,
    marginBottom: 10,
  },
  date: {

    fontFamily: 'interRegular',
    fontSize: fontSize.caption.fontSize,
    lineHeight: fontSize.caption.lineHeight,
    color: colors.backgroundWhite,
    marginBottom: 80,
  },
  news: {
    flex: 1,
    marginTop: -60,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 30,
    

  },
})

