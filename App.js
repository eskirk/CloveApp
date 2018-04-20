import React from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Navbar from './components/Navbar/Navbar';
import Device from './components/Screens/Device';
import Plants from './components/Screens/Plants';
import Settings from './components/Screens/Settings';


export default class App extends React.Component {
   constructor() {
      super();

      this.Nav = StackNavigator({
         Plants: { screen: Plants },
         Device: { screen: Device },
         Settings: { screen: Settings }
      })
   }

   render() {
      return (
         <View style={styles.container}>
            <Text>
               Welcome to Clove
            </Text>
            <Navbar/>
         </View>
      );
   }

   renderScene(route, nav) {
      switch (route.screen) {
         case 'Plants':
            return;
         case 'Device':
            return;
         case 'Settings':
            return;
      }
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});
