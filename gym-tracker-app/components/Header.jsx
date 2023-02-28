import React from 'react'
import { View, Text, TouchableOpacity, Image} from 'react-native'
import { Ionicons, Feather } from "@expo/vector-icons";
import { UserIcon } from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';
import useAuth from '../hooks/useAuth';

const Header = ({ title }) => {

    const navigation = useNavigation();
    const { user } = useAuth();

    return (
        <View className="p-2 flex-row items-center justify-between">
            <View className="flex flex-row items-center ml-2">
                <TouchableOpacity 
                    onPress={() => navigation.goBack()} 
                    className="p-2"
                >
                    <Ionicons name="chevron-back-circle" size={34} color="black" />
                </TouchableOpacity>
                {/* <Text className="text-2xl font-bold pl-24">{title}</Text> */}
            </View>
            
            <View className="px-5">
                <Feather name="user" size={34} color="black"/>
            </View>      
        </View>
    )
}

export default Header
