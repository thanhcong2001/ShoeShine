import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import rating from '../assets/rating1.png'
import plus from '../assets/plus.png'

const WriteFeed = () => {
    return (
        <View style={styles.Container}>
            <View>
                <Text style={styles.Txt}>Please write Overall level of satisfaction with your shipping / Delivery Service</Text>
            </View>
            <View>
                <Image style={styles.Rating} source={rating} />
                <Text style={styles.Txt}>Write Your Review</Text>
            </View>
            <View style={styles.Input}>
                <TextInput
                    placeholder='Write your review here' />
            </View>
            <View>
                <Text style={styles.Txt}>Add Photo</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.Circle}>
                    <Image style={styles.Icon} source={plus} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default WriteFeed

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: '#EBF0FF',
        paddingLeft: wp('4%'),
        paddingRight: wp('4%')
    },
    Rating: {
        width: wp('35%'),
        height: hp('5%')
    },
    Txt: {
        fontWeight: 'bold',
        color: '#223263',
        marginTop: hp('2%'),
        marginBottom: hp('2%')
    },
    Input: {
        borderWidth: 2,
        borderRadius: 10,
        height: hp('20%'),
        borderColor: '#EBF0FF',
        paddingLeft: wp('3%'),
    },
    Icon: {
        width: wp('5%'),
        height: hp('2%'),
    },
    Circle: {
        borderWidth: 2,
        borderColor: '#EBF0FF',
        borderRadius: 10,
        width: wp('20%'),
        height: hp('8%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
})