import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';


export default class Plants extends React.Component {
   constructor() {
      super();

      this.state = {
         array: ["Herbs", "Exotic", "Salad Greens"],
         selectedItem: "",
      }
   }
   render() {
      return (
         <View contentContainerStyle={styles.container}>
            <Text> 
               Environment
            </Text>         
            {this.environmentPicker()}
         </View>
      );
   }

   environmentPicker() {

      let arrayItems = this.state.array.map((s, i) => {
         return <Picker.Item key = {s} value = {s} label = {s} />
      });

      return (
         <Picker
	    selectedValue={this.state.selectedItem}
	    style={styles.picker}
	    onValueChange={(itemValue, itemPosition) => this.setState({selectedItem: itemValue})}>
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

   picker: {
      height: 50,
      width: 400,
   },
});
