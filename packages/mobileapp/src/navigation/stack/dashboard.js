import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Dashboard, CheckOut} from '@sankodan/com.cabbooking.dashboard';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {logoutUser} from '@sankodan/com.cabbooking.core';
import {StyleSheet} from 'react-native';

const Stack = createStackNavigator();

const DashboardStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerRight: props => (
            <Icon
              style={styles.logoutButton}
              testID="logoutButton"
              name={'logout'}
              size={25}
              color={'tomato'}
              onPress={logoutUser}
            />
          ),
        }}
      />
      <Stack.Screen name="CheckOut" component={CheckOut} />
    </Stack.Navigator>
  );
};

export default DashboardStack;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  logoutButton: {paddingHorizontal: 16},
});
