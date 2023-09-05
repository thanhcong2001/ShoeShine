import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, FlatList, ScrollView, Button } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import heart from '../assets/heart.png'
import vu from '../assets/vu.jpg'
import rating1 from '../assets/rating1.png'
const StoreDetails = ({ route, navigation }) => {
  const { storeImage, storeName, Distance } = route.params;
  const TypeOfShoes = [
    { id: '1', type: 'Leather Shoes' },
    { id: '2', type: 'Sport Shoes' },
    { id: '3', type: 'Western Shoes' },
    { id: '4', type: 'Work boots' },
    { id: '5', type: 'Running shoes' },
  ];
  const renderTypeItem = ({ item }) => (
    <TouchableOpacity style={styles.Circle}>
      <Text style={{ fontWeight: 'bold', color: '#223263' }}>{item.type}</Text>
    </TouchableOpacity>
  );

  const ServiceOfShoes = [
    { id: '1', type: 'Standard Hygiene' },
    { id: '2', type: 'Yellow Stain Remover' },
    { id: '3', type: 'Shoe Restoration' },
    { id: '4', type: 'Deep Undersole Detail' },
    { id: '5', type: 'Lace Removal & Cleaning' },

  ];
  const renderServiceItem = ({ item }) => (
    <TouchableOpacity style={styles.Circle}>
      <Text style={{ fontWeight: 'bold', color: '#223263' }}>{item.type}</Text>
    </TouchableOpacity>
  );

  const ImageOfFeedBack = [
    { id: '1', imageUrl: 'https://i.pinimg.com/564x/9c/9f/b6/9c9fb6561174109d521064d2efb4d6cb.jpg' },
    { id: '2', imageUrl: 'https://i.pinimg.com/564x/4e/f3/a1/4ef3a14ef067abdee38b5436f46f38a8.jpg' },
    { id: '3', imageUrl: 'https://i.pinimg.com/564x/d0/fe/53/d0fe531d75a9472c4a630afce2f032e4.jpg' },
    { id: '4', imageUrl: 'https://www.iuoss.com/wp-content/uploads/2017/09/1-1024x683.jpg' },
    { id: '5', imageUrl: 'https://www.iuoss.com/wp-content/uploads/2017/09/1-1024x683.jpg' },
  ];
  const numberOfItemsToShow = 3; // Render component number
  const limitedStoreRecommemed = ImageOfFeedBack.slice(0, numberOfItemsToShow);
  const renderImageFeed = ({ item }) => (
    <View>
      <Image source={{ uri: item.imageUrl }} style={styles.ImageStore} />
    </View>
  );

  const storeNear = [
    { id: '1', name: 'Store Mr.Phui', distance: '1.2km', location: 'District 8', image: require('../assets/Phui.jpg') },
    { id: '2', name: 'BB Cleaning', distance: '4km', location: 'District 3', image: require('../assets/BBCleaning.jpg') },
    { id: '3', name: 'Store DR.Thong', distance: '5km', location: 'Thu Duc City', image: require('../assets/DrThong.jpg') },
    { id: '4', name: 'Sneaker Vitamin', distance: '7km', location: 'District 8', image: require('../assets/vitamin.jpg')},
    { id: '5', name: 'Sneaker Buzz', distance: '9km', location: 'District 8', image: require('../assets/Buzz.jpg') },
    { id: '6', name: 'Store X-Clean', distance: '10km', location: 'District 1', image: require('../assets/xClean.jpg') },
    { id: '7', name: 'Store DR.Thong', distance: '5km', location: 'Thu Duc City', image: require('../assets/DrThong.jpg') },
    { id: '8', name: 'Sneaker Vitamin', distance: '7km', location: 'District 8', image: require('../assets/vitamin.jpg')},
    { id: '9', name: 'Sneaker Buzz', distance: '9km', location: 'District 8', image: require('../assets/Buzz.jpg') },
    { id: '10', name: 'Store X-Clean', distance: '10km', location: 'District 1', image: require('../assets/xClean.jpg') },
  ];
  const renderStoreItem = ({ item }) => (

    <TouchableOpacity style={styles.Recommended} onPress={() => {
      navigation.navigate('StoreDetails', { storeName: item.name,Distance:item.distance,storeImage:item.image})
    }}>
      <Image source={item.image} style={styles.ImageStore1} />
      <Text style={styles.StoreName}>{item.name}</Text>
      <Image style={{ width: wp('20%'), height: hp('1.8%') }} source={rating1} />
      <Text style={styles.StoreLocation}>{item.distance}</Text>
      <Text style={styles.StoreLocation}>{item.location}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.All}>
      <ScrollView>
        <ImageBackground style={styles.CleaningPic} source={storeImage} imageStyle={{
          borderRadius: 6, borderWidth: 1,
          borderColor: 'black',
        }}>
        </ImageBackground>
        <View style={styles.Title}>
          <Text style={{ marginLeft: wp('6%'), fontWeight: 'bold', fontSize: wp('6%') }}>{storeName}</Text>
          <TouchableOpacity>
            <Image source={heart} style={{ width: wp('7%'), height: hp('3%'), marginRight: wp('4.5%'), marginTop: hp('0.6%') }} />
          </TouchableOpacity>
        </View>
        <View>
          <Image style={{ marginLeft: wp('6%'), width: wp('30%'), height: hp('5%') }} source={rating1} />
        </View>
        <View>
          <Text style={{ color: '#40BFFF', fontWeight: 'bold', marginLeft: wp('6%'), fontSize: wp('4%'), marginTop: hp('1.5%') }}>Distance {Distance}</Text>
        </View>
        <View>
          <Text style={{ color: '#223263', fontWeight: 'bold', marginLeft: wp('6%'), fontSize: wp('4.5%'), marginTop: hp('3%') }}>Select Type Shoes</Text>
        </View>
        <View>
          <FlatList
            data={TypeOfShoes}
            keyExtractor={item => item.id}
            renderItem={renderTypeItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.TypeList}
          />
        </View>
        <View>
          <Text style={{ color: '#223263', fontWeight: 'bold', marginLeft: wp('6%'), fontSize: wp('4.5%'), marginTop: hp('3%') }}>Option Service</Text>
        </View>
        <View>
          <FlatList
            data={ServiceOfShoes}
            keyExtractor={item => item.id}
            renderItem={renderServiceItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.TypeList}
          />
        </View>
        <View>
          <Text style={{ color: '#223263', fontWeight: 'bold', marginLeft: wp('6%'), fontSize: wp('4.5%'), marginTop: hp('3%') }}>Specification</Text>
        </View>
        <View style={styles.Specification}>
          <Text style={{ color: '#223263', marginLeft: wp('6%'), fontSize: wp('3.2%'), marginTop: hp('3%') }}>Service:</Text>
          <View>
            <Text style={{ color: '#9098B1', marginLeft: wp('6%'), fontSize: wp('3%'), marginTop: hp('3%'), marginRight: wp('3%') }}>Convenient</Text>
            <Text style={{ color: '#9098B1', marginLeft: wp('6%'), fontSize: wp('3%'), marginTop: hp('1%') }}>Quality</Text>
            <Text style={{ color: '#9098B1', marginLeft: wp('6%'), fontSize: wp('3%'), marginTop: hp('1%') }}>Assurance</Text>
          </View>
        </View>
        <View>
          <Text style={{ color: '#223263', marginLeft: wp('6%'), fontSize: wp('3%'), marginTop: hp('3%') }}>Store Commitment:</Text>
          <Text style={{ color: '#9098B1', marginLeft: wp('6%'), fontSize: wp('3.2%'), marginTop: hp('2%') }}>Separate process for each shoe material, Dedicated, experienced staff, Imported solution, safe for shoes, Track progress, order status anytime, anywhere</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: '#223263', fontWeight: 'bold', marginLeft: wp('6%'), fontSize: wp('4.5%'), marginTop: hp('3%') }}>Review Store</Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Review')
          }}>
            <Text style={{ color: '#223263', fontWeight: 'bold', marginLeft: wp('6%'), fontSize: wp('4.5%'), marginTop: hp('3%'), color: '#40BFFF', marginRight: wp('3%') }}>See More</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image style={{ marginLeft: wp('6%'), width: wp('30%'), height: hp('5%') }} source={rating1} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Image style={{ marginLeft: wp('6%'), width: wp('15%'), height: hp('7%'), borderRadius: 30, borderWidth: 2, marginTop: hp('3.5%') }} source={vu} />
          </View>
          <View >
            <Text style={{ color: '#223263', fontWeight: 'bold', marginLeft: wp('2%'), fontSize: wp('4.5%'), marginTop: hp('3%') }}>Nguyễn Tuấn Vũ</Text>
            <Image style={{ marginLeft: wp('2%'), width: wp('30%'), height: hp('5%') }} source={rating1} />
          </View>
        </View>
        <View>
          <Text style={{ marginLeft: wp('6%'), paddingRight: wp('1%') }}>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</Text>
        </View>
        <View>
          <FlatList
            data={limitedStoreRecommemed}
            keyExtractor={item => item.id}
            renderItem={renderImageFeed}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.StoreList}
          />
        </View>
        <View>
          <Text style={{ color: '#223263', fontWeight: 'bold', marginLeft: wp('6%'), fontSize: wp('4.5%'), marginTop: hp('3%') }}>You Might Also Like</Text>
        </View>
        <View>
          <FlatList
            data={storeNear}
            keyExtractor={item => item.id}
            renderItem={renderStoreItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.StoreList}
          />
        </View>
        <View style={styles.Button}>
          <Button title='Booking Service' />
        </View>
      </ScrollView>
    </View>
  )
}

