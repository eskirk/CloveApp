import React from 'react';
import { StyleSheet, Text, ScrollView, Navigator } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';

import reducer from './reducer';
import { Navbar } from './components/Navbar/Navbar';

console.disableYellowBox = true;

const store = createStore(reducer);

export default class App extends React.Component {
   constructor() {
      super();
   }
   
   render() {
      return(
         <Provider store={store}>
            <Navbar/>
         </Provider>
      );
   }
}
