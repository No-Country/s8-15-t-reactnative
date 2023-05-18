import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Nav = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
       
      </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default Nav;
