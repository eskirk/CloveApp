import React from 'react';
import { StyleSheet, Text, View, Picker, Image, TouchableOpacity} from 'react-native';
import {Col, Row, Grid} from "react-native-easy-grid";


export default class Plants extends React.Component {
   constructor() {
      super();
      this.state = {
         array: ["Steve's Herbs", "Liston Family", "Sara's Greens"],
         selectedItem: "Steve's Herbs",
         plantPage: false,
	 currentPlant: ["Basil", "4/2/18", "5/19/18", "6/3/18", "3 Weeks"]
      }
   }
   render() {
      return (
         <Grid>
            {this.state.plantPage ? this.plantPage() : this.mainPage()}
         </Grid>
      );
   }

   plantPage() {
      return (
         <Grid>
            <Row size = {1}>
            </Row>
            <Row size = {1}>
               <TouchableOpacity activeOpacity = {.5} onPress= {this.backFun}>
                  <Image style = {styles.backarrow_image}
                     source={require('../../images/backarrow.png')}
                  />
               </TouchableOpacity>
	    </Row>
            <Row size = {12.5}>
               <Col>
               </Col>
               <Col>
                  <Image style = {styles.plant_page_image}
                     source={require('../../images/plant_image.png')}
                  />
               </Col>
               <Col>
               </Col>
            </Row>
            <Row size = {15}>
               <Col size = {1}>
	       </Col>
	       <Col size = {20}>
	          <Row size = {3}>
	             <Text style = {styles.plantPageFont}>
	                Plant Type: {this.state.currentPlant[0]}
                     </Text>
	          </Row>
	          <Row size = {3}>
	             <Text style = {styles.plantPageFont}>
	                Date Planted: {this.state.currentPlant[1]}
                     </Text>
	          </Row>
	          <Row size = {3}>
	             <Text style = {styles.plantPageFont}>
	                Last Harvested: {this.state.currentPlant[2]}
                     </Text>
	          </Row>
	          <Row size = {3}>
       	             <Text style = {styles.plantPageFont}>
	                Est. Harvest Date: {this.state.currentPlant[3]}
                     </Text>
	          </Row>
	          <Row size = {3}>
	             <Text style = {styles.plantPageFont}>
	                Est. Cycle Rate: {this.state.currentPlant[4]}
                     </Text>
	          </Row>
	       </Col>
	    </Row>
         </Grid>      
      )
   }

   mainPage() {
      return (
            <Grid>
               <Row size = {1}>
                  <Col size = {1}>
                  </Col>
                  <Col size = {2}>
                     <Text style={styles.title}>
                        Device
                     </Text>
                  </Col>
                  <Col size = {1}>
                  </Col>
               </Row>
               <Row size = {2}>
                  {this.devicePicker()}
               </Row>
               <Row size = {3}>
                  {this.deviceSelector()}
               </Row>
            </Grid>
      )
   }

   deviceSelector() {
      if (this.state.selectedItem == "Steve's Herbs") {
         return(this.steve())
      }
      else if (this.state.selectedItem == "Liston Family") {
         return(this.liston())
      }
      else if (this.state.selectedItem == "Sara's Greens") {
         return(this.sara())
      }
   }

   steve() {

      return (
         <Grid>
            <Row>
               <Col size = {1}>
               </Col>
               <Col size = {2}>
                  {this.plant("Chives", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Cilantro", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Cilantro", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Cilantro", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
            </Row>
            <Row>
               <Col size = {1}>
               </Col>
               <Col size = {2}>
                  {this.plant("Mint", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Mint", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Mint", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Basil", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
            </Row>
            <Row>
               <Col size = {1}>
               </Col>
               <Col size = {2}>
                  {this.plant("Basil", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Basil", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Basil", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Basil", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
            </Row>
         </Grid>
      )
   }

   liston() {

      return (
         <Grid>
            <Row>
               <Col size = {1}>
               </Col>
               <Col size = {2}>
                  {this.plant("Chives", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Chives", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Lettuce", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Lettuce", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
            </Row>
            <Row>
               <Col size = {1}>
               </Col>
               <Col size = {2}>
                  {this.plant("Lettuce", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Lettuce", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Lettuce", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Basil", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
            </Row>
            <Row>
               <Col size = {1}>
               </Col>
               <Col size = {2}>
                  {this.plant("Basil", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Basil", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Spinach", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Kale", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
            </Row>
         </Grid>
      )
   }

   sara() {

      return (
         <Grid>
            <Row>
               <Col size = {1}>
               </Col>
               <Col size = {2}>
                  {this.plant("Lettuce", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Lettuce", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Lettuce", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Lettuce", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
            </Row>
            <Row>
               <Col size = {1}>
               </Col>
               <Col size = {2}>
                  {this.plant("Lettuce", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Kale", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Kale", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Kale", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
            </Row>
            <Row>
               <Col size = {1}>
               </Col>
               <Col size = {2}>
                  {this.plant("Kale", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Kale", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Spinach", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
               <Col size = {2}>
                  {this.plant("Spinach", "4/2/18", "5/19/18", "6/3/18", "2 Weeks")}
               </Col>
            </Row>
         </Grid>
      )
   }

   plant(type, plantDate, lastHarvest, estHarvest, cycleRate) {

      return (
         <View style= {styles.plant}>
            <TouchableOpacity activeOpacity = {.5} onPress= {() => this.plantFun(type, plantDate, lastHarvest, estHarvest, cycleRate)}>
               <Image style = {styles.plant_image}
                  source={require('../../images/plant_image.png')}
               />
            </TouchableOpacity>
            <Text>
               {type}
            </Text>
         </View>      
      )
   }

   backFun = () =>
   {
      this.setState({
         plantPage: false
      })
   }

   plantFun = (type, plantDate, lastHarvest, estHarvest, cycleRate) =>
   {
      this.setState({
         plantPage: true,
         currentPlant: [type, plantDate, lastHarvest, estHarvest, cycleRate]
      })
   }

   devicePicker() {

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
      flexDirection: 'row',
   },

   picker: {
      height: 50,
      width: 400,
   },

   title: {
      marginTop: 60,
      textAlign: 'center',
      fontSize: 44,
   },

   plant_page_image: {
      width: 200,
      height: 200,
   },

   plant_image: {
      width: 50,
      height: 50,
   },

   backarrow_image: {
      width: 50,
      height: 50,
   },

   plantPageFont: {
      fontSize: 30,
   },

   plant: {
      justifyContent: 'center',
   },

   row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
   },

   item: {
      justifyContent: 'center',
   }
});
