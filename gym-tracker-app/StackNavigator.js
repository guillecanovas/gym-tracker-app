import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, LoginScreen } from './screens'

const Stack = createNativeStackNavigator();

const globalScreenOptions = { 
    //headerStyle: { backgroundColor: "#2C6BED" },
    //headerTitleStyle: { color: "white" },
    //headerTintColor: "white",
    headerShown: false,
};

const StackNavigator = () => {
    //const { user } = useAuth();
    const { user } = false;
    
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            >
            {user ? (
                <>
                    <Stack.Group>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Chat" component={ChatScreen} />
                        <Stack.Screen name="Profile" component={ProfileScreen} />
                        <Stack.Screen name="Message" component={MessageScreen} />
                    </Stack.Group>
                    
                    <Stack.Group screenOptions={{ presentation: 'modal' }}>
                        <Stack.Screen name="Modal" component={ModalScreen} />
                    </Stack.Group>

                    <Stack.Group screenOptions={{ presentation: 'transparentModal' }}>
                        <Stack.Screen name="Match" component={MatchScreen} />
                    </Stack.Group>
                </>
            ) : (
                <Stack.Screen name="Login" component={LoginScreen} />
            )}
            </Stack.Navigator>
    )
}

export default StackNavigator
