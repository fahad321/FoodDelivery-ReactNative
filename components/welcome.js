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

    this.state = {
      resturant: "",
    }
  }

  render() {
  let restaurants = [{
        value : 'Oven Bake',
      }, {
        value : 'Angry Tony Pizza',
      }, {
        value : 'JJ Burgers',
      },{
        value : 'Sydney Juices',
      },{
        value : 'Jasmin Labenese Resturant',
    }];
    return (

      <View style={styles.container}>

        <View style={styles.image_container}>

          <Image
              source={require('./assets/logo-4.png')}
              style={{height:100, width:100,}}

            />
          </View>

          <View style={styles.heading_container}>


            <Text	style={styles.heading}>
                      Welcome to CCS
            </Text>
          </View>

          <View style={styles.places_container}>
                    <Dropdown
                        containerStyle={styles.restaurants_dropdown}
                        label='Choose the place of business'
                        data={restaurants}
                        onChangeText ={(selectValue)=>this.setState({
                        resturant : selectValue
                        })}
                          />
          </View>
          <View style={styles.button_container}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onPressEvent.bind(this)}>
                        <Text style={styles.buttonText}>
                          Proceed
                        </Text>
                    </TouchableOpacity>
          </View>

      </View>
    );
  }


  onPressEvent(){

    if(this.state.resturant == ""){
      Alert.alert("Please select a restauant.");
    }else{
      Actions.menu({
          resturantName:this.state.resturant
      });
    }


  }


}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  image_container:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:80,
  },
  heading_container:{
  },
  heading: {
    fontSize: 24,
    paddingTop:20,
    textAlign: 'center',
    color: '#000',
  },
  places_container:{
    flex:0.3,
    paddingLeft:50,
    paddingRight:50,
  },
  restaurants_dropdown: {
    borderRadius:5,
  },

  button_container:{
    flex:0.3,
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
