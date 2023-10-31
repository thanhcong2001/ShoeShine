import { StyleSheet, View, SafeAreaView, Image, TextInput, ImageBackground, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import search from '../assets/loupe.png'
import heart from '../assets/heart.png'
import notification from '../assets/notification.png'
import shoe3 from '../assets/shoe3.jpg'
import shops from '../assets/shops.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const Explore = () => {
  return (
    <View style={styles.All}>
      <SafeAreaView style={styles.Container}>
        <View style={styles.Search}>
          <Image source={search} style={styles.SearchIcon} />
          <TextInput
            placeholder="Search Store"
          // value={username}
          // onChangeText={text => setUsername(text)}
          />
        </View>
        <View style={styles.IconOne}>
          <Image source={heart} style={{ width: 25, height: 25, marginRight: 10 }} />
          <Image source={notification} style={{ width: 25, height: 25 }} />
        </View>
      </SafeAreaView>
      <View>
        <ImageBackground style={styles.CleaningPic} source={shoe3} imageStyle={{
          borderRadius: 6, borderWidth: 1,
          borderColor: 'black',
        }}>
        </ImageBackground>
      </View>

      <View style={styles.check}>
        <Text style={{ fontWeight: 'bold', color: '#223263', paddingLeft: wp('5.5%'), fontSize: wp('5%'),paddingBottom:hp('2%'),paddingTop:hp('1.5%') }}>Store Recomended</Text>
      </View>
      <View style={styles.EventList}>
        <TouchableOpacity style={styles.Icon}>
          <View style={styles.Circle}>
            <Image source={shops} style={styles.EventIcon} />
          </View>
          <Text style={{ marginTop:'7%' }}>Store Cheap</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Icon}>
          <View style={styles.Circle}>
            <Image source={shops} style={styles.EventIcon} />
          </View>
          <Text style={{ marginTop:'7%' }}>Store 5 Star</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Icon}>
          <View style={styles.Circle}>
            <Image source={shops} style={styles.EventIcon} />
          </View>
          <Text style={{ marginTop:'7%' }}>Multi-Service</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.check}>
        <Text style={{ fontWeight: 'bold', color: '#223263',paddingLeft: wp('5.5%'), fontSize: wp('5%'),paddingBottom:hp('2%'),paddingTop:hp('3%')  }}>Store Near You</Text>
      </View>
      <View style={styles.EventList}>
        <TouchableOpacity style={styles.Icon}>
          <View style={styles.Circle}>
            <Image source={shops} style={styles.EventIcon} />
          </View>
          <Text style={{ marginTop:'7%' }}>Store Cheap</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Icon}>
          <View style={styles.Circle}>
            <Image source={shops} style={styles.EventIcon} />
          </View>
          <Text style={{ marginTop:'7%' }}>Store 5 Star</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Icon}>
          <View style={styles.Circle}>
            <Image source={shops} style={styles.EventIcon} />
          </View>
          <Text style={{ marginTop:'7%' }}>Multi-Service</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.check}>
        <Text style={{ fontWeight: 'bold', color: '#223263', paddingLeft: '4.5%', fontSize: 15 }}>Event Store</Text>
      </View>
      <View style={styles.EventList}>
        <TouchableOpacity style={styles.Icon}>
          <View style={styles.Circle}>
            <Image source={shops} style={styles.EventIcon} />
          </View>
          <Text style={{ marginTop:'7%' }}>Store Cheap</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Icon}>
          <View style={styles.Circle}>
            <Image source={shops} style={styles.EventIcon} />
          </View>
          <Text style={{ marginTop:'7%' }}>Store 5 Star</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Icon}>
          <View style={styles.Circle}>
            <Image source={shops} style={styles.EventIcon} />
          </View>
          <Text style={{ marginTop:'7%' }}>Multi-Service</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  )
}

export default Explore

const styles = StyleSheet.create({
  Icon: {
    alignItems: 'center',
    marginBottom: '2%',
  },
  All: {
    flex: 1,
    backgroundColor: 'white',
  },
  Container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  Search: {
    marginTop: hp('7%'),
    marginRight:wp('4%'),
    width: wp('68%'),
    height: hp('6.3%'),
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: wp('2.5%'),
    backgroundColor: 'white'
  },
  SearchIcon: {
    width: wp('5.2%'),
    height: hp('2.5%'),
    marginRight:wp('3%'),
  },
  IconOne: {
    flexDirection: 'row',
    marginTop: hp('7%'),
    alignItems: 'center',
    marginLeft: wp('2%'),
  },
  CleaningPic: {
    marginTop: hp('2.6%'),
    marginLeft:wp('1%'),
    width: wp('90%'),
    height: hp('25.2%'),
    marginBottom: hp('1.5%'),
    alignSelf: 'center'
  },
  EventList: {
    marginTop: hp('2%'),
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  EventIcon: {
    width: wp('11%'),
    height: hp('5.5%'),
  },
  Circle: {
    width: wp('17%'),
    height: hp('8%'),
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#1A2F6E',
    justifyContent: 'center',
    alignItems: 'center',
  },
})