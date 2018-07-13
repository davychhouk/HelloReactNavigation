/*
 *@flow
*/
import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './components/Home';
import Shop from './components/Shop';
import Profile from './components/Profile';

export default createStackNavigator({
  Home: Home,
  Shop: Shop,
  Profile: Profile
});
