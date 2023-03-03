import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Animated, Image, Dimensions, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon, } from "react-native-heroicons/outline";
import useAuth from '../hooks/useAuth'
import { Header, HomeHeader, Navbar, ChartLabel, ChartCard } from '../components'
import { COLORS } from '../assets/constants/theme';
import { trendingCurrencies } from '../assets/constants/dummyChart';
import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons'; 

import { VictoryScatter, VictoryLine, VictoryChart, VictoryAxis } from "victory-native"
import { VictoryCustomTheme } from "../assets/styles"

const ProgressScreen = () => {

  const { width }  = Dimensions.get('window')
  const navigation = useNavigation();
  const { user } = useAuth();

  return (
    <View className="flex-1 bg-white">

      {/* Header */}
      <HomeHeader bgcolor={COLORS.primary} />

       {/* Buscador */}
       <View className="flex-row items-center mt-4 -mb-2 space-x-2 pb-2 mx-4">
            <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-lg">
                <EvilIcons name="search" size={28} color="grey" />
                <TextInput 
                    placeholder="Search exercise"
                    keyboardType="default"
                />
            </View>
            <MaterialCommunityIcons name="tune-vertical" size={24} color="grey" />
        </View>

      {/* Content Scrolleable */}
      <ScrollView>
          <ChartCard />
          <ChartCard />
          <ChartCard />
      </ScrollView>

      {/* Navbar */}
      <View>
        <Navbar />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  shadow: {
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,

      elevation: 8,
  }
})

export default ProgressScreen