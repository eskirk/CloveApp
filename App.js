import React from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Navbar } from './components/Navbar/Navbar';


export default class App extends React.Component {
   render() {
      return (
         <Navbar/>
      );
   }
}