import React from 'react'
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import { Ionicons, Feather } from "@expo/vector-icons";
import { UserIcon } from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';
import useAuth from '../hooks/useAuth';

const Header = ({ title }) => {

    const navigation = useNavigation();
    const { user } = useAuth();

    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var today = year + "-" + month + "-" + date;

    return (
        <SafeAreaView className="p-2 flex-row items-center">
            <View className="flex-row ml-2 w-full h-full items-center justify-center">
                <TouchableOpacity 
                    onPress={() => navigation.goBack()} 
                    className="p-2 absolute left-0"
                >
                    <Ionicons name="chevron-back-circle" size={34} color="black" />
                </TouchableOpacity>
                
                <View className="flex-col items-center justify-center">
                    <Text className="text-2xl font-bold">{title}</Text>
                    <Text>{today}</Text> 
                </View> 
            </View> 
        </SafeAreaView>
    )
}

export default Header
