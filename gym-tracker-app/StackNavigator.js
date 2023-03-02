import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, LoginScreen, RegisterScreen, ModalScreen, WorkoutsScreen, ExerciseScreen, ProgressScreen, ProfileScreen, SetScreen } from './screens'
import useAuth from './hooks/useAuth'

const Stack = createNativeStackNavigator();

const globalScreenOptions = { 
    //headerStyle: { backgroundColor: "#2C6BED" },
    //headerTitleStyle: { color: "white" },
    //headerTintColor: "white",
    headerShown: false,
};

const StackNavigator = () => {
    const { user } = useAuth();
    
    return (
        <Stack.Navigator
            screenOptions={ globalScreenOptions }
            >
            {user ? (
                <>
                    <Stack.Group>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Register" component={RegisterScreen} />
                        <Stack.Screen name="Exercise" component={ExerciseScreen} />
                        <Stack.Screen name="Progress" component={ProgressScreen} />
                        <Stack.Screen name="Workouts" component={WorkoutsScreen} />
                        <Stack.Screen name="Profile" component={ProfileScreen} />
                        <Stack.Screen name="Set" component={SetScreen} />
                    </Stack.Group>
                    
                    <Stack.Group screenOptions={{ presentation: 'modal' }}>
                        <Stack.Screen name="Modal" component={ModalScreen} />
                    </Stack.Group>
                </>
            ) : (
                <Stack.Group>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                </Stack.Group>
            )}
            </Stack.Navigator>
    )
}

export default StackNavigator
