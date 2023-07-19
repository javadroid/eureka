import React, { useEffect, useRef, useState } from 'react';
import { View, Text, PanResponder, Animated, useWindowDimensions, Pressable } from 'react-native';


export const DrawerComponent = ({zIndex, setzIndex}) => {
    const drawerRef = useRef(null);
    const pan = useRef(new Animated.ValueXY()).current;
    const { width } = useWindowDimensions();
    const threshold = 30; // Position threshold to open/close the drawer
    const boxWidth = useRef(new Animated.Value(0)).current;
    // const [zIndex, setzIndex] = useState(0)

    useEffect(() => {
        if(!zIndex) {
            Animated.spring(boxWidth, {
                toValue:0,
                useNativeDriver: false,
            }).start();
        }else {
            Animated.spring(boxWidth, {
                toValue:width,
                useNativeDriver: false,
            }).start();
        }
        
    }, [zIndex])
    
    // const panResponder2 = PanResponder.create({
    //     onMoveShouldSetPanResponder: () => true,
    //     onPanResponderMove: (evt, gestureState) => {
          
    //          // console.log(gestureState.dx)
    //             boxWidth.setValue(boxWidth._value -  gestureState.dx/10);
    //     },
    //     onPanResponderRelease: (_, gesture) => {
    //         if (gesture.dx < -threshold) {
    //        // console.log('first')
             
    //         } else{
    //          // console.log('second')
    //             Animated.spring(boxWidth, {
    //                 toValue: 5,
    //                 useNativeDriver: false,
    //             }).start();
    //         }
    //     },
       
    // });
    const active={zIndex:1, width:'100%',height:'100%', flex: 1 ,position:'absolute'}
    const inactive={zIndex:1,   bottom: 0,right: 0,
     backgroundColor: 'red', position:'absolute'}
  
    return (
        <View style={zIndex?active:inactive}>
            <Pressable onPress={() => {
                setzIndex(false)
               
            }}
                style={{ flex: 1, backgroundColor:'transparent' }}
             
            >
                {/* Your main content */}
            </Pressable>
            <Animated.View
                style={{
                    width: boxWidth,
                    height: 62,
                    bottom: 0,
                    right: 0,
                    marginVertical:10,
                    maxWidth: width,
                    minWidth: 5,
                    zIndex: 1,
                    justifyContent: 'center',
                    position: 'absolute',
                    backgroundColor: 'blue',
                }}
                
            >

                <Text>dsaf</Text>
            </Animated.View>
        </View>


    );
};
