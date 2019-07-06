import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

export default class summary extends Component {

  constructor(props) {
    super(props);

    let params = this.props.navigation.state.params;
    this.state = {
      total:params.total,
      foodName:params.foodName,
      foodCost:params.foodCost,
      foodQuantity:params.foodQuantity,
      drinkName:params.drinkName,
      drinkCost:params.drinkCost,
      drinkQuantity:params.drinkQuantity,



    };

  }
  render() {

    return(

      <View style={styles.container}>


        <View style={styles.image_container}>

          <Image
              source={require('./assets/success-green.png')}
              style={{width: 64, height: 64,}}
            />
        </View>



        <Text style={{textAlign: 'center',fontSize: 26, paddingTop:15,}}>	Thank You!	</Text>

        <Text style={{textAlign: 'center',fontSize: 16, paddingTop:15,}}>	Your order will be ready for pickup in 15 minutes.	</Text>


        <Text style={{textAlign: 'center',fontSize: 16, paddingTop:15,}}>	Here is the summary of your order.	</Text>
        { this.state.foodName != "" ? (


          <View style={styles.order_details}>
            <Image
                source={require('./assets/food.png')}
                style={styles.food_drink_image}
            />
            <Text	style={styles.quantity}>
              {this.state.foodQuantity}
            </Text>

            <Text	style={styles.multiplier}>
              X
            </Text>

            <Text	style={styles.name}>
              {this.state.foodName}
            </Text>

            <Text	style={styles.cost}>
              ${this.state.foodCost}
            </Text>

          </View>


        ) : null  }



        { this.state.drinkName != "" ? (


          <View style={styles.order_details}>
            <Image
                source={require('./assets/drink.png')}
                style={styles.food_drink_image}
            />
            <Text	style={styles.quantity}>
              {this.state.drinkQuantity}
            </Text>

            <Text	style={styles.multiplier}>
              X
            </Text>

            <Text	style={styles.name}>
              {this.state.drinkName}
            </Text>

            <Text	style={styles.cost}>
              ${this.state.drinkCost}
            </Text>

          </View>


        ) : null  }

      <View style={styles.total}>
        <Text	style={{marginTop:	30, fontSize:22,}}>	Total:	${this.state.total}</Text>


      </View>


      <Text style={{textAlign: 'center',fontSize: 16, paddingTop:50, padding:5,}}>	App developed by Rekha (44448198), Fahad (45685096), and Prakash (45856095).	</Text>



      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image_container:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:20,
  },
  total:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  order_details:{
    // flex:1,
    flexDirection: 'row',
    padding:10,

  },
  food_drink_image:{
    width: 60,
    height: 60,
    borderRadius:10,
    margin:10,
  },
  quantity:{
    flex:0.4,
    flexDirection: 'column',
    margin:10,
    fontSize:18,
    paddingTop:15,

  },
  multiplier:{
    flex:0.4,
    flexDirection: 'column',
    margin:10,
    fontSize:18,
    paddingTop:15,

  },
  name:{
    flex:2,
    flexDirection: 'column',
    margin:10,
    fontSize:18,
    paddingTop:15,
    minWidth:30,

  },
  cost:{
    flex:1,
    flexDirection: 'column',
    margin:10,
    fontSize:18,
    paddingTop:15,
    minWidth:30,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',


  }
});
