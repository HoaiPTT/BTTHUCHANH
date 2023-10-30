import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabNavigate.js';
import Login from '../screen/Login.js';
import Welcome from '../screen/Welcome.js';
import Signup from '../screen/Signup.js';
import FillProfile from '../screen/FillProfile.js';

const Stack = createNativeStackNavigator();

const StackNavigation = ({props}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTabs" component={BottomTabs} />

        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Welcome" component={Welcome} />

        <Stack.Screen name="Signup" component={Signup} />

        <Stack.Screen name="FillProfile" component={FillProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation;

const styles = StyleSheet.create({})