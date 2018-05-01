import React from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './components/Screens/Home';
import Device from './components/Screens/Device';
import Plants from './components/Screens/Plants';
import Settings from './components/Screens/Settings';

const RootStack = StackNavigator(
   {
      Home: {
         screen: Home
      },
      Plants: {
         screen: Plants
      },
      Device: {
         screen: Device
      },
      Settings: {
         screen: Settings
      }
   },
   {
      initialRouteName: 'Home'
   }
)

export default class App extends React.Component {
   render() {
      return <RootStack />;
   }
}