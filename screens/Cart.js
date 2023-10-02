import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Cart = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <Text style={styles.Txt}>Không có sản phẩm</Text>
    </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:'white'
  },
  Txt:{
    textAlign:'center',
    marginTop:hp('12%')
  }
})