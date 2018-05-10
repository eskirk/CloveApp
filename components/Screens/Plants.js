import React from 'react';
import { StyleSheet, Text, ScrollView, Picker } from 'react-native';


export default class Plants extends React.Component {
   constructor() {
      super();

      this.state = {
         language: '',
         array: ["elliot", "Kirk", "man"],
         selectedItem: "elliot",
      }
   }
   render() {
      return (
         <ScrollView contentContainerStyle={styles.container}>
            {this.pepperPicker()}
         </ScrollView>
      );
   }

   pepperPicker() {

      let arrayItems = this.state.array.map((s, i) => {
         return <Picker.Item key = {s} value = {s} label = {s} />
      });

      return (
         <Picker
	    selectedValue={this.state.selectedItem}
	    style={{ height: 50, width: 100 }}
	    onValueChange={(itemValue, itemIndex) => this.setState({arrayItems: itemValue})}>
            {arrayItems}
	 </Picker>
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
