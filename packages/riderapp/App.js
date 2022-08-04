import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import auth from '@react-native-firebase/auth';

import { theme, firebaseConfig } from '@sankodan/com.cabbooking.core'
import {
  AuthLoadingScreen,
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from '@sankodan/com.cabbooking.login'
console.log('firebaseConfig',firebaseConfig)
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

const Stack = createStackNavigator()
// const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

export default function App() {

  const onAuthStateChanged = ((user) => {
    if (navigationRef){
      if (user) {
        // User is logged in
        navigationRef.current.reset({
          index: 0,
          routes: [{ name: 'Dashboard' }],
        })
      } else {
        // User is not logged in
        navigationRef.current.reset({
          index: 0,
          routes: [{ name: 'StartScreen' }],
        })
      }
    }
  
  })

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <Provider theme={theme}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName="AuthLoadingScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="AuthLoadingScreen"
            component={AuthLoadingScreen}
          />
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
