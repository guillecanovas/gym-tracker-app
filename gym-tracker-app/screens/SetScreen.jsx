import { View, Text, SafeAreaView, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Header, HomeHeader } from '../components'
import { SetCard, Navbar } from '../components'
import { COLORS } from '../assets/constants/theme';
import { useRoute } from '@react-navigation/native';

/* Estático */
const sets = [
    {
        id: 1,
        number: 1,
        reps:7,
        weight: 55,
    },
    {
        id: 2,
        number: 2,
        reps:3,
        weight: 100,
    },
    {
        id: 3,
        number: 3,
        reps:7,
        weight: 80,
    },
    {
        id: 4,
        number: 4,
        reps: 6,
        weight: 30,
    }, 
    {
        id: 5,
        number: 5,
        reps:3,
        weight: 100,
    },
    {
        id: 6,
        number: 6,
        reps:7,
        weight: 80,
    },
    {
        id: 7,
        number: 7,
        reps: 6,
        weight: 30,
    }
]

const SetScreen = () => {

   console.log("El titulo del ej es: " + title)
   const route = useRoute();
   const title = route.params.title;

    return (
        <View className="flex-1 bg-white">
            <Header title={title}/>

            {/* Content Scrolleable */}
            <ScrollView 
                className="bg-white flex-1"
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
            >
                {/* Set Card */}
                <SetCard  
                    sets={sets}
                />
                
            </ScrollView>

            {/* Footer */}
            <View className="p-5 bg-white space-y-4">
                {/* Add Set */}
                <TouchableOpacity 
                    onPress={() => console.log('Add Set')}
                    className="rounded-full bg-[#001F2D] shadow-xl py-4 -mb-2"
                >
                    <Text className="text-center text-white text-lg ">
                        Add Set
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

export default SetScreen;