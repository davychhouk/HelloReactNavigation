/*
 *@flow
*/
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './components/Home';
import Shop from './components/Shop';
import Profile from './components/Profile';

const RouteConfigs = {
  Home: Home,
  Shop: Shop,
  Profile: Profile
};

const NavigatorConfigs = {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-book${focused ? '' : '-outline'}`;
      } else if (routeName === 'Shop') {
        iconName = `ios-cart${focused ? '' : '-outline'}`;
      } else if (routeName === 'Profile') {
        iconName = `ios-contact${focused ? '' : '-outline'}`;
      }
      const icon = () => (
        <Ionicons name={iconName} size={22} color={tintColor} />
      );
      return icon();
    },
    tabBarLabel: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      const { label } = styles;
      if (routeName === 'Home') {
        return (
          <Text style={focused ? [label, { color: tintColor }] : label}>
            Home
          </Text>
        );
      } else if (routeName === 'Shop') {
        return (
          <Text style={focused ? [label, { color: tintColor }] : label}>
            Shop
          </Text>
        );
      } else if (routeName === 'Profile') {
        return (
          <Text style={focused ? [label, { color: tintColor }] : label}>
            Profile
          </Text>
        );
      }
    }
  }),
  tabBarOptions: {
    activeTintColor: '#80daff',
    inactiveTintColor: 'gray'
  }
};

const styles = StyleSheet.create({
  label: {
    fontSize: 10
  }
});

export default createBottomTabNavigator(RouteConfigs, NavigatorConfigs);
