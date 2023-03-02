import { View, Text, ScrollView, TouchableOpacity, Modal, StyleSheet, TextInput, Image } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth'
import { HomeHeader, Navbar, WorkoutCard } from '../components'
import { COLORS } from '../assets/constants/theme';
import DatePicker from "react-native-modern-datepicker"
import { getToday, getFormatedDate } from 'react-native-modern-datepicker'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons'; 

/* Estático */
const workouts = [
  {
      id: 1,
      name: "Push",
      image: "https://static.vecteezy.com/system/resources/previews/011/319/007/original/gym-and-fitness-logo-png.png",
      date: "2023/03/05",
  },
  {
    id: 2,
    name: "Pull",
    image: "https://static.vecteezy.com/system/resources/previews/011/319/007/original/gym-and-fitness-logo-png.png",
    date: "2023/03/06",
  },
  {
    id: 3,
    name: "Legs",
    image: "https://static.vecteezy.com/system/resources/previews/011/319/007/original/gym-and-fitness-logo-png.png",
    date: "2023/03/07",
  },
  {
    id: 4,
    name: "Abs",
    image: "https://static.vecteezy.com/system/resources/previews/011/319/007/original/gym-and-fitness-logo-png.png",
    date: "2023/03/06",
  },
  {
    id: 5,
    name: "Arms",
    image: "https://static.vecteezy.com/system/resources/previews/011/319/007/original/gym-and-fitness-logo-png.png",
    date: "2023/03/06",
  },
  {
    id: 6,
    name: "Glutes",
    image: "https://static.vecteezy.com/system/resources/previews/011/319/007/original/gym-and-fitness-logo-png.png",
    date: "2023/03/06",
  },
  {
    id: 7,
    name: "Shoulders",
    image: "https://static.vecteezy.com/system/resources/previews/011/319/007/original/gym-and-fitness-logo-png.png",
    date: "2023/03/06",
  },
  {
    id: 8,
    name: "Cardio",
    image: "https://static.vecteezy.com/system/resources/previews/011/319/007/original/gym-and-fitness-logo-png.png",
    date: "2023/03/06",
  },
  
]

const WorkoutsScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  //const startDate = getFormatedDate(today.setDate(today.getDate()+1), 'YYYY-MM-DD');

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(getToday());
  let num_workouts_today;

  const handleOnPress = () => {
    setOpen(!open);
  }

  const handleDateChange = (propDate) => {
    setDate(propDate);
  }

  /* Resulta que va antes el render que el useEffect xd */
  const init = () => {
    num_workouts_today = 0;
    for (let i = 0; i < workouts.length; i++) {
      if(workouts[i].date === date) {
        num_workouts_today++;
      }
    }
  }


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

        <View className="px-3 pt-5 pb-4 flex-row items-center">
            <Text className="font-bold text-xl mr-3">Select Date</Text>
            <TouchableOpacity 
              className="flex-row items-center space-x-1"
              onPress={handleOnPress}
            >
                <AntDesign className="mb-1 self-center" name="calendar" size={25} color="blue" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleOnPress}>
              <Text className="ml-2 mt-1">{date}</Text>
            </TouchableOpacity>
        </View>

        {/* Featured categories con las fechas posteriores a la seleccionada */}
        
        

        {/* Workout del dia seleccionado */} 
        {init()}
        {num_workouts_today > 0 ? (
          workouts.map((workout) => workout.date === date ? (
            <WorkoutCard  
              key={workout._id}
              name={workout.name}
              image={workout.image}
            />
          ) : null)
        ) 
        : (
          <View className="mt-10 h-3/4 rounded-xl justify-center items-center shadow-xl">
            <Text className="font-bold text-lg pb-5">No workouts for this day</Text>
            <Image 
                className="h-20 w-20" 
                source={require("../assets/icons/Crying-Face-Emoji.png")}  
            />
          </View>
        )}
          
        <Modal 
          animationType='slide'
          transparent={true}
          visible={open}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <DatePicker
                mode="calendar"
                //minimumDate={startDate}
                selected={date}
                onDateChange={handleDateChange}
              />
              <TouchableOpacity onPress={handleOnPress}>
                <Text>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

      </ScrollView>



      {/* Navbar */}
      <View>
        <Navbar />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
})

export default WorkoutsScreen