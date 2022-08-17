import React from 'react';
import {Provider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import LoginStack from './stack/login';
import UserProfileStack from './stack/userProfile';
import MyBookingStack from './stack/myBooking';
import {theme} from '@sankodan/com.cabbooking.core';
import {createNavigationContainerRef} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '@sankodan/com.cabbooking.core';
import DashboardStack from './stack/dashboard';

const Tab = createBottomTabNavigator();

const TabNav = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home';
        } else if (route.name === 'My Bookings') {
          iconName = focused ? 'confirmation-number' : 'confirmation-number';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person';
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    })}>
    <Tab.Screen name="Home" component={DashboardStack} />
    <Tab.Screen name="My Bookings" component={MyBookingStack} />
    <Tab.Screen name="Profile" component={UserProfileStack} />
  </Tab.Navigator>
);

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginStack"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginStack" component={LoginStack} />
      <Stack.Screen name="TabNav" component={TabNav} />
    </Stack.Navigator>
  );
};

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export default function AppNavigation() {
  React.useEffect(() => {
    const onAuthStateChanged = user => {
      if (navigationRef) {
        if (user) {
          // User is logged in
          navigationRef.reset({
            index: 0,
            routes: [{name: 'TabNav'}],
          });
        } else {
          // User is not logged in
          navigationRef.reset({
            index: 0,
            routes: [{name: 'LoginStack'}],
          });
        }
      }
    };
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <Provider store={store} style={{flex: 1}}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider theme={theme}>
          <NavigationContainer ref={navigationRef}>
            <RootStack />
          </NavigationContainer>
        </Provider>
      </PersistGate>
    </Provider>
  );
}
