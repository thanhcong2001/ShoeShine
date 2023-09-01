import { Text, StyleSheet, View, SafeAreaView, Image, TextInput, ImageBackground, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import search from '../assets/loupe.png'
import heart from '../assets/heart.png'
import notification from '../assets/notification.png'
import cleaning from '../assets/washing.jpg'
import Countdown from 'react-native-countdown-component';
import ticket from '../assets/ticket.png'
import report from '../assets/report.png'
import facebook from '../assets/facebook.png'
import call from '../assets/call.png'
import googleMap from '../assets/googleMap.jpg'
import store from '../assets/store.jpg'
import rating from '../assets/rating.png'
import rating1 from '../assets/rating1.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const HomePage = ({ navigation }) => {
  //Store near you
  const storeNear = [
    { id: '1', name: 'Shoes Health', distance: '500m', image: require('../assets/laudary.jpg') },
    { id: '2', name: 'Cosmo Store', distance: '700m', image: require('../assets/cosmo.jpg') },
    { id: '3', name: 'DuboShop', distance: '1km', image: require('../assets/dubo.jpg') },
    { id: '4', name: 'Shoes Health', distance: '1.5km', image: require('../assets/laudary.jpg') },
    { id: '5', name: 'Shoes Health', distance: '500m', image: require('../assets/laudary.jpg') },
    { id: '6', name: 'Cosmo Store', distance: '700m', image: require('../assets/cosmo.jpg') },
  ];
  const numberOfItems = 4; // Render component number
  const limitedStoreNear = storeNear.slice(0, numberOfItems);
  const renderStoreItem = ({ item }) => (

    <TouchableOpacity style={styles.Store} onPress={() => {
      navigation.navigate('StoreDetails', { storeName: item.name, storeImage: item.image, Distance: item.distance})
    }}>
      <Image source={item.image} style={styles.ImageStore} />
      <Image style={{width:wp('20%'),height:hp('2.2%')}} source={rating1}/>
      <Text style={styles.StoreName}>{item.name}</Text>
      <Text style={styles.StoreLocation}>{item.distance}</Text>
    </TouchableOpacity>
  );
  // Recommended Store
  const storeRecommemed = [
    { id: '1', name: 'Store Mr.Phui', distance: '1.2km', location: 'District 8', imageUrl: 'https://www.iuoss.com/wp-content/uploads/2017/09/1-1024x683.jpg' },
    { id: '2', name: 'BB Cleaning', distance: '4km', location: 'District 3', imageUrl: 'https://alltop.vn/backend/media/images/posts/1813/BB.Cleaning-124037.jpg' },
    { id: '3', name: 'Store DR.Thong', distance: '5km', location: 'Thu Duc City', imageUrl: 'https://images.foody.vn/res/g72/712142/prof/s/foody-upload-api-foody-mobile-foody-mobile-tt132-j-181116095139.jpg' },
    { id: '4', name: 'Sneaker Vitamin', distance: '7km', location: 'District 8', imageUrl: 'https://afamilycdn.com/150157425591193600/2020/10/29/photo-1-16039495200851709893576-1603950286888-16039502871581213394662.jpg' },
    { id: '5', name: 'Sneaker Buzz', distance: '9km', location: 'District 8', imageUrl: 'https://channel.mediacdn.vn/thumb_w/640/2019/1/2/photo-1-15464333812922128250200.jpg' },
    { id: '6', name: 'Store X-Clean', distance: '10km', location: 'District 1', imageUrl: 'https://static.riviu.co/960/image/2020/12/12/fd192faf7a9edf892baef1ae2f1f4eb8_output.jpeg' },
    { id: '7', name: 'Store DR.Thong', distance: '5km', location: 'Thu Duc City', imageUrl: 'https://images.foody.vn/res/g72/712142/prof/s/foody-upload-api-foody-mobile-foody-mobile-tt132-j-181116095139.jpg' },
    { id: '8', name: 'Sneaker Vitamin', distance: '7km', location: 'District 8', imageUrl: 'https://afamilycdn.com/150157425591193600/2020/10/29/photo-1-16039495200851709893576-1603950286888-16039502871581213394662.jpg' },
    { id: '9', name: 'Sneaker Buzz', distance: '9km', location: 'District 8', imageUrl: 'https://channel.mediacdn.vn/thumb_w/640/2019/1/2/photo-1-15464333812922128250200.jpg' },
    { id: '10', name: 'Store X-Clean', distance: '10km', location: 'District 1', imageUrl: 'https://static.riviu.co/960/image/2020/12/12/fd192faf7a9edf892baef1ae2f1f4eb8_output.jpeg' },
  ];
  const renderStoreRecommemed = ({ item }) => (
    <TouchableOpacity style={styles.Recommended} onPress={() => {
      navigation.navigate('StoreDetails', { storeName: item.name, storeImage: item.imageUrl })
    }}>
      <Image source={{ uri: item.imageUrl }} style={styles.ImageStore} />
      <Text style={styles.StoreName}>{item.name}</Text>
      <Image style={{width:wp('20%'),height:hp('1.8%')}} source={rating1}/>
      <Text style={styles.StoreLocation}>{item.distance}</Text>
      <Text style={styles.StoreLocation}>{item.location}</Text>
    </TouchableOpacity>
  );
  const numberOfItemsToShow = 6; // Render component number
  const limitedStoreRecommemed = storeRecommemed.slice(0, numberOfItemsToShow);

  //Set Up coutdown time
  const targetTime = new Date().getTime() + 5 * 3600 * 1000; // Thời gian kết thúc: 1 giờ + 2 phút + 30 giây từ thời điểm hiện tại
  const getTimeRemaining = () => {
    const now = new Date().getTime();
    const timeRemaining = targetTime - now;
    const hours = Math.floor(timeRemaining / (3600 * 1000));
    const minutes = Math.floor((timeRemaining % (3600 * 1000)) / (60 * 1000));
    const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);
    return { hours, minutes, seconds };
  };
  const { hours, minutes, seconds } = getTimeRemaining();
  //time
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
      <ScrollView style={styles.scrollView}>
        <ImageBackground style={styles.CleaningPic} blurRadius={1.2} source={cleaning} imageStyle={{
          borderRadius: 6, borderWidth: 1,
          borderColor: 'black',
        }}>
          <Text style={styles.CleaningTitle}>Voucher Shoes Care 50% Off</Text>
          <Countdown style={styles.Time}
            until={hours * 3600 + minutes * 60 + seconds} // Tổng số giây
            size={30}
            onFinish={() => alert('Finished')}
            digitStyle={{
              backgroundColor: '#FFF', width: wp('15%'),
              height: hp('7%'), marginTop: hp('1%'),
            }}
            digitTxtStyle={{ color: '#223263' }}
            timeToShow={['H', 'M', 'S']}
            timeLabels={{ h: null, m: null, s: null }}
            separatorStyle={{ color: 'white' }}
            separator={":"}
            showSeparator
          />
        </ImageBackground>
        <View style={styles.EventTitle}>
          <Text style={{ fontWeight: 'bold', color: '#223263', fontSize: wp('4%') }}>Event</Text>
          <TouchableOpacity>
            <Text style={{ fontWeight: 'bold', color: '#40BFFF', fontSize: wp('4%') }}>More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.EventList}>
          <TouchableOpacity>
            <View style={styles.Circle}>
              <Image source={ticket} style={styles.EventIcon} />
            </View>
            <Text style={{ textAlign: 'center' }}>Voucher</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.Circle}>
              <Image source={report} style={styles.EventIcon} />
            </View>
            <Text style={{ textAlign: 'center' }}>Attend</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.Circle}>
              <Image source={facebook} style={styles.EventIcon} />
            </View>
            <Text style={{ textAlign: 'center' }}>Fanpage</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.Circle}>
              <Image source={call} style={styles.EventIcon} />
            </View>
            <Text style={{ textAlign: 'center' }}>Contact</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.MapTitle}>
            <Text style={{ fontWeight: 'bold', color: '#223263', fontSize: wp('4%') }}>Store Near You - MAP</Text>
            <TouchableOpacity>
              <Text style={{ fontWeight: 'bold', color: '#40BFFF', fontSize: wp('4%') }}>View</Text>
            </TouchableOpacity>
          </View>
          <View>
            <ImageBackground source={googleMap} imageStyle={{
              borderRadius: 6, borderWidth: 1, height: 180, resizeMode: 'contain',
              borderColor: 'black',
            }}>
            </ImageBackground>
          </View>
        </View>
        <View>
          <View style={styles.StoreTitle}>
            <Text style={{ fontWeight: 'bold', color: '#223263', fontSize: wp('4%') }}>Store Near You</Text>
            <TouchableOpacity onPress={() => {
              navigation.navigate('StoreNearYou')
            }}>
              <Text style={{ fontWeight: 'bold', color: '#40BFFF', fontSize: wp('4%') }}>See More</Text>
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={limitedStoreNear}
              keyExtractor={item => item.id}
              renderItem={renderStoreItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.StoreList}
            />
          </View>
        </View>
        <View>
          <ImageBackground style={styles.CleaningPic} blurRadius={1.5} source={store} imageStyle={{
            borderRadius: 6, borderWidth: 1,
            borderColor: 'black',
          }}>
            <Text style={{
              width: 250, fontWeight: 'bold', fontSize: 30,
              marginTop: '10%',
              color: 'white',
              marginLeft: '5%'
            }}>Recomended Store</Text>
            <Text style={{ fontSize: 15, color: 'white', paddingLeft: 18, marginTop: 10 }}>We recommend the best for you</Text>
          </ImageBackground>
        </View>
        <View>
          <FlatList
            data={limitedStoreRecommemed}
            renderItem={renderStoreRecommemed}
            keyExtractor={item => item.id}
            numColumns={2}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  All: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    // paddingRight: 20,
    paddingRight: wp('5.3%'),
    marginLeft: wp('4%'),
  },
  Container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  Search: {
    marginTop: hp('7%'),
    marginRight: wp('4%'),
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
    marginRight: wp('3%'),
  },
  IconOne: {
    flexDirection: 'row',
    marginTop: hp('7%'),
    alignItems: 'center',
    marginLeft: wp('2%'),
  },
  CleaningPic: {
    marginTop: hp('2.6%'),
    marginLeft: wp('1%'),
    width: wp('90%'),
    height: hp('25.2%'),
    marginBottom: hp('1.5%'),
    alignSelf: 'center'
  },
  CleaningTitle: {
    fontWeight: 'bold',
    fontSize: wp('10%'),
    width: wp('80%'),
    marginTop: hp('2%'),
    color: 'white',
    marginLeft: wp('5%')
  },
  Time: {
    alignItems: 'flex-start',
    marginLeft: wp('5%')
  },
  EventList: {
    marginTop: hp('2%'),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  EventTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  EventIcon: {
    width: wp('11%'),
    height: hp('5.5%'),
  },
  Circle: {
    width: wp('16%'),
    height: hp('8%'),
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#1A2F6E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MapTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('2%'),
    marginBottom: hp('1%')
  },
  StoreTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('26%'),
    marginBottom: hp('1%')
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
  StoreList: {
    width: wp('185%'),
    height: hp('27%'),
    paddingRight: wp('1%'),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  StoreName: {
    paddingTop: hp('0.5%'),
    fontSize: wp('4.4%'),
    width: wp('40%'),
    fontWeight: 'bold',
    color: '#223263'
  },
  StoreLocation: {
    fontWeight: 'bold',
    color: '#40BFFF',
    fontSize: wp('4%'),
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
})

export default HomePage