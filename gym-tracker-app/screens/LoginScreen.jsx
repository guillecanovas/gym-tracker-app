import { View, Text, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { Button, Input, Image } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context'
import useAuth from '../hooks/useAuth'
import { useNavigation } from '@react-navigation/core'


const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const { signInUser , loading } = useAuth();
  
  const signIn = () => {
    signInUser(email,password);
  }

  const register = () => { 
    navigation.navigate('Register');
  }

  return (
    
 
    <SafeAreaView className="flex-1 items-center justify-center bg-white p-2">
      
        { loading 
          ? <Text>
              Loading...
            </Text> 
          :   
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              className="flex-1"
              keyboardVerticalOffset={10}
            >
              <Image 
                    source={require('../assets/logo.png')}
                    className="w-48 h-48" 
                />
                <View className="w-72">
                  <Input placeholder="Email" autoFocus type="email" value={email} onChangeText={(text) => setEmail(text)} />
                  <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={(text) => setPassword(text)} />
                </View>

                <Button className="mt-2" onPress={signIn} title="Login" />
                <Button onPress={register} className="mt-2" type="outline" title="Register" />

                    

                <View className="w-24">

                </View>
            </KeyboardAvoidingView>
          
        }
    </SafeAreaView>
  )
}

export default LoginScreen