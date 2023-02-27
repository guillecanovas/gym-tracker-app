import { View, Text } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigation } from '@react-navigation/core'

const HomeScreen = () => {

  const navigation = useNavigation();
  const { user } = useAuth();

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen