import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import user1 from '../assets/user1.png'
import sent from '../assets/sent.png'
import appointment from '../assets/appointment.png'
import location from '../assets/location.png'
import creditCard from '../assets/payment.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Setting = ({ navigation }) => {
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    // Khi nút được nhấn vào, đảo ngược trạng thái
    navigation.navigate('Profile')
  };
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={handlePress}>
        <View style={styles.Account}>
          <Image source={user1} style={styles.Image} />
          <Text style={styles.Title}>Profile</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.Account}>
          <Image source={sent} style={styles.Image} />
          <Text style={styles.Title}>Order</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.Account}>
          <Image source={appointment} style={styles.Image} />
          <Text style={styles.Title}>Booking Service</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.Account}>
          <Image source={location} style={styles.Image} />
          <Text style={styles.Title}>Address</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.Account}>
          <Image source={creditCard} style={styles.Image} />
          <Text style={styles.Title}>Payment</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Account: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth:1.5,
    borderColor: '#c5cfbc',
    height: hp('8.5%'),
    paddingLeft: wp('5%'),
  },
  Image: {
    width: wp('9%'),
    height: hp('4.5%'),
  },
  Title: {
    fontSize: wp('3.6%'),
    marginLeft: wp('7%'),
    fontWeight: 'bold',
    color: '#223263'
  },
  ButtonPressed: {
    height: hp('10%'),
    backgroundColor: '#AFDCF2',
    marginTop: hp('3%'),
    justifyContent: 'center'
  },
})