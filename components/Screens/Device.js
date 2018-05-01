import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';


export default class Device extends React.Component {
   render() {
      return (
         <ScrollView contentContainerStyle={styles.container}>
            <Text>
               Device
            </Text>
         </ScrollView>
      )
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