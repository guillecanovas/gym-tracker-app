import { View } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { Button, Input, Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import useAuth from '../hooks/useAuth'


const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const { registerUser } = useAuth();

    const register = () => {
        registerUser(name, email, password, imageUrl);
    };

    return (
        
            <SafeAreaView className="flex-1 items-center justify-center p-2">

                <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        className="flex-1"
                        keyboardVerticalOffset={10}
                >
            
                    <Text h3 className="mb-12">Create your accont</Text>
                    <View className="">
                        <Input 
                            placeholder='Full Name' 
                            autoFocus type="text" 
                            value={name} 
                            onChangeText={(text) => setName(text)} 
                        />
                        <Input 
                            placeholder='Email' 
                            type="email" 
                            value={email} 
                            onChangeText={(text) => setEmail(text)} 
                        />
                        <Input 
                            placeholder='Password'
                            secureTextEntry
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <Input 
                            placeholder='Profile Picture URL (optional)' 
                            type="text" 
                            value={name} 
                            onChangeText={(text) => setImageUrl(text)} 
                            onSubmitEditing={register}
                        />
                    </View>

                    <Button 
                        raised 
                        onPress={register} 
                        title="Register" 
                    />
                </KeyboardAvoidingView>
            </SafeAreaView>
    )
}

export default RegisterScreen