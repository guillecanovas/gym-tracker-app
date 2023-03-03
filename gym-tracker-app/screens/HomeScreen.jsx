import { View, Text, SafeAreaView, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { HomeHeader, Navbar, WorkoutCard } from '../components'
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth'
import { COLORS } from '../assets/constants/theme';
import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { default_workouts } from '../assets/constants/dummyData'

/* Estático */
const workouts = default_workouts;

const HomeScreen = () => {

    const navigation = useNavigation();
    const { user } = useAuth();

    return (
        <View className="flex-1 bg-white">

            <HomeHeader bgcolor={COLORS.primary} description="Choose your workout!"/>

            {/* Buscador */}
            <View className="flex-row items-center mt-4 -mb-2 space-x-2 pb-2 mx-4">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-lg">
                    <EvilIcons name="search" size={28} color="grey" />
                    <TextInput 
                        placeholder="What are you training today?"
                        keyboardType="default"
                    />
                </View>
                <MaterialCommunityIcons name="tune-vertical" size={24} color="grey" />
            </View>

            {/* Content Scrolleable */}
            <ScrollView 
                className="bg-white flex-1"
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
            >
            
                {/* Workout Card */}
                {workouts.map((workout) => (
                    <WorkoutCard  
                        key={workout._id}
                        name={workout.name}
                        image={workout.image}
                    />
                ))}
                
            </ScrollView>

            {/* Create new Workout */}  
            <View className="p-5 bg-white  space-y-4">
                <TouchableOpacity 
                    onPress={() => alert("Create new Workout")}
                    className="rounded-full bg-[#001F2D] p-4 shadow-xl">
                    <Text className="text-center text-white text-lg font-bold">
                        Create New Workout
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

export default HomeScreen;