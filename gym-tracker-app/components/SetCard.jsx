import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import Swipelist from 'react-native-swipeable-list-view';
import { useNavigation } from '@react-navigation/native';

const SetCard = ({ sets }) => {
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
              data={sets}
              renderRightItem={(data, index) => (
                  <TouchableOpacity 
                      className="p-12 bg-gray-100 rounded-xl flex-row items-center justify-between mt-3 mx-4"
                  >
                      <TouchableOpacity  key={index} style={styles.itemLeft}>
                          <View style={styles.square}></View>

                          <View className="">
                            <Text className="font-bold text-lg">Set {data.number}</Text>
                            <View className="flex-row items-center space-x-1">
                                <Text>{data.reps} reps</Text>
                                <Text>{data.weight} kgs</Text>
                            </View>
                        </View>

                      </TouchableOpacity>
                  </TouchableOpacity>
              )}

              renderHiddenItem={(data, index) => (
                  <View 
                      className="p-14rounded-xl flex-row items-center justify-between mt-9 "
                  >

                      {/* Boton Delete */}
                      <TouchableOpacity
                          style={[styles.rightAction, { backgroundColor: '' }]}
                          onPress={() => alert('Delete')}
                      >
                          <Feather name="trash-2" size={33} color="red" />  
                      </TouchableOpacity>

                      {/* Boton Edit */}
                      <TouchableOpacity
                          style={[styles.rightAction, { backgroundColor: '' }]}
                          onPress={() => alert("Edit")}
                      >
                          <Feather name="edit" size={32} color="black" />
                      </TouchableOpacity>

                  </View>
              )}
              rightOpenValue={200}
          />
      </View>
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
      alignItems: 'center',
  }
  });
  

export default SetCard