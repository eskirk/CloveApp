import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Home from '../Screens/Home';
import Device from '../Screens/Device';
import Plants from '../Screens/Plants';
import Settings from '../Screens/Settings';

export const Navbar = TabNavigator(
   {
      Home: {
         screen: Home,
         navigationOptions: {
            tabBarLabel: 'Home'
         }
      },
      Device: {
         screen: Device,
         navigationOptions: {
            tabBarLabel: 'Device'
         }
      },
      Plants: {
         screen: Plants,
         navigationOptions: {
            tabBarLabel: 'Plants',
            // tabBarIcon: <Icon name="flower" size={30}/>,
            tabBarOptions: {
               showIcon: true,
            }
         }
      },
      Settings: {
         screen: Settings,
         navigationOptions: {
            tabBarLabel: 'Settings'
         }
      }
   },
   {
      tabBarPosition: 'bottom',
      swipeEnabled: true,
      tabBarOptions: {
         activeTintColor: '#f2f2f2',
         activeBackgroundColor: '#2EC4B6',
         labelStyle: {
            fontSize: 18,
            padding: 10
         },
         bottomNavigationOptions: {
            labelColor: 'black',
            tabs: {
               Home: {
                  barBackgroundColor: '#37474F',
                  labelColor: 'black',
               },
               Device: {
                  barBackgroundColor: '#37474F',
                  labelColor: 'black'
               },
               Plants: {
                  barBackgroundColor: "#00796B",
                  labelColor: 'black'
               },
               Settings: {
                  barBackgroundColor: "#5D4037",
                  labelColor: 'black'
               }
            }
         }
      }
   });
