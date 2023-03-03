import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Button, Input, Image } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context'
import useAuth from '../hooks/useAuth'
import { useNavigation } from '@react-navigation/core'
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from '../assets/constants/theme';


import Spacing from "../assets/constants/Spacing";
import FontSize from "../assets/constants/FontSize";
import Colors from "../assets/constants/Colors";

import GoogleSVG from '../assets/misc/google.jsx'

import CustomTextInput from "../components/CustomTextInput";



const RegisterScreen = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const [focused_email, setFocused_email] = useState(false);
    const [focused_pwd, setFocused_pwd] = useState(false);
    const [focused_name, setFocused_name] = useState(false);
    const [focused_img, setFocused_img] = useState(false);


    const navigation = useNavigation();
    const { registerUser, loading } = useAuth();
    
    const signIn = () => {
        navigation.navigate('Login');
    }

    const register = () => {
        registerUser(name, email, password, imageUrl);
    }

    return (
    
        <SafeAreaView>
        <View
            style={{
            padding: Spacing * 2,
            }}
        >
            <View
                style={{
                    alignItems: "center",
                }}
            >
                <TouchableOpacity 
                    onPress={() => navigation.goBack()} 
                    className="p-2 absolute left-0 mt-7"
                >
                    <Ionicons name="chevron-back-circle" size={34} color="black" />
                </TouchableOpacity>

                <Text
                    style={{
                    fontSize: FontSize.xLarge,
                    color: Colors.primary,
                    fontFamily: "PoppinsBold",
                    marginVertical: Spacing * 3,
                    }}
                >
                    Register
                </Text>
                <Text
                    style={{
                    fontFamily: "PoppinsSemiBold",
                    fontSize: FontSize.large,
                    maxWidth: "60%",
                    textAlign: "center",
                    }}
                >
                    Let´s start your journey with us!
                </Text>
            </View>
            <View
            style={{
                marginVertical: Spacing * 3,
            }}
            >

            {/* NAME */}
            <TextInput
                onFocus={() => setFocused_name(true)}
                onBlur={() => setFocused_name(false)}
                placeholderTextColor={Colors.darkText}
                style={[
                    {
                    fontFamily: "PoppinsRegular",
                    fontSize: FontSize.small,
                    padding: Spacing * 2,
                    backgroundColor: Colors.lightPrimary,
                    borderRadius: Spacing,
                    marginVertical: Spacing,
                    },
                    focused_name && {
                    borderWidth: 3,
                    borderColor: Colors.primary,
                    shadowOffset: { width: 4, height: Spacing },
                    shadowColor: Colors.primary,
                    shadowOpacity: 0.2,
                    shadowRadius: Spacing,
                    },
                ]}
                onChangeText={(text) => setName(text)} 
                value={name}
                type="text"
                placeholder="Full Name"
            />

            {/* EMAIL */}
            <TextInput
                onFocus={() => setFocused_email(true)}
                onBlur={() => setFocused_email(false)}
                placeholderTextColor={Colors.darkText}
                style={[
                    {
                    fontFamily: "PoppinsRegular",
                    fontSize: FontSize.small,
                    padding: Spacing * 2,
                    backgroundColor: Colors.lightPrimary,
                    borderRadius: Spacing,
                    marginVertical: Spacing,
                    },
                    focused_email && {
                    borderWidth: 3,
                    borderColor: Colors.primary,
                    shadowOffset: { width: 4, height: Spacing },
                    shadowColor: Colors.primary,
                    shadowOpacity: 0.2,
                    shadowRadius: Spacing,
                    },
                ]}
                onChangeText={text => setEmail(text)}
                value={email}
                type="email"
                placeholder="Email"
            />

            {/* CONTRASEÑA */}
            <TextInput
                onFocus={() => setFocused_pwd(true)}
                onBlur={() => setFocused_pwd(false)}
                placeholderTextColor={Colors.darkText}
                style={[
                    {
                    fontFamily: "PoppinsRegular",
                    fontSize: FontSize.small,
                    padding: Spacing * 2,
                    backgroundColor: Colors.lightPrimary,
                    borderRadius: Spacing,
                    marginVertical: Spacing,
                    },
                    focused_pwd && {
                    borderWidth: 3,
                    borderColor: Colors.primary,
                    shadowOffset: { width: 4, height: Spacing },
                    shadowColor: Colors.primary,
                    shadowOpacity: 0.2,
                    shadowRadius: Spacing,
                    },
                ]}
                onChangeText={text => setPassword(text)}
                type="password"
                value={password}
                secureTextEntry={true}
                placeholder="Password"
            />

            {/* IMAGEN */}
            <TextInput
                onFocus={() => setFocused_img(true)}
                onBlur={() => setFocused_img(false)}
                placeholderTextColor={Colors.darkText}
                style={[
                    {
                    fontFamily: "PoppinsRegular",
                    fontSize: FontSize.small,
                    padding: Spacing * 2,
                    backgroundColor: Colors.lightPrimary,
                    borderRadius: Spacing,
                    marginVertical: Spacing,
                    },
                    focused_img && {
                    borderWidth: 3,
                    borderColor: Colors.primary,
                    shadowOffset: { width: 4, height: Spacing },
                    shadowColor: Colors.primary,
                    shadowOpacity: 0.2,
                    shadowRadius: Spacing,
                    },
                ]}
                onChangeText={(text) => setImageUrl(text)} 
                value={imageUrl}
                type="text"
                placeholder="Profile Picture URL (optional)"
            />

            </View>


            {/* BOTON REGISTER */}
            <TouchableOpacity
            style={{
                padding: Spacing * 2,
                backgroundColor: Colors.primary,
                marginTop: Spacing ,
                borderRadius: Spacing,
                shadowColor: Colors.primary,
                shadowOffset: {
                width: 0,
                height: Spacing,
                },
                shadowOpacity: 0.3,
                shadowRadius: Spacing,
            }}
            onPress={register}
            >
            <Text
                style={{
                fontFamily: "PoppinsBold",
                color: Colors.onPrimary,
                textAlign: "center",
                fontSize: FontSize.large,
                }}
            >
                Register
            </Text>
            </TouchableOpacity>

        </View>
        </SafeAreaView>
    )
}

export default RegisterScreen