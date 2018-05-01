import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavigation, { Tab, NavigationComponent } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/Entypo';
import { TabNavigator } from 'react-navigation';

import Home from '../Screens/Home';
import Device from '../Screens/Device';
import Plants from '../Screens/Plants';
import Settings from '../Screens/Settings';

const Nav = TabNavigator(
         {
            Device: { screen: Device },
            Plants: { screen: Plants },
            Settings: { screen: Settings }
         },
         {
            // tabBarComponent: NavigationComponent,
            tabBarPosition: 'bottom',
            tabBarOptions: {
               bottomNavigationOptions: {
                  labelColor: 'black',
                  tabs: {
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


class Navbar extends React.Component {

   render() {
      return <Nav/>;
   }

   settingsPage() {
      console.log("Changing to settings page");
   }

   plantsPage() {
      console.log("Changing to plants page");
   }

   devicePage() {
      console.log("Changing to device page");
   }
}

export default Navbar;