export default StoreDetails

const styles = StyleSheet.create({
  All: {
    backgroundColor: 'white',
    flex: 1,
    paddingRight: wp('1%'),
    borderTopWidth: 1,
    borderColor: '#EBF0FF'
  },
  CleaningPic: {
    alignSelf: 'center',
    marginTop: hp('2.6%'),
    marginLeft: wp('1%'),
    width: wp('90%'),
    height: hp('25.2%'),
    marginBottom: hp('1.5%'),
    alignSelf: 'center'
  },
  Title: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Circle: {
    flex: 1,
    width: wp('38%'),
    height: hp('8%'),
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#1A2F6E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp('2%')
  },
  TypeList: {
    marginTop: hp('2%'),
    marginLeft: wp('6%'),
    paddingRight: wp('6%'),
  },
  Specification: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  StoreList: {
    marginTop: hp('1%'),
    marginLeft: wp('6%'),
    paddingRight: wp('6%'),
  },
  ImageStore: {
    width: wp('30%'),
    height: hp('10%'),
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    backgroundColor: 'white',
    marginRight: wp('1%')
  },
  ImageStore1: {
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
    marginLeft: wp('1%'),
    elevation: 5,
    marginTop: hp('1%'),
  },
  Recommended: {
    paddingLeft: wp('3%'),
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#e9f2eb',
    width: wp('43.5%'),
    height: hp('28%'),
    paddingTop: hp('1.2%'),
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 20,
    backgroundColor: 'white',
    marginRight: wp('1%'),
    marginLeft: wp('1%'),
    elevation: 5,
    marginTop: hp('1%'),
    marginBottom: hp('0.7%')
  },
  Button: {
    width: wp('90%'),
    marginLeft: wp('6.8%'),
    borderRadius: 20,
    paddingTop: wp('2%'),
    paddingBottom: wp('5%')
  }
})