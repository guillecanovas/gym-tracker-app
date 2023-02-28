import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core'
import React from 'react'

const Navbar = () => {

  const navigation = useNavigation();

  return (

     /* NAVBAR con texto */
     <TouchableOpacity 
          onPress={() => console.log('Add Set')}
          className="rounded-xl bg-white px-7 py-4 mx-2 mb-5 shadow-2xl flex-row justify-between"
      >
        <TouchableOpacity className="flex-col items-center justify-center" onPress={() => navigation.navigate("Home")}>
          <Octicons className="mb-1 self-center" name="home" size={25} color="black" />
          <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-col items-center justify-center" onPress={() => navigation.navigate("Progress")}>
          <Ionicons className="mb-1 self-center" name="md-stats-chart-outline" size={25} color="black" />
          <Text>Progress</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-col items-center justify-center" onPress={() => navigation.navigate("Notifications")} >
          <MaterialCommunityIcons className="mb-1 self-center" name="bell-badge" size={24} color="black" />
          <Text>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-col items-center justify-center" onPress={() => navigation.navigate("Profile")} >
          <Feather className="mb-1 self-center" name="user" size={25} color="black" />
          <Text>Profile</Text>
        </TouchableOpacity>
        
      </TouchableOpacity>

    /* NAVBAR sin texto */

    /* <TouchableOpacity 
        onPress={() => console.log('Add Set')}
        className="rounded-xl bg-white p-7 mx-2 mb-5 shadow-2xl flex-row justify-between"
    >
      <Octicons className="mb-1 self-center" name="home" size={25} color="black" />
      <Ionicons className="mb-1 self-center" name="md-stats-chart-outline" size={25} color="black" />
      <MaterialCommunityIcons className="mb-1 self-center" name="bell-badge" size={24} color="black" />
      <Feather className="mb-1 self-center" name="user" size={25} color="black" />
    </TouchableOpacity>*/
    
   
    
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25, 
    shadowRadius: 3.5,
    elevation: 5,
  }
})

export default Navbar