import React, { useLayoutEffect, useState, useEffect } from 'react'
import { View, Text, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon, } from "react-native-heroicons/outline";
import useAuth from '../hooks/useAuth'
import { Header, HomeHeader } from '../components'
import { COLORS } from '../assets/constants/theme';

const HomeScreen = () => {
    const navigation = useNavigation();
    const { user } = useAuth();

    return (
        <View className="flex-1 bg-white">
          <HomeHeader bgcolor={COLORS.primary} />

          <View className="p-5 bg-white mt-5 space-y-4">
            <TouchableOpacity 
                onPress={() => navigation.navigate('Workout')}
                className="rounded-lg bg-[#001F2D] p-4">
                <Text className="text-center text-white text-lg font-bold">
                    Start Workout
                </Text>
            </TouchableOpacity>
          </View>
        </View>
    )
}

export default HomeScreen
