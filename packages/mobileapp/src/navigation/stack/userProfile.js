import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AccountScreen,
  AboutUsScreen,
} from '@sankodan/com.cabbooking.userprofile';

const Stack = createStackNavigator();

const UserProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
    </Stack.Navigator>
  );
};

export default UserProfileStack;
