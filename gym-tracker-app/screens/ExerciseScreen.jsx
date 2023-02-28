import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth'
import { HomeHeader, Navbar } from '../components'
import { COLORS } from '../assets/constants/theme';

const ExerciseScreen = () => {

  const navigation = useNavigation();
  const { user } = useAuth();

  return (
      <View className="flex-1 bg-white">

        {/* Header */}
        <HomeHeader bgcolor={COLORS.primary} />

        {/* Content Scrolleable */}
        <ScrollView 
            className="bg-white flex-1"
            contentContainerStyle={{
                paddingBottom: 100,
            }}
        >
            <Text>ExerciseScreen</Text>

        </ScrollView>

      

        {/* Navbar */}
        <View>
          <Navbar />
        </View>

      </View>
  )
}

export default ExerciseScreen