import { Image, StyleSheet, Text, View, ImageBackground, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import shoe1 from '../assets/shoe1.jpg'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const StoreNearYou = () => {
  const storeNear = [
    { id: '1', name: 'Shoes Health', distance: '500m', image: require('../assets/laudary.jpg') },
    { id: '2', name: 'Cosmo Store', distance: '700m', image: require('../assets/cosmo.jpg') },
    { id: '3', name: 'DuboShop', distance: '1km', image: require('../assets/dubo.jpg') },
    { id: '4', name: 'Shoes Health', distance: '1.5km', image: require('../assets/laudary.jpg') },
    { id: '5', name: 'Shoes Health', distance: '500m', image: require('../assets/laudary.jpg') },
    { id: '6', name: 'Cosmo Store', distance: '700m', image: require('../assets/cosmo.jpg') },
    { id: '7', name: 'DuboShop', distance: '1km', image: require('../assets/dubo.jpg') },
    { id: '8', name: 'Shoes Health', distance: '1.5km', image: require('../assets/laudary.jpg') },
    { id: '9', name: 'Shoes Health', distance: '500m', image: require('../assets/laudary.jpg') },
    { id: '10', name: 'Cosmo Store', distance: '700m', image: require('../assets/cosmo.jpg') },
    { id: '11', name: 'DuboShop', distance: '1km', image: require('../assets/dubo.jpg') },
    { id: '12', name: 'Shoes Health', distance: '1.5km', image: require('../assets/laudary.jpg') },
  ];

  const renderStoreItem = ({ item }) => (
    <TouchableOpacity style={styles.Store}>
      <Image source={item.image} style={styles.ImageStore} />
      <Text style={styles.StoreName}>{item.name}</Text>
      <Text style={styles.StoreLocation}>{item.distance}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.All}>
      <View style={styles.Container}>
        <ImageBackground style={styles.CleaningPic} source={shoe1} imageStyle={{
          borderRadius: 6, borderWidth: 1,
          borderColor: 'black',
        }}>
        </ImageBackground>
      </View>
      <View style={styles.RecommendStore}>
        <FlatList
          data={storeNear}
          renderItem={renderStoreItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    </View>
  )
}

export default StoreNearYou

const styles = StyleSheet.create({
  All: {
    flex: 1,
    backgroundColor: 'white',
  },
  Container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  CleaningPic: {
    marginTop: hp('2.6%'),
    marginLeft:wp('1%'),
    width: wp('90%'),
    height: hp('25.2%'),
    marginBottom: hp('1.5%'),
    alignSelf: 'center'
  },
  Store: {
    paddingLeft: wp('3%'),
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#e9f2eb',
    width: wp('43.5%'),
    height: hp('25.5%'),
    paddingTop: hp('1.2%'),
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 20,
    backgroundColor: 'white',
    marginRight: wp('1%'),
    marginTop: wp('0.2%'),
    marginLeft: wp('1%'),
    elevation: 5,
    marginBottom:hp('1%'),
  },
  ImageStore: {
    width: wp('37%'),
    height: hp('15%'),
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  StoreName: {
    paddingTop: 5,
    fontWeight: 'bold',
    color: '#223263'
  },
  StoreLocation: {
    fontWeight: 'bold',
    color: '#40BFFF'
  },
  RecommendStore: {
    alignItems:'center',
    flex:1,
  },
})