import React from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import useAuth from '../hooks/useAuth';
import { useFonts } from 'expo-font';

const HomeHeader = ({ bgcolor, description }) => {

  const { user } = useAuth();

  return (
    <View style={{
        backgroundColor: bgcolor,
        padding: 14
    }}>
        <View style={{
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Image 
                source={require('../assets/logos/logo2.png')}
                resizeMode="contain"
                className="w-24 h-12"
            />
        </View>

        <View style={{ marginVertical: 10 }}>
            
            <Text style={{ fontFamily: "InterRegular", fontSize: 22, color: "#FFF" }}>
                Hello, {user.displayName} 👋 
            </Text>

            <Text style={{ fontFamily: "InterBold", fontSize: 16, color: "#FFF", marginTop: 4 }}>
                { description ? description : "Have a great session!"}
                {/* estatico */}
            </Text>
        </View>

        { /* buscador SEARCHER */ }
        {/*<View style={{ marginTop: SIZES.font }}>
            <View style={{ 
                width: "100%",
                borderRadius: SIZES.font,
                backgroundColor: COLORS.gray,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: SIZES.font,
                paddingVertical: SIZES.small - 2
            }}>
                <Image 
                    source={assets.search}
                    resizeMode="contain"
                    style={{ width: 20, height: 20, marginRight: SIZES.base }}
                />
                <TextInput
                    placeholder="Search NFTs"
                    style={{ flex: 1 }}
                    onChangeText={onSearch}
                />
            </View>

        </View>*/}
    </View>
    )
}

export default HomeHeader
