import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import sportProduct from '../assets/sportShoe1.jpg'
import trash from '../assets/delete.png'

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.Line}></View>
      <View style={styles.Products}>
        <View>
          <Image source={sportProduct} style={styles.Picture} />
        </View>
        <View style={styles.TitileProducts}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#223263', marginBottom: hp('1%') }}>Leather Shoes</Text>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#FB7181', marginBottom: hp('0.5%') }}>Standard Hygiene</Text>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#40BFFF', marginBottom: hp('0.5%') }}>50.000</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Image style={styles.Trash} source={trash} />
          </TouchableOpacity>
          <View style={styles.counter}>
            <Pressable onPress={decrementQuantity} style={styles.button}>
              <Text style={{ marginLeft: 10, fontSize: wp('5%'), fontWeight: 'bold', color: '#9098B1' }}>-</Text>
            </Pressable>
            <Text style={styles.quantity}>{quantity}</Text>
            <Pressable onPress={incrementQuantity} style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Txt: {
    textAlign: 'center',
    marginTop: hp('12%')
  },
  Line: {
    width: wp('100%'),
    borderTopWidth: 1.5,
    borderColor: "#F6F4D9",
  },
  Products: {
    borderWidth: 1.5,
    borderColor: '#F6F4D9',
    width: wp('90%'),
    height: hp('15.5%'),
    paddingTop: hp('2%'),
    marginLeft: wp('5%'),
    marginTop: hp('1.5%'),
    borderRadius: 10,
    flexDirection: 'row'
  },
  Picture: {
    width: wp('25%'),
    height: hp('11%'),
    borderRadius: 5,
    marginLeft: wp('4%')
  },
  TitileProducts: {
    marginLeft: wp('2%')
  }
  ,
  counter: {
    flexDirection: 'row',
    borderWidth: 1.5,
    borderColor: "#F6F4D9",
    height: hp('4%'),
    marginTop: hp('3.5%'),
    borderRadius: 5
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: wp('5%'),
    textAlign: 'center'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9098B1'
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 10,
    backgroundColor: '#EBF0FF',
    paddingLeft: wp('2%'),
    paddingRight: wp('2%'),
    height: hp('4%'),
    width: wp('9%'),
    textAlign: 'center',
    paddingTop: hp('0.5%')
  },
  Trash: {
    height: hp('4%'),
    width: wp('8%'),
    marginLeft: wp('18%')
  }
})