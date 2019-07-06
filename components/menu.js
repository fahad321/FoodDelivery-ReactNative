/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import { Actions } from 'react-native-router-flux';

export default class home extends Component {

  constructor(props){
    super(props);
    let params = this.props.navigation.state.params;
    this.state={
      resturantValue:params.resturantName,
      foodString :"",
      foodQuantity:0,
      drinkString: "",
      drinkQuantity:0,
    }
  }

  render() {
    let data = [{
        value : 'BBQ Pizza-$12.52',
      }, {
        value : 'Cheese Pizza-$10.54',
      }, {
        value : 'Chicken Burger-$11.50',
      },{
        value : 'Beef Burger-$12.75',
      },{
        value : 'Vegetable Roll-$10.15',
    }];

    let quantity = [{
        value : 1,
      }, {
        value : 2,
      }, {
        value : 3,
      },{
        value : 4,
      },{
        value : 5,
    }];

    let drink = [{
        value : 'Oreo shake-$7',
      }, {
        value : 'Mango shake-$6',
      }, {
        value : 'Apple Juice-$5',
      },{
        value : 'Diet coke-$3',
      },{
        value : 'Pina colada-$7',
    }];


    return (
      <View style={styles.container}>



          <Text	style={styles.restaurant_name }>
              {this.state.resturantValue}
          </Text>


        <View style={styles.food_menu_container}>
                <Dropdown
                      containerStyle={styles.food_item_dropdown}
                      label='Food Item'
                      data={data}
                      onChangeText ={(selectValue)=>this.setState({
                      foodString : selectValue
                      })}
                      />
                <Dropdown
                      containerStyle={styles.food_quantity_dropdown}
                      label='Quantity'
                      data={quantity}
                      onChangeText ={(selectValue)=>this.setState({
                      foodQuantity : selectValue
                    })}
                        />
        </View>


        <View style={styles.drinks_menu_container}>
                <Dropdown
                      containerStyle={styles.drinks_item_dropdown}
                      label='Drinks'
                      data={drink}
                      onChangeText ={(selectValue)=>this.setState({
                      drinkString : selectValue
                      })}
                        />
                <Dropdown
                      containerStyle={styles.drinks_quantity_dropdown}
                      label='Quantity'
                      data={quantity}
                      onChangeText ={(selectValue)=>this.setState({
                      drinkQuantity : selectValue
                      })}
                      />
        </View>

        <View style={styles.button_container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPressEvent.bind(this)}
                    >
                    <Text style={styles.buttonText}>
                      Proceed
                    </Text>
                </TouchableOpacity>
        </View>
      </View>

    );
  }
  onPressEvent(){
  			let	foodTempString	   =	this.state.foodString;
        let foodQuantity       =  this.state.foodQuantity
  			let	foodCost           =  parseFloat(foodTempString.substring(foodTempString.length-5,foodTempString.length))
        let foodName           =  foodTempString.substring(0, foodTempString.length-7)

        let drinkTempString    =  this.state.drinkString
        let drinkQuantity      =  this.state.drinkQuantity
        let drinkCost          =  parseInt(drinkTempString.substring(drinkTempString.length-1,drinkTempString.length))
        let drinkName          =  drinkTempString.substring(0, drinkTempString.length-3)

        if(foodTempString == ""){
          foodCost = 0
        }
        if(drinkTempString == ""){
          drinkCost = 0
        }

        totalCost          =  (foodCost * foodQuantity) + (drinkCost*drinkQuantity)



        // validation for food/drink options and quantities
        if(foodTempString == "" && drinkTempString == ""){
          Alert.alert("You should either select a food item or a drink.");
        }

        else if(foodTempString != "" && foodQuantity == ""){
          Alert.alert("Select food quantity.");
        }

        else if(drinkTempString != "" && drinkQuantity == ""){
          Alert.alert("Select drink quantity.");
        }

        else{
          // if no validation errors, go to summary screen

          Actions.summary({
            foodName: foodName,
            foodCost: foodCost * foodQuantity,
            foodQuantity: this.state.foodQuantity,
            drinkName: drinkName,
            drinkCost: drinkCost * drinkQuantity,
            drinkQuantity:this.state.drinkQuantity,
            total: totalCost,
    			});
        }


  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  restaurant_name:{
    fontSize:	28,
    marginTop:	30,
    textAlign: 'center',
    color:'#000',
    fontWeight:'bold',
  },
  food_menu_container:{
    // flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:30,
  },
  food_item_dropdown: {
    flex:1,
    paddingRight:30,
  },
  food_quantity_dropdown:{
    flex:0.5,
  },

  drinks_menu_container:{
    // flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:30,
  },
  drinks_item_dropdown: {
    flex:1,
    paddingRight:30,
  },
  drinks_quantity_dropdown:{
    flex:0.5,
  },

  button_container:{
    // flex:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },

  button:{
      backgroundColor: '#4841EE',
      height: 45,
      width: 140,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      borderRadius:10,
      borderWidth: 1,
      fontWeight:'bold',

  },
  buttonText:{
    textAlign: 'center',
    fontSize: 20,
    color:'#FFFFFF',
  }
});
