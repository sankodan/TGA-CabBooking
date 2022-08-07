import React from 'react';
import {Provider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import LoginStack from './stack/login';
import {theme} from '@sankodan/com.cabbooking.core';
import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export default function AppNavigation() {
  const onAuthStateChanged = user => {
    if (navigationRef) {
      if (user) {
        // User is logged in
        navigationRef.current.reset({
          index: 0,
          routes: [{name: 'Dashboard'}],
        });
      } else {
        // User is not logged in
        navigationRef.current.reset({
          index: 0,
          routes: [{name: 'StartScreen'}],
        });
      }
    }
  };

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <Provider theme={theme}>
      <NavigationContainer ref={navigationRef}>
        <LoginStack />
      </NavigationContainer>
    </Provider>
  );
}
