import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const UpdateName = () => {
  return (
    <View style={styles.Container}>
      <View>
        <View >
          <Text style={styles.Title}>First Name</Text>
          <TextInput style={styles.Circle}
            placeholder='Nguyễn'
          />
        </View>
        <View >
          <Text style={styles.Title}>Last Name</Text>
          <TextInput style={styles.Circle}
            placeholder='Tuấn Vũ'
          />
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.Button} activeOpacity={0.7}>
          <Text style={styles.Txt}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default UpdateName

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#EBF0FF',
    paddingLeft: wp('4%'),
    paddingRight: wp('4%'),
    justifyContent:'space-between'
  },
  Title: {
    fontWeight: 'bold',
    fontSize: wp('5%'),
    paddingTop: hp('2%'),
    paddingBottom: hp('2%')
  },
  Circle: {
    borderWidth: 2,
    borderRadius: 10,
    height: hp('6.5%'),
    borderColor: '#EBF0FF',
    paddingLeft: wp('5%'),
    fontWeight: 'bold',
    color: '#9098B1',
    fontSize: wp('4%')
  },
  Button: {
    borderWidth: 2,
    borderRadius: 10,
    height: hp('7%'),
    borderColor: '#EBF0FF',
    paddingLeft: wp('5%'),
    backgroundColor: '#40BFFF',
    marginBottom:hp('2%')
  },
  Txt: {
    alignSelf: 'center',
    marginTop: hp('1.7%'),
    fontWeight: 'bold',
    color: 'white',
    fontSize: wp('4.4%')
  }
})