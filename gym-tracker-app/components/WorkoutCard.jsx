import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core'

const WorkoutCard = ({ name, image }) => {
    
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
        className="p-12 bg-gray-100 rounded-xl flex-row items-center justify-between mt-3 mx-4"
        onPress={() => navigation.navigate("Exercise", {
            title: name,
        })}
    >
        <TouchableOpacity style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text className="text-lg">{name}</Text>
        </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#FFF',
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    itemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    square: {
      width: 24,
      height: 24,
      backgroundColor: '#55BCF6',
      opacity: 0.4,
      borderRadius: 5,
      marginRight: 15,
    },
    itemText: {
      maxWidth: '80%',
    },
    circular: {
      width: 12,
      height: 12,
      borderColor: '#55BCF6',
      borderWidth: 2,
      borderRadius: 5,
    },
  });
  

export default WorkoutCard;