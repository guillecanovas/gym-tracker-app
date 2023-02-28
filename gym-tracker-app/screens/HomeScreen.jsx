import React, { useLayoutEffect, useState, useEffect } from 'react'
import { View, Text, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon, } from "react-native-heroicons/outline";
import useAuth from '../hooks/useAuth'
import { Categories, HomeHeader, Navbar } from '../components'
import { COLORS } from '../assets/constants/theme';

const HomeScreen = () => {
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
              {/* Categories */}
              <Categories />

          </ScrollView>

          {/* Start Workout */}  
          <View className="p-5 bg-white  space-y-4">
            <TouchableOpacity 
                onPress={() => navigation.navigate('Exercise')}
                className="rounded-full bg-[#001F2D] p-4 shadow-xl">
                <Text className="text-center text-white text-lg font-bold">
                    Start Workout
                </Text>
            </TouchableOpacity>
          </View>

          {/* Navbar */}
          <View>
            <Navbar />
          </View>

        </View>
    )
}

export default HomeScreen
