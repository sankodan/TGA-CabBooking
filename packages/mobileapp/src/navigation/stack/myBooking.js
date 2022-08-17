import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BookingHistoryScreen} from '@sankodan/com.cabbooking.userprofile';

const Stack = createStackNavigator();

const MyBookingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bookings" component={BookingHistoryScreen} />
    </Stack.Navigator>
  );
};

export default MyBookingStack;
