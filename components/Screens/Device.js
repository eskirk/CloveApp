import React from 'react';
import { StyleSheet, Text, ScrollView, View, Button, Modal } from 'react-native';


export default class Device extends React.Component {
   constructor() {
      super();

      this.state = {
         deviceConnected: false,
         findingDevice: false
      }

      this.deviceNotConnected =
         <ScrollView contentContainerStyle={styles.container}>
            <Text>
               There are no connected devices yet.
            </Text>
            <Text>
               Press the button below to connect a device.
            </Text>
            <Button 
               title='Connect Device'
               onPress={() => this.connectDevice()}
            />
         </ScrollView>

    this.deviceIsConnected =
         <ScrollView contentContainerStyle={styles.container}>
            <Text>
               There is a device connected, tap the device to modify preferences.
            </Text>
            {/* Image of device will go here */}
         </ScrollView>
   }

   render() {
      return (
         <ScrollView contentContainerStyle={styles.container}>
            {
               // render depending on if there is a device connected
               this.state.deviceConnected ? this.deviceIsConnected : this.deviceNotConnected
            }
            {this.modalView()}
         </ScrollView>
      );
   }

   connectDevice() {
      console.log('Attempting to connect to device {name}');

      this.setState({
         findingDevice: !this.state.findingDevice
      })
   }

   modalView() {
      return(
         <Modal
               animationType="slide"
               transparent={false}
               visible={this.state.findingDevice}
               onRequestClose={() => {alert('Modal has been closed.');}}
            >
            <View style={styles.container}>
               <Text>
                  Finding Devices...
               </Text>
            <Button
               title='Connect Device'
               onPress={() => this.connectDevice()}
            />
            </View>
         </Modal>
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
   text: {

   }
});
