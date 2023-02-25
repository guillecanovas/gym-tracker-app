import { View, Text } from 'react-native'
import React from 'react'
import { Button, Input, Image } from 'react-native-elements';

const LoginScreen = () => {
  return (
    <View>
        <Image>
            <Image source={require('../assets/logo.png')} />
        </Image>
      <Text>LoginScreen</Text>
    </View>
  )
}

export default LoginScreen