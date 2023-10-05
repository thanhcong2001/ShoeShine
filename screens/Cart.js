import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Cart = ({route}) => {
  // const { options,services} = route.params;
  return (
    <SafeAreaView style={styles.Container}>
      <Text style={styles.Txt}>Không có sản phẩm</Text>
      {/* {options.map((option)=>(
      <Text style={{ marginLeft: wp('6%'), fontWeight: 'bold', fontSize: wp('6%') }}>{JSON.stringify(option)}</Text>
      ))}
      <Text style={{ marginLeft: wp('6%'), fontWeight: 'bold', fontSize: wp('6%') }}>{services}</Text> */}
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