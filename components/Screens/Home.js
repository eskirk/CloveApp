import React from 'react';
import { StyleSheet, Text, ScrollView, View, Button, Modal, TextInput } from 'react-native';

import renderIf from '../Functions/Rendering';
import logIn from '../Functions/User';

export default class Home extends React.Component {
   constructor() {
      super();

      this.state = {
         loggedIn: false,
         logInVisible: false,
         loginText: '',
         passText: '' 
      }
   }

   render() {
      return (
         <ScrollView contentContainerStyle={styles.container}>
            {!this.state.loggedIn ?
               this.loginView() : this.welcomeView()
            }
            {
               this.modalView()
            }
         </ScrollView>
      );
   }

   loginView() {
      return (
         <View>
            <Text contentContainerStyle={styles.container}>
               Welcome to Pantry by Clove
               Please log in to continue
            </Text>
            <Button
               title='Log In'
               onPress={() => this.logIn()}
            />
         </View>
      )
   }

   welcomeView() {
      return (
         <Text>
            Welcome to Clove!
         </Text>
      )
   }

   modalView() {
      return (
         <Modal
            animationType='slide'
            transparent={false}
            visible={this.state.logInVisible}
            onRequestClose={() => { alert('Modal has been closed.'); }}
         >
            <View style={styles.container}>
               <TextInput
                  style={{ height: 30, width: 100, borderColor: 'gray', borderWidth: 0 }}
                  placeholder='Username'
                  textAlign='center'
                  onChangeText={(text) => this.setState({ loginText: text })}
                  value={this.state.loginText}
               />
               <TextInput
		  secureTextEntry={true}
                  style={{ height: 30, width: 100, borderColor: 'gray', borderWidth: 0 }}
                  placeholder='Password'
                  textAlign='center'
                  onChangeText={(text) => this.setState({ passText: text })}
                  value={this.state.passText}
               />
               <Button
                  title='Log In'
                  onPress={() => this.logIn()}
               />
            </View>
         </Modal>
      )
   }

   logIn() {
      this.setState({
         logInVisible: !this.state.logInVisible
      })
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
