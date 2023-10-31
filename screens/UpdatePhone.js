import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity,Button } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import phone from '../assets/smartphone-call.png'

const UpdatePhone = () => {
    return (
        <View style={styles.Container}>
            <View>
                <Text style={styles.Title}>Phone Number</Text>
                <View style={styles.Circle}>
                    <Image source={phone} style={styles.Icon} />
                    <TextInput style={{ marginLeft: wp('3%') }}
                        placeholder='0397528860'
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

export default UpdatePhone

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: '#EBF0FF',
        paddingLeft: wp('4%'),
        paddingRight: wp('4%'),
        justifyContent: 'space-between',
        marginBottom: hp('2%')
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
        fontSize: wp('4%'),
        flexDirection: 'row',
        alignItems: 'center'
    },
    Icon: {
        width: wp('9%'),
        height: hp('4.5%'),
    },
    Button: {
        borderWidth: 2,
        borderRadius: 10,
        height: hp('7%'),
        borderColor: '#EBF0FF',
        paddingLeft: wp('5%'),
        backgroundColor: '#40BFFF',
    },
    Txt: {
        alignSelf: 'center',
        marginTop: hp('1.7%'),
        fontWeight: 'bold',
        color: 'white',
        fontSize: wp('4.4%')
    }
})