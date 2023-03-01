import { View, Text, SafeAreaView, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Header, HomeHeader } from '../components'
import { EvilIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ExerciseCard, Navbar } from '../components'
import { COLORS } from '../assets/constants/theme';
import { useNavigation, useRoute } from '@react-navigation/native';


/* Estático */
const exercises = [
    {
        id: 1,
        name: "Chest Press",
        image: "",
    },
    {
        id: 2,
        name: "Lat Pulldown",
        image: ""
    },
    {
        id: 3,
        name: "Push Up",
        image: ""
    },
    {
        id: 4,
        name: "Squat",
        image: ""
    }, 
    {
        id: 5,
        name: "Deadlift",
        image: ""
    },
    {
        id: 6,
        name: "Triceps extension",
        image: ""
    },
    {
        id: 7,
        name: "Leg Extension",
        image: ""
    }
]

const ExerciseScreen = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const title = route.params.title;
  const modTitle = title + " Day"

  return (
    <View className="flex-1 bg-white">
        {/*<HomeHeader bgcolor={COLORS.primary} />*/}
        <Header title={modTitle}/>

        {/* Buscador */}
        <View className="flex-row items-center mt-4 -mb-2 space-x-2 pb-2 mx-4">
            <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-lg">
                <EvilIcons name="search" size={28} color="grey" />
                <TextInput 
                    placeholder="Search your exercise"
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
            {/* Exercise Card */}
            {exercises.map((ex) => (
                <ExerciseCard  
                    key={ex._id}
                    name={ex.name}
                    image={ex.image}
                />
            ))}
        </ScrollView>

        

        {/* Navbar */}
        <View>
            <Navbar />
        </View>
    </View>
  )
}

export default ExerciseScreen