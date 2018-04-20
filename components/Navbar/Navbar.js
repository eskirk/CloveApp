import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavigation, { Tab, NavigationComponent } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/Entypo';


class Navbar extends React.Component {
   render() {
      return (
         <BottomNavigation
            labelColor="white"
            rippleColor="white"
            style={{
               height: 56,
               elevation: 8,
               position: 'absolute',
               left: 0,
               bottom: 0,
               right: 0
            }}
         >
            <Tab
               barBackgroundColor="#00796B"
               label="Plants"
               icon={<Icon size={24} color="white" name="leaf" />}
               onPress={() => this.plantsPage()}
            />
            <Tab
               barBackgroundColor="#37474F"
               label="Device"
               icon={<Icon size={24} color="white" name="database" />}
               onPress={() => this.devicePage()}
            />
            <Tab
               barBackgroundColor="#5D4037"
               label="Settings"
               icon={<Icon size={24} color="white" name="menu" />}
               onPress={() => this.settingsPage()}
            />
         </BottomNavigation>
      )
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