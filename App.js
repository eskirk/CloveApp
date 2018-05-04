import React from 'react';
import { StyleSheet, Text, ScrollView, Navigator } from 'react-native';

import { Navbar } from './components/Navbar/Navbar';

const loggedIn = false;

export default class App extends React.Component {
   constructor() {
      super();

      this.state = {
         loggedIn: false
      }
   }
   
   render() {
      return(
         <Navbar/>
      );
   }
}