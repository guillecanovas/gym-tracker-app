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



const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focused_email, setFocused_email] = useState(false);
  const [focused_pwd, setFocused_pwd] = useState(false);


  const navigation = useNavigation();
  const { signInUser , loading } = useAuth();
  
  const signIn = () => {
    signInUser(email,password);
  }

  const register = () => { 
    navigation.navigate('Register');
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
          <Text
            style={{
              fontSize: FontSize.xLarge,
              color: Colors.primary,
              fontFamily: "PoppinsBold",
              marginVertical: Spacing * 3,
            }}
          >
            Login
          </Text>
          <Text
            style={{
              fontFamily: "PoppinsSemiBold",
              fontSize: FontSize.large,
              maxWidth: "60%",
              textAlign: "center",
            }}
          >
            Welcome back you've been missed!
          </Text>
        </View>
        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
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

        </View>

        <TouchableOpacity
          onPress={() => alert("Not implemented yet")}
        >
          <Text
            style={{
              fontFamily: "PoppinsSemiBold",
              fontSize: FontSize.small,
              color: Colors.primary,
              alignSelf: "flex-end",
            }}
          >
            Forgot your password ?
          </Text>
        </TouchableOpacity>


        {/* BOTON SIGN IN */}
        <TouchableOpacity
          style={{
            padding: Spacing * 2,
            backgroundColor: Colors.primary,
            marginTop: Spacing * 3,
            borderRadius: Spacing,
            shadowColor: Colors.primary,
            shadowOffset: {
              width: 0,
              height: Spacing,
            },
            shadowOpacity: 0.3,
            shadowRadius: Spacing,
          }}
          onPress={signIn}
        >
          <Text
            style={{
              fontFamily: "PoppinsBold",
              color: Colors.onPrimary,
              textAlign: "center",
              fontSize: FontSize.large,
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>

        {/* BOTON REGISTER */}
        <TouchableOpacity
          style={{
            padding: Spacing * 2,
            backgroundColor: "#fff",
            marginTop: Spacing * 1.5,
            borderRadius: Spacing,
            shadowColor: Colors.primary,
            shadowOffset: {
              width: 0,
              height: Spacing,
            },
            shadowOpacity: 0.15,
            shadowRadius: Spacing,
          }}
          onPress={register}
        >
          <Text
            style={{
              fontFamily: "PoppinsBold",
              color: Colors.primary,
              textAlign: "center",
              fontSize: FontSize.large,
            }}
          >
            Register
          </Text>
        </TouchableOpacity>

        
        

        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <Text
            style={{
              fontFamily: "PoppinsSemiBold",
              color: Colors.primary,
              textAlign: "center",
              fontSize: FontSize.small,
            }}
          >
            Or continue with
          </Text>

          <View
            style={{
              marginTop: Spacing,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => alert("Not implemented yet")}
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons
                name="logo-google"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => alert("Not implemented yet")}
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons
                name="logo-apple"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => alert("Not implemented yet")}
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons
                name="logo-facebook"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen