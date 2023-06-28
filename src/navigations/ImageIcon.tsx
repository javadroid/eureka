import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Svg, { G, Mask, Path, Rect, SvgUri } from 'react-native-svg';
import colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';

export  function ImageIconPQ({  }) {
  const navigation=  useNavigation()
    return (
        <View onPress={()=>navigation.navigate('YearLists')} style={styles.container}>

            <Svg
                width={25}
                height={24}
                viewBox="0 0 25 24" fill="none"
            >

                <G id="Group 1143">
                    <Path id="Rectangle 4473" d="M16.3575 23.3555H4.07143C2.45493 23.3555 1.1445 22.0451 1.1445 20.4286V3.57143C1.1445 1.95493 2.45493 0.6445 4.07143 0.6445H13.6169C14.3812 0.6445 15.1153 0.943489 15.6621 1.47756L18.4026 4.15434C18.9665 4.70509 19.2844 5.45999 19.2844 6.24821V20.4286C19.2844 22.0451 17.974 23.3555 16.3575 23.3555Z" fill="#613EEA" stroke="#F5F5F5" stroke-width="1.289" />
                    <G id="Mask group">
                        <Mask id="mask0_947_3428" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="24">
                            <Path id="Rectangle 4479" d="M16.3575 23.7024H4.07143C2.26335 23.7024 0.797619 22.2366 0.797619 20.4286V3.57143C0.797619 1.76335 2.26335 0.297619 4.07143 0.297619H13.6169C14.4718 0.297619 15.2928 0.632042 15.9044 1.2294L18.645 3.90618C19.2757 4.52221 19.6313 5.36658 19.6313 6.24821V20.4286C19.6313 22.2366 18.1655 23.7024 16.3575 23.7024Z" fill="#F5F5F5" stroke="black" stroke-width="0.595238" />
                        </Mask>
                        <G mask="url(#mask0_947_3428)">
                            <Path id="Vector 403" d="M15.0723 4.44658V0.456891C15.0723 0.189322 15.3978 0.0576564 15.5838 0.250008L19.4417 4.2397C19.6243 4.42859 19.4905 4.7442 19.2277 4.7442H15.3699C15.2055 4.7442 15.0723 4.61095 15.0723 4.44658Z" stroke="#F5F5F5" stroke-width="0.892857" stroke-linecap="round" />
                        </G>
                    </G>
                    <Path id="Vector 401" d="M3.35742 3.9071H13.3576" stroke="#F5F5F5" stroke-linecap="round" />
                    <Path id="Vector 402" d="M6.78613 6.97668H13.072M6.78613 10.3255H14.2148M6.78613 13.6744H12.5005M6.78613 17.0232H13.072M6.78613 20.372H16.7863" stroke="#F5F5F5" stroke-linecap="round" />
                    <G id="Rectangle 4474">
                        <Mask id="path-6-inside-1_947_3428" fill="white">
                            <Rect x="3.35742" y="5.58142" width="2.28575" height="2.23256" rx="0.297619" />
                        </Mask>
                        <Rect x="3.35742" y="5.58142" width="2.28575" height="2.23256" rx="0.297619" stroke="#F5F5F5" stroke-width="1.6" mask="url(#path-6-inside-1_947_3428)" />
                    </G>
                    <G id="Rectangle 4475">
                        <Mask id="path-7-inside-2_947_3428" fill="white">
                            <Rect x="3.35742" y="8.93005" width="2.28575" height="2.23256" rx="0.297619" />
                        </Mask>
                        <Rect x="3.35742" y="8.93005" width="2.28575" height="2.23256" rx="0.297619" stroke="#F5F5F5" stroke-width="1.6" mask="url(#path-7-inside-2_947_3428)" />
                    </G>
                    <G id="Rectangle 4476">
                        <Mask id="path-8-inside-3_947_3428" fill="white">
                            <Rect x="3.35742" y="12.2791" width="2.28575" height="2.23256" rx="0.297619" />
                        </Mask>
                        <Rect x="3.35742" y="12.2791" width="2.28575" height="2.23256" rx="0.297619" stroke="#F5F5F5" stroke-width="1.6" mask="url(#path-8-inside-3_947_3428)" />
                    </G>
                    <G id="Rectangle 4477">
                        <Mask id="path-9-inside-4_947_3428" fill="white">
                            <Rect x="3.35742" y="15.6279" width="2.28575" height="2.23256" rx="0.297619" />
                        </Mask>
                        <Rect x="3.35742" y="15.6279" width="2.28575" height="2.23256" rx="0.297619" stroke="#F5F5F5" stroke-width="1.6" mask="url(#path-9-inside-4_947_3428)" />
                    </G>
                    <G id="Rectangle 4478">
                        <Mask id="path-10-inside-5_947_3428" fill="white">
                            <Rect x="3.35742" y="18.9767" width="2.28575" height="2.23256" rx="0.297619" />
                        </Mask>
                        <Rect x="3.35742" y="18.9767" width="2.28575" height="2.23256" rx="0.297619" stroke="#F5F5F5" stroke-width="1.6" mask="url(#path-10-inside-5_947_3428)" />
                    </G>
                    <G id="Group 1142">
                        <Path id="Ellipse 91" d="M23.9998 13.9536C23.9998 16.4406 21.9322 18.4768 19.3568 18.4768C16.7814 18.4768 14.7139 16.4406 14.7139 13.9536C14.7139 11.4665 16.7814 9.4303 19.3568 9.4303C21.9322 9.4303 23.9998 11.4665 23.9998 13.9536Z" fill="#613EEA" stroke="#F5F5F5" />
                        <Path id="?" d="M18.6458 15.2885V15.2599C18.6491 14.9571 18.6816 14.7161 18.7432 14.5369C18.8049 14.3577 18.8926 14.2126 19.0062 14.1016C19.1199 13.9906 19.2562 13.8884 19.4153 13.7948C19.5111 13.7377 19.5972 13.6703 19.6735 13.5927C19.7498 13.5134 19.8098 13.4222 19.8537 13.3191C19.8991 13.2161 19.9218 13.1019 19.9218 12.9766C19.9218 12.8212 19.8845 12.6865 19.8098 12.5723C19.7351 12.4581 19.6353 12.3701 19.5103 12.3083C19.3853 12.2465 19.2465 12.2155 19.0939 12.2155C18.9608 12.2155 18.8325 12.2425 18.7092 12.2964C18.5858 12.3503 18.4827 12.4351 18.3999 12.5509C18.3171 12.6666 18.2692 12.8181 18.2562 13.0052H17.6426C17.6556 12.7356 17.727 12.5049 17.8569 12.3131C17.9884 12.1212 18.1613 11.9745 18.3755 11.873C18.5915 11.7716 18.8309 11.7208 19.0939 11.7208C19.3796 11.7208 19.628 11.7763 19.839 11.8873C20.0517 11.9983 20.2157 12.1505 20.3309 12.344C20.4478 12.5374 20.5063 12.7578 20.5063 13.0052C20.5063 13.1796 20.4787 13.3374 20.4235 13.4785C20.3699 13.6196 20.292 13.7457 20.1897 13.8567C20.089 13.9677 19.9673 14.066 19.8244 14.1516C19.6816 14.2388 19.5671 14.3308 19.4811 14.4275C19.395 14.5226 19.3325 14.636 19.2936 14.7676C19.2546 14.8992 19.2335 15.0633 19.2303 15.2599V15.2885H18.6458ZM18.9575 16.6965C18.8374 16.6965 18.7343 16.6545 18.6483 16.5705C18.5622 16.4864 18.5192 16.3857 18.5192 16.2684C18.5192 16.1511 18.5622 16.0504 18.6483 15.9663C18.7343 15.8823 18.8374 15.8403 18.9575 15.8403C19.0777 15.8403 19.1808 15.8823 19.2668 15.9663C19.3528 16.0504 19.3959 16.1511 19.3959 16.2684C19.3959 16.3461 19.3756 16.4174 19.335 16.4825C19.296 16.5475 19.2433 16.5998 19.1767 16.6394C19.1118 16.6775 19.0387 16.6965 18.9575 16.6965Z" fill="#F5F5F5" />
                    </G>
                </G>
            </Svg>
        </View>

    )
}

