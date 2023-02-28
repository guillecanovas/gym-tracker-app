import React, { createContext, useContext, useState, useEffect, useMemo } from 'react'
import { View, Text } from 'react-native'
import { getAuth, updateProfile, signOut, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { authentication } from '../firebase';
const AuthContext = createContext({});
import { useNavigation } from '@react-navigation/core'

export const AuthProvider = ({ children }) => {

    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [loadingInitial, setLoadingInitial] = useState(true);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();


    useEffect(
        () =>
          onAuthStateChanged(authentication, (user) => {
            if (user) {
              //logged in..
              setUser(user);
            } else {
              setUser(null);
            }
            setLoadingInitial(false);
          }),
        []
    );

    const registerUser = (name, email, password, imageUrl) => {
      console.log("Registrar usuario con nombre: " + name + " email: " + email + " pswd: " + password + " e imagen: " + imageUrl);
      createUserWithEmailAndPassword(authentication, email, password)
        .then(()=> {
            //const user = authUser.user;
            const user = authentication.currentUser.email;
            console.log("Usuario registrado es: " + user);
            updateProfile(authentication.currentUser, {
                displayName: name,
                photoURL: imageUrl || "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
            });
        })
        .catch((err) => {
          setError(err);
          alert(err.message);
        })
        .finally(() => {
          setLoading(false)
          navigation.navigate('Home');
        });
    }

    const signInUser = (email, password) => {
        console.log("iniciar usuario")
        signInWithEmailAndPassword(authentication, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
        })
        .catch(err => setError(err))
        .finally(() => setLoading(false));
    }

    const logout = async () => {
        console.log("log out")
        setLoading(true);
        signOut(authentication)
          .catch(err => setError(err))
          .finally(() => setLoading(false));
    };

    const memoedValue = useMemo(
      () => ({
        user,
        loading,
        signInUser,
        registerUser,
        logout,
        error,
      }),
      [user, loading, error]
    );

    return (
      <AuthContext.Provider 
          value={memoedValue}
      >
          {!loadingInitial && children}
      </AuthContext.Provider>
  );
};

export default function useAuth(){
    return useContext(AuthContext);
}
