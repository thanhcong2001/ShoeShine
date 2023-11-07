import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Pressable, TextInput, Button, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import sportProduct from '../assets/sportShoe1.jpg'
import { useFocusEffect, useRoute } from '@react-navigation/native';
import trash from '../assets/delete.png'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getData } from '../utils/asyncStorageUtil';

const Cart = ({ navigation }) => {
  const route = useRoute();
  const [data, setData] = useState([]);
  const [selectedService, setSelectedService] = useState(null)
  const [serviceList, setServiceList] = useState(null)
  const [userId, setUserId] = useState(AsyncStorage.getItem('userId'))
  const [order, setOrder] = useState([]);
  const [products, setListProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState('');
  const [items, setItems] = useState('');
  const [total, setTotal] = useState();
  const [cart, setCart] = useState([])


  useEffect(() => {
    getBooking();
  }, []);
  useEffect(() => {
    if (products) {
      cartItems();
    }
  }, [products]);  

  const PriceTotal = () => {
    setTotalPrice(cart[0]?.priceService)
    console.log("Thanh Cong: ", cart[0]?.priceService);
    setTotal(totalPrice * items)
  }
  const cartItems = async () => {
    var dataToSend = {
      "serviceId": products.serviceId,
      "storeId": products.storeId,
      "categoryIdArray": products.categoryIdArray
    }
    await axios.post('http://shoeshine-001-site1.ftempurl.com/api/bookings/cart', dataToSend)
      .then(res => {
        if (res.status === 200) {
          setCart(res.data)
        }
        else {
          console.log("Lỗi");
        }
      })
      .catch(err => {
        console.log(err);
      })

  }

  const getBooking = () => {
    getData()
      .then(orders => {
        setData(orders);
        if (orders.length > 0) {
          const lastOrder = orders[orders.length - 1];
          setListProduct(lastOrder);
          const numberOfIds = lastOrder.categoryIdArray.length;
          console.log("Tuan Vu: ", lastOrder.categoryIdArray.length);
          setItems(numberOfIds);
        }
        // Các xử lý khác ở đây nếu cần
      })
      .catch(error => {
        // Xử lý lỗi ở đây nếu cần
      });
  };
  const getService = async () => {
    await axios.get('http://shoeshine-001-site1.ftempurl.com/api/services')
      .then(res => {
        setServiceList(res.data)
      })
      .catch(err => { })
  }

  const createOrder = async () => {
    const data = {
      paymentMethodId: 1,
      userId: userId._j,
      address: '148/4A Thanh Pho Ho Chi Minh',
      totalPrice: total,
      shipfee: 5000,
      quantityItem: items
    }
    await axios.patch(`http://shoeshine-001-site1.ftempurl.com/api/orders`, data)
      .then(res => {
        navigation.navigate(`Payment`)
      })
      .catch(err => { console.log(err) })
  }

  const [quantity, setQuantity] = useState(1);

  function convertVND(price) {
    if (price != null || price != undefined || price != '' || price) return price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
    else return 0
  } ``

  const incrementQuantity = (id) => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.Line}></View>
      <ScrollView>
        {cart?.map((name, id) =>
          <View style={styles.Products} key={id}>
            <View>
              <Image source={sportProduct} style={styles.Picture} />
            </View>
            <View style={styles.TitileProducts}>
              <View>
                <Text style={{ fontSize: wp('4%'), fontWeight: 'bold', color: '#223263', marginBottom: hp('1%') }}>{name.nameCategory}</Text>
                <Text style={{ fontSize: wp('3.2%'), fontWeight: 'bold', color: '#FB7181', marginBottom: hp('0.5%') }}>{name.nameService}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: wp('3.2%'), fontWeight: 'bold', color: '#40BFFF', marginBottom: hp('0.5%'), width: wp('13.3%') }}>{name.priceService}</Text>
                <View style={styles.counter}>
                  <Pressable onPress={decrementQuantity} style={styles.button}>
                    <Text style={{ marginLeft: wp('3%'), fontSize: wp('5%'), fontWeight: 'bold', color: '#9098B1' }}>-</Text>
                  </Pressable>
                  <Text style={styles.quantity}>{quantity}</Text>
                  <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                  </Pressable>
                </View>
              </View>
            </View>
            <View>
            </View>
          </View>
        )}
      </ScrollView>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.Border}>
          <TextInput
            placeholder="Enter Cupon Code"
          />
        </View>
        <TouchableOpacity style={styles.ButtonVoucher}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Apply</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Details}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ marginRight: wp('45%'), marginBottom: hp('2%'), color: '#40BFFF' }}>Items({items})</Text>
          <Text>{total}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ marginRight: wp('48%'), marginBottom: hp('6%'), color: '#40BFFF' }}>Shipping</Text>
          <Text style={{ marginLeft: wp('10%') }}>0</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ marginRight: wp('41%'), fontWeight: 'bold' }}>Total Price</Text>
          <Text style={{ color: '#40BFFF', fontWeight: 'bold' }}>{total}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.NextButton} onPress={cartItems}>
          <Text style={{ marginLeft: wp('35%'), marginTop: hp('0.5%'), color: 'white', fontSize: wp('4.5%'), fontWeight: 'bold' }}>Next</Text>
        </TouchableOpacity>
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
    borderRadius: 5,
    marginLeft: wp('18%')
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: wp('5%'),
    textAlign: 'center'
  },
  buttonText: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: '#9098B1',
    fontSize: wp('5%'),
    width: wp('5%')
  },
  quantity: {
    fontSize: wp('3.5%'),
    marginHorizontal: wp('3%'),
    backgroundColor: '#EBF0FF',
    paddingLeft: wp('2%'),
    paddingRight: wp('2%'),
    height: hp('3.6%'),
    width: wp('9%'),
    textAlign: 'center',
    paddingTop: hp('0.5%')
  },
  Trash: {
    height: hp('3%'),
    width: wp('6%'),
  },
  Border: {
    borderWidth: 1.5,
    borderColor: '#F6F4D9',
    width: wp('70%'),
    height: hp('6%'),
    paddingTop: hp('1.5%'),
    marginLeft: wp('5%'),
    marginTop: hp('1.5%'),
    borderRadius: 10,
    flexDirection: 'row',
    paddingLeft: wp('4%'),
    paddingBottom: hp('1%')
  },
  ButtonVoucher: {
    borderWidth: 1.5,
    borderColor: '#F6F4D9',
    width: wp('20%'),
    height: hp('6%'),
    paddingTop: hp('1.5%'),
    paddingLeft: wp('4.5%'),
    marginTop: hp('1.5%'),
    marginLeft: wp('1%'),
    borderRadius: 10,
    backgroundColor: '#40BFFF',
  },
  Details: {
    borderWidth: 1.5,
    borderColor: '#F6F4D9',
    width: wp('90%'),
    height: hp('20%'),
    paddingTop: hp('1%'),
    marginLeft: wp('5%'),
    marginTop: hp('1.5%'),
    borderRadius: 10,
  },
  NextButton: {
    borderWidth: 1.5,
    borderColor: '#F6F4D9',
    width: wp('90%'),
    height: hp('8%'),
    paddingTop: hp('1.5%'),
    marginLeft: wp('5%'),
    marginTop: hp('12%'),
    borderRadius: 10,
    flexDirection: 'row',
    paddingLeft: wp('4%'),
    paddingBottom: hp('1%'),
    backgroundColor: '#40BFFF'
  }
})