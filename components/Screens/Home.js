import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

import renderIf from '../Functions/Rendering';

export default class Home extends React.Component {
   constructor() {
      super();

      this.state = {
         loggedIn: true
      }

      this.renderIf = renderIf.bind(this);
   }

   render() {
      return (
         <ScrollView contentContainerStyle={styles.container}>
            {this.renderIf(this.state.loggedIn,
               login
            )}
            {this.renderIf(this.state.loggedIn, 
               welcome
            )}
         </ScrollView>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flexGrow: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});

const welcome = 
   <Text>
      Welcome to Clove! 
   </Text>

const login = 
   <Text contentContainerStyle={styles.container}>
      Welcome to Pantry by Clove
      Please log in to continue
   </Text>