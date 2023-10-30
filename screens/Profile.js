import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import vu from '../assets/vu.jpg'
import user1 from '../assets/user2.png'
import gender from '../assets/gender.png'
import calendar from '../assets/calendar.png'
import email from '../assets/email.png'
import phone from '../assets/smartphone-call.png'
import pass from '../assets/locked-computer.png'
import shop from "../assets/shopTake.png";
import store12 from "../assets/store12.png";
import next from '../assets/right-arrow.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const Profile = ({ navigation }) => {
    return (
        <View style={styles.Container}>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Image style={{ marginLeft: wp('6%'), width: wp('15%'), height: hp('7.5%'), borderRadius: 30, borderWidth: 2, marginTop: hp('3.5%') }} source={vu} />
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ color: '#223263', fontWeight: 'bold', marginLeft: wp('6%'), fontSize: wp('4.5%'), marginTop: hp('3%') }}>Nguyễn Tuấn Vũ</Text>
                    <Text style={{ color: '#9098B1', marginLeft: wp('6%'), fontSize: wp('4.5%') }}>@john_0209</Text>
                </View>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={{ marginTop: hp('3%') }}
                onPress={() => {
                    navigation.navigate('UpdateName')
                }}>
                <View style={styles.Account}>
                    <View>
                        <Image source={user1} style={styles.Image} />
                    </View>
                    <View style={styles.Txt}>
                        <Text style={styles.Title}>Name</Text>
                        <Text style={styles.Title1}>Nguyễn Tuấn Vũ</Text>
                    </View>
                    <View>
                        <Image style={styles.NextIcon} source={next} />
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={{ marginTop: hp('1%') }} onPress={() => {
                navigation.navigate('Gender')
            }}>
                <View style={styles.Account}>
                    <View>
                        <Image source={gender} style={styles.Image} />
                    </View>
                    <View style={styles.Txt}>
                        <Text style={styles.Title}>Gender</Text>
                        <Text style={styles.Title1}>Male</Text>
                    </View>
                    <View>
                        <Image style={styles.NextIcon} source={next} />
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={{ marginTop: hp('1%') }}>
                <View style={styles.Account}>
                    <View>
                        <Image source={calendar} style={styles.Image} />
                    </View>
                    <View style={styles.Txt}>
                        <Text style={styles.Title}>Birthday</Text>
                        <Text style={styles.Title1}>12-12-2000</Text>
                    </View>
                    <View>
                        <Image style={styles.NextIcon} source={next} />
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={{ marginTop: hp('1%') }}
                onPress={() => {
                    navigation.navigate('UpdateEmail')
                }}>
                <View style={styles.Account}>
                    <View>
                        <Image source={email} style={styles.Image} />
                    </View>
                    <View style={styles.Txt}>
                        <Text style={styles.Title}>Email</Text>
                        <Text style={styles.Title1}>vuntse151519@fpt.edu.vn</Text>
                    </View>
                    <View>
                        <Image style={styles.NextIcon} source={next} />
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={{ marginTop: hp('1%') }}
                onPress={() => {
                    navigation.navigate('UpdatePhone')
                }}>
                <View style={styles.Account}>
                    <View>
                        <Image source={phone} style={styles.Image} />
                    </View>
                    <View style={styles.Txt}>
                        <Text style={styles.Title}>Phone Number</Text>
                        <Text style={styles.Title1}>0397528860</Text>
                    </View>
                    <View>
                        <Image style={styles.NextIcon} source={next} />
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={{ marginTop: hp('1%') }}
                onPress={() => {
                    navigation.navigate('UpdatePass')
                }}>
                <View style={styles.Account}>
                    <View>
                        <Image source={pass} style={styles.Image} />
                    </View>
                    <View style={styles.Txt}>
                        <Text style={styles.Title}>Change Password</Text>
                        <Text style={styles.Title1}>•••••••••••••••••</Text>
                    </View>
                    <View>
                        <Image style={styles.NextIcon} source={next} />
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Store')
            }}>
                <View style={styles.Account}>
                    <Image source={store12} style={styles.Image} />
                    <Text style={styles.Title}>My Store</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: '#EBF0FF'
    },
    Account: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#c5cfbc',
        height: hp('7%'),
        paddingLeft: wp('5%'),
        borderTopWidth: 1,
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
    Title1: {
        fontSize: wp('3.6%'),
        color: '#9098B1'
    },
    Txt: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        paddingRight: wp('1%')
    },
    NextIcon: {
        width: wp('3%'),
        height: hp('2.2%'),
        marginRight: wp('2%'),
        marginLeft: wp('2%'),
    },

})