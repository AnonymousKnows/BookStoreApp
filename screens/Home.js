import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image
} from 'react-native';

import {COLORS, FONTS, SIZES, icons, images} from '../constants';

const Home = () => {

    const profileData = {
        name: "Username",
        point: 200
    }

        const [profile, setProfile] = React.useState(profileData);

        function renderHeader(profile){
            return(
              <view style={{ flex:1, flexDirection: 'row', paddingHorizontal: SIZES.padding, alignItems: 'center' }}>     
                {/*Greetings */}
                <view style={{ flex: 1 }}>
                    <view style={{ marginRight: SIZES.padding}}>
                        <text style={{ ...FONTS.h3, color: COLORS.white}}>Good Morning</text>
                        <text style={{ ...FONTS.h2, color: COLORS.white}}>{profile.name}</text>
                    </view>
                </view>
                {/* POINTS */}
                        <TouchableOpacity 
                                            Style={{
                                                backgroundColor: COLORS.primary,
                                                height: 40,
                                                paddingLeft: 3,
                                                paddingRight: SIZES.radius,
                                                borderRadius: 20
                                            }} 
                                            onPress={() => {console.log("Point") }}
                                            >
                                                <View style={{ flex : 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                                        <view style={{ width:30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 25, backgroundColor: 'rgba(0,0,0,0.5)'}}>
                                                                    <Image
                                                                            source={icons.plus_icon}
                                                                            resizeMode='contain'
                                                                            style={{
                                                                                width: 20,
                                                                                height: 20
                                                                            }}/>
                                                        </view>
                                                        <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.body3 }}>{profile.point} point</Text>
                                               </View>
                        </TouchableOpacity>
              </view>
            )
        }

        function renderButtonSection(){
            return(
                
            )
        }

    return(
            <SafeAreaView style={{ flex: 1, backgroundColor:  COLORS.black}}>
                    {/* Header Section */}
                    <view style={{ height: 200}}>
                        {renderHeader(profile)}
                    </view>

                    {/* Body Section */}
            </SafeAreaView>
    )
}

export default BookDetail;