import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Review = ({navigation}) => {
  const data = [
    { id: 1, image: require('../assets/sao.png'), name: 1 },
    { id: 2, image: require('../assets/sao.png'), name: 2 },
    { id: 3, image: require('../assets/sao.png'), name: 3 },
    { id: 4, image: require('../assets/sao.png'), name: 4 },
    { id: 5, image: require('../assets/sao.png'), name: 5 },

  ];
  const renderStar = ({ item }) => (
    <TouchableOpacity style={styles.StartCircle}>
      <Image source={item.image} style={styles.StarIcon} />
      <Text style={styles.Name}>{item.name}</Text>
    </TouchableOpacity>
  );

  const feedBack = [
    { id: 1, image: require('../assets/rating.png'), name: "Nguyễn Việt Hùng", avatar: require('../assets/hung.jpg'), feedBack: "air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.", picA: 'https://i.pinimg.com/564x/4e/f3/a1/4ef3a14ef067abdee38b5436f46f38a8.jpg', picB: 'https://i.pinimg.com/564x/9c/9f/b6/9c9fb6561174109d521064d2efb4d6cb.jpg' },
    { id: 2, image: require('../assets/rating.png'), name: "Nguyễn Tuấn Vũ", avatar: require('../assets/vu.jpg'), feedBack: "air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.", picA: 'https://i.pinimg.com/564x/4e/f3/a1/4ef3a14ef067abdee38b5436f46f38a8.jpg', picB: 'https://i.pinimg.com/564x/9c/9f/b6/9c9fb6561174109d521064d2efb4d6cb.jpg' },
    { id: 3, image: require('../assets/rating.png'), name: "Đinh Văn Thành An", avatar: require('../assets/an.jpg'), feedBack: "air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.", picA: 'https://i.pinimg.com/564x/4e/f3/a1/4ef3a14ef067abdee38b5436f46f38a8.jpg', picB: 'https://i.pinimg.com/564x/9c/9f/b6/9c9fb6561174109d521064d2efb4d6cb.jpg' },
    { id: 4, image: require('../assets/rating.png'), name: "Lương Thành Công", avatar: require('../assets/cong.jpg'), feedBack: "air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.", picA: 'https://i.pinimg.com/564x/4e/f3/a1/4ef3a14ef067abdee38b5436f46f38a8.jpg', picB: 'https://i.pinimg.com/564x/9c/9f/b6/9c9fb6561174109d521064d2efb4d6cb.jpg' },
  ];
  const renderFeed = ({ item }) => (
    <View >
      <View style={{ flexDirection: 'row', marginTop: hp('3%'), marginBottom: hp('2%') }}>
        <View>
          <Image style={styles.Avatar} source={item.avatar} />
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Text style={styles.NameFeed}>{item.name}</Text>
          <Image style={styles.Rating} source={item.image} />
        </View>
      </View>
      <View>
        <Text style={styles.FeedBack}>{item.feedBack}</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: hp('2%') }}>
        <Image style={{ marginRight: wp('3%'), width: wp('45%'), height: hp('20%') }} source={{ uri: item.picA }} />
        <Image style={{ width: wp('45%'), height: hp('20%') }} source={{ uri: item.picB }} />
      </View>
    </View>
  );
  return (
    <View style={styles.Container}>
      <View style={{ flexDirection: 'row', paddingRight: wp('31%'), }}>
        <View style={styles.Circle}>
          <Text style={{ fontWeight: 'bold', color: '#40BFFF' }}>All Review</Text>
        </View>
        <View>
          <FlatList
            data={data}
            renderItem={renderStar}
            keyExtractor={item => item.id}
            horizontal
          />
        </View>
      </View>
      <ScrollView style={{ flex: 1, marginBottom: hp('0.2%') }}>
        <View>
          <FlatList
            data={feedBack}
            renderItem={renderFeed}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity style={styles.Button} activeOpacity={0.7} 
        onPress={()=>{
          navigation.navigate('WriteFeed')
        }}>
          <Text style={styles.Txt}>Write Review</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Review

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#EBF0FF',
    paddingLeft: wp('4%'),
  },
  Circle: {
    borderWidth: 2,
    borderRadius: 10,
    height: hp('8%'),
    width: wp('30%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#EBF0FF',
    backgroundColor: '#ecf9ff',
    marginTop: hp('2.5%')
  },
  StartCircle: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 10,
    height: hp('8%'),
    width: wp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#EBF0FF',
    marginTop: hp('2.5%'),
    flexDirection: 'row',
    marginLeft: wp('2%'),
  },
  StarIcon: {
    width: wp('5%'),
    height: hp('2.5%'),
    marginRight: wp('2%')
  },
  Name: {
    fontSize: wp('4%')
  },
  Avatar: {
    width: wp('15%'),
    height: hp('7.5%'),
    borderRadius: 30,
    borderWidth: 2,
  },
  Rating: {
    width: wp('40%'),
    height: hp('5%'),
  },
  NameFeed: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    marginLeft: wp('5%')
  },
  FeedBack: {
    color: "#9098B1",
    fontSize: wp('4%'),
    lineHeight: 30
  },
  Button: {
    borderWidth: 2,
    borderRadius: 10,
    height: hp('7%'),
    borderColor: '#EBF0FF',
    paddingLeft: wp('5%'),
    backgroundColor: '#40BFFF',
    width:wp('94%'),
  },
  Txt: {
    alignSelf: 'center',
    marginTop: hp('1.7%'),
    fontWeight: 'bold',
    color: 'white',
    fontSize: wp('4.4%'),
    marginRight:wp('2%')
  }
})