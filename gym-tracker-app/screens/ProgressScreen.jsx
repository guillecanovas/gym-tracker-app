import { View, Text, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon, } from "react-native-heroicons/outline";
import useAuth from '../hooks/useAuth'
import { Header, HomeHeader, Navbar } from '../components'
import { COLORS } from '../assets/constants/theme';

const ProgressScreen = () => {
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
        <Text>ProgressScreen</Text>

      </ScrollView>

      
      

      {/* Navbar */}
      <View>
        <Navbar />
      </View>

    </View>
  )
}

export default ProgressScreen