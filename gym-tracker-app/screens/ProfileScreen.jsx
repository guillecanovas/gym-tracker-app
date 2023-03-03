import { View, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth'
import { HomeHeader, Navbar } from '../components'
import { COLORS } from '../assets/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper';
const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();

  return (
    <SafeAreaView className="flex-1 bg-white">

        <ScrollView className="flex-1">

          {/* User Header */}
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
                <Avatar.Image 
                  className="shadow-xl"
                  source={{
                    uri: user.photoURL
                  }}
                  size={80}
                />
                <View style={{marginLeft: 20}}>
                  <Title style={[styles.title, {
                    marginTop:15,
                    marginBottom: 5,
                  }]}>
                    {user.displayName}
                  </Title>
                  <Caption style={styles.caption}>{user.email}</Caption>
                </View>
            </View>
          </View>

          {/* User Settings Options */}
          <View style={styles.menuWrapper}>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <MaterialCommunityIcons name="heart-outline" color="#FF6347" size={25} />
                <Text style={styles.menuItemText}>Your Favorites</Text>
              </View>
            </TouchableRipple>

            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <MaterialCommunityIcons name="account-check-outline" color="#FF6347" size={25} />
                <Text style={styles.menuItemText}>Support</Text>
              </View>
            </TouchableRipple>
            
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Feather name="settings" size={25} color="#FF6347" />
                <Text style={styles.menuItemText}>Settings</Text>
              </View>
            </TouchableRipple>

            <TouchableRipple onPress={logout}>
              <View style={styles.menuItem}>
                <MaterialCommunityIcons name="share-outline" color="#FF6347" size={25} />
                <Text style={styles.menuItemText}>Log out</Text>
              </View>
            </TouchableRipple>
          </View>


        </ScrollView>

      

        {/* Navbar */}
        <View className="-mb-8">
          <Navbar />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});

export default ProfileScreen