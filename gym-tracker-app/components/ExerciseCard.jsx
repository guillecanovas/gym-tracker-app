import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Image } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
{ /* <Feather name="trash-2" size={24} color="black" /> */ }
import { Ionicons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Swipelist from 'react-native-swipeable-list-view';
import { useNavigation } from '@react-navigation/native';

/* Estático */
const exercises = [
    {
        id: 1,
        name: "Chest Press",
        image: "",
    },
    {
        id: 2,
        name: "Lat PullDown",
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

const ExerciseCard = ({ name, image }) => {

    const navigation = useNavigation();

    _renderRightAction = (color, backgroundColor, x, progress) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [x, 0],
        });

        return (
            <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
                <RectButton
                    style={[styles.rightAction, { backgroundColor: backgroundColor }]}
                >
                    <Feather name="trash-2" size={30} color={color} />
                </RectButton>
            </Animated.View>
        )
    }

    _renderRightActions = progress => {
        <View style={{ width: 192, flexDirection: 'row' }}>
            {this._renderRightAction("red", "#dd2c00", 192, progress)}
            {this._renderRightAction("red", "#dd2c00", 128, progress)}
            {this._renderRightAction("red", "#dd2c00", 64, progress)}
        </View>
    }

    _updateRef = ref => {
        this._swipeableRow = ref;
    }
    

    return (

        <View>
            <Swipelist
                data={exercises}
                renderRightItem={(data, index) => (
                    <TouchableOpacity 
                        className="p-14 bg-gray-100 rounded-xl flex-row items-center justify-between mt-3 mx-4"
                        onPress={() => navigation.navigate("Workout", {
                            title: data.name,
                        })}
                    >
                        <TouchableOpacity key={index} style={styles.itemLeft}>
                            <View style={styles.square}></View>
                            <Text style={styles.itemText}>{index + 1}. {data.name}</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                )}
                renderHiddenItem={(data, index) => (
                    <View style={{ flexDirection:'row' }}>

                        {/* Boton edit */}
                        <TouchableOpacity
                            style={[styles.rightAction, { backgroundColor: '' }]}
                            onPress={() => Alert.alert("Edit")}
                        >
                            <Feather name="edit" size={30} color="black" />
                        </TouchableOpacity>

                        {/* Boton edit */}
                        <TouchableOpacity
                            style={[styles.rightAction, { backgroundColor: '' }]}
                            onPress={() => Alert.alert("Delete")}
                        >
                            <Feather name="trash-2" size={30} color="red" />  
                        </TouchableOpacity>
                    </View>
                )}
                rightOpenValue={200}
            />
        </View>

        /*
        <Swipeable
            ref={this._updateRef}
            friction={2}
            rightThreshold={40}
            renderRightActions={this._renderRightActions}
        >
            <View style={styles.item}>
                <Image
                    source={ require("../assets/logos/logo.png")}
                    style={styles.image}
                />

                <View>
                    <Text style={styles.name}>HOLA</Text>
                    <Text style={styles.mesage}>que tal estas</Text>
                </View>
            </View>
            

        </Swipeable>*/
        
        /*
        <View className="p-14 bg-gray-100 rounded-xl flex-row items-center justify-between mt-3 mx-4 ">
            <PanGestureHandler onGestureEvent={panGestureHandler}>
                <Animated.View style={styles.itemLeft}>
                    <View style={styles.square}></View>
                    <Text style={styles.itemText}>{name}</Text>
                </Animated.View>
                <View style={styles.circular}></View>
            </PanGestureHandler>
        </View>*/
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
        
    },
    rightAction: {
        width: '100%',
        marginVertical: 10,
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        height: 60,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
  });
  

export default ExerciseCard