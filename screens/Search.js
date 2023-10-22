import { Text, StyleSheet, View, SafeAreaView, Image, TextInput, ImageBackground, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import search from '../assets/loupe.png'
import heart from '../assets/heart.png'
import notification from '../assets/notification.png'
import rating1 from '../assets/rating1.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Search = ({ route }) => {
    const [value, setValue] = useState(route.params && route.params.inputValue ? route.params.inputValue : '');
    const storeRecommemed = [
        { id: '1', name: 'Store Mr.Phui', distance: '1.2km', location: 'District 8', image: require('../assets/Phui.jpg') },
        { id: '2', name: 'BB Cleaning', distance: '4km', location: 'District 3', image: require('../assets/BBCleaning.jpg') },
        { id: '3', name: 'Sneaker Vitamin', distance: '7km', location: 'District 8', image: require('../assets/vitamin.jpg') },
        { id: '4', name: 'Sneaker Buzz', distance: '9km', location: 'District 8', image: require('../assets/Buzz.jpg') },
        { id: '5', name: 'Store X-Clean', distance: '10km', location: 'District 1', image: require('../assets/xClean.jpg') },
        { id: '6', name: 'Store DR.Thong', distance: '5km', location: 'Thu Duc City', image: require('../assets/DrThong.jpg') },
        { id: '7', name: 'Sneaker Vitamin', distance: '7km', location: 'District 8', image: require('../assets/Phui.jpg') },
        { id: '8', name: 'Sneaker Buzz', distance: '9km', location: 'District 8', image: require('../assets/Phui.jpg') },
        { id: '9', name: 'Store X-Clean', distance: '10km', location: 'District 1', image: require('../assets/Phui.jpg') },
    ];
    const renderStoreRecommemed = ({ item }) => (
        <TouchableOpacity style={styles.Recommended} onPress={() => {
            navigation.navigate('StoreDetails', { storeName: item.name, storeImage: item.image })
        }}>
            <Image source={item.image} style={styles.ImageStore} />
            <Text style={styles.StoreName}>{item.name}</Text>
            <Image style={{ width: wp('20%'), height: hp('1.8%') }} source={rating1} />
            <Text style={styles.StoreLocation}>{item.distance}</Text>
            <Text style={styles.StoreLocation}>{item.location}</Text>
        </TouchableOpacity>
    );
    const numberOfItemsToShow = 6; // Render component number
    const limitedStoreRecommemed = storeRecommemed.slice(0, numberOfItemsToShow);
    return (
        <View style={styles.All}>
            <SafeAreaView style={styles.Container}>
                <View style={styles.Search}>
                    <TouchableOpacity onPress={() => { /* handle your search logic here */ }}>
                        <Image source={search} style={styles.SearchIcon} />
                    </TouchableOpacity>

                    <TextInput
                        placeholder="Search Store"
                        value={value}
                        onChangeText={text => setValue(text)}
                    />
                </View>
                <View style={styles.IconOne}>
                    <Image source={heart} style={{ width: 25, height: 25, marginRight: 10 }} />
                    <Image source={notification} style={{ width: 25, height: 25 }} />
                </View>
            </SafeAreaView>
            <ScrollView style={styles.scrollView}>
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

export default Search

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
        // marginTop: hp('7%'),
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
        // marginTop: hp('7%'),
        alignItems: 'center',
        marginLeft: wp('2%'),
    },
    CleaningPic: {
        marginRight: wp('1%'),
        marginTop: hp('2.6%'),
        marginLeft: wp('1.5%'),
        width: wp('90%'),
        height: hp('25.2%'),
        marginBottom: hp('1.5%'),
        alignSelf: 'center',
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