export  function ImageIconHome({  }) {
    const navigation=  useNavigation()
      return (
       
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<G id="vuesax/linear/home-2">
<G id="vuesax/linear/home-2_2">
<G id="home-2">
<Path id="Vector" d="M9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992Z" stroke="#9DB2CE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path id="Vector_2" d="M12 17.99V14.99" stroke="#9DB2CE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</G>
</G>
</G>
</Svg>
        
  
      )
  }

  export  function ImageIconLectureNotes({  }) {
    const navigation=  useNavigation()
      return (
          
  
  <Svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M19.5353 0.878359C18.9727 0.315946 18.2098 0 17.4143 0C16.6188 0 15.8559 0.315946 15.2933 0.878359L13.6133 2.55836L5.70731 10.4644C5.57925 10.5924 5.48835 10.7527 5.44431 10.9284L4.44431 14.9284C4.40233 15.0959 4.40449 15.2715 4.45057 15.438C4.49665 15.6045 4.58507 15.7563 4.70723 15.8784C4.82939 16.0006 4.98112 16.089 5.14762 16.1351C5.31412 16.1812 5.48972 16.1833 5.65731 16.1414L9.65731 15.1414C9.83293 15.0973 9.9933 15.0064 10.1213 14.8784L17.9703 7.03036L19.7073 5.29236C20.2697 4.72978 20.5857 3.96685 20.5857 3.17136C20.5857 2.37587 20.2697 1.61294 19.7073 1.05036L19.5353 0.878359ZM16.7073 2.29236C16.8948 2.10489 17.1491 1.99957 17.4143 1.99957C17.6795 1.99957 17.9338 2.10489 18.1213 2.29236L18.2933 2.46436C18.4808 2.65189 18.5861 2.9062 18.5861 3.17136C18.5861 3.43652 18.4808 3.69083 18.2933 3.87836L17.2763 4.89536L15.7213 3.27836L16.7073 2.29236ZM14.3073 4.69236L15.8623 6.30936L8.90231 13.2684L6.78831 13.7974L7.31731 11.6824L14.3073 4.69236ZM2.41431 6.17136C2.41431 5.90614 2.51966 5.65179 2.7072 5.46425C2.89474 5.27672 3.14909 5.17136 3.41431 5.17136H8.41431C8.67952 5.17136 8.93388 5.066 9.12141 4.87847C9.30895 4.69093 9.41431 4.43658 9.41431 4.17136C9.41431 3.90614 9.30895 3.65179 9.12141 3.46425C8.93388 3.27672 8.67952 3.17136 8.41431 3.17136H3.41431C2.61866 3.17136 1.8556 3.48743 1.29299 4.05004C0.730377 4.61265 0.414307 5.37571 0.414307 6.17136V17.1714C0.414307 17.967 0.730377 18.7301 1.29299 19.2927C1.8556 19.8553 2.61866 20.1714 3.41431 20.1714H14.4143C15.21 20.1714 15.973 19.8553 16.5356 19.2927C17.0982 18.7301 17.4143 17.967 17.4143 17.1714V12.1714C17.4143 11.9061 17.309 11.6518 17.1214 11.4643C16.9339 11.2767 16.6795 11.1714 16.4143 11.1714C16.1491 11.1714 15.8947 11.2767 15.7072 11.4643C15.5197 11.6518 15.4143 11.9061 15.4143 12.1714V17.1714C15.4143 17.4366 15.309 17.6909 15.1214 17.8785C14.9339 18.066 14.6795 18.1714 14.4143 18.1714H3.41431C3.14909 18.1714 2.89474 18.066 2.7072 17.8785C2.51966 17.6909 2.41431 17.4366 2.41431 17.1714V6.17136Z" fill="#9DB2CE"/>
</Svg>

  
      )
  }

const styles = StyleSheet.create({
    container: {
        marginBottom: "50%",
        borderWidth: 5,
        borderRadius: 50,
        padding: 20,
        width: 84,
        height: 84,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.iconActive,
        borderColor: '#A9C0FF'

    },
    container1:{

    }
})

