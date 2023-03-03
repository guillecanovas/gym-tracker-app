import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Animated, Image, Dimensions, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon, } from "react-native-heroicons/outline";
import useAuth from '../hooks/useAuth'
import { Header, HomeHeader, Navbar, ChartLabel } from '../components'
import { COLORS } from '../assets/constants/theme';
import { trendingCurrencies } from '../assets/constants/dummyChart';
import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons'; 

import { VictoryScatter, VictoryLine, VictoryChart, VictoryAxis } from "victory-native"
import { VictoryCustomTheme } from "../assets/styles"

const ChartCard = () => {

  const { width }  = Dimensions.get('window')
  const navigation = useNavigation();
  const { user } = useAuth();


  return (

        <View
            style={{
            marginTop: 24,
            marginHorizontal: 12,
            borderRadius: 12,
            alignItems: 'center',
            backgroundColor: "#fff",
            ...styles.shadow
            }}
        >
      
        {/* Chart Header */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 24,
            paddingHorizontal: 24,
          }}
        >
          <View className="flex-1">
            <ChartLabel 
              icon={user.photoURL}
              currency="ejemplo"
              code="ej"
            />
          </View>
        </View>
        
        {/* Chart */}
        <View style={{ marginTop: -25 }}>
          <VictoryChart
            theme={VictoryCustomTheme}
            height={220}
            width={width - 40}
          >
            <VictoryLine
              interpolation="natural"
              style={{
                data: { stroke: COLORS.blue5 },
                parent: { border: '1px solid #ccc' }
              }}
              data={trendingCurrencies[1].chartData}
              categories={{ 
                x: ["15 MIN", "30 MIN", "45 MIN", "60 MIN"],
                y: ["15", "30", "45"]
              }}
            />

            <VictoryScatter 
              data={trendingCurrencies[1].chartData}
              size={5}
              style={{
                data: { fill: COLORS.blue5 }
              }}
            />

            <VictoryAxis 
              style={{
                grid: { stroke: 'transparent' },
              }}
            />

            <VictoryAxis 
              dependentAxis
              style={{
                axis: { stroke: 'transparent' },
                grid: { stroke: 'grey' },
              }}
            />

          </VictoryChart>
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

export default ChartCard