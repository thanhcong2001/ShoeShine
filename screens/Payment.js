import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import card from '../assets/card.png'
import bank from '../assets/bank.png'
import paypal from '../assets/paypal.png'

const Payment = () => {
    return (
        <View style={styles.Container}>
            <View >
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp('3%') }}>
                    <View>
                        <Image style={styles.Icon} source={card} />
                    </View>
                    <View>
                        <Text style={styles.text}>Credit Card Or Debit</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp('5%') }}>
                    <View>
                        <Image style={styles.Icon} source={paypal} />
                    </View>
                    <View>
                        <Text style={styles.text}>Paypal</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp('5%') }}>
                    <View>
                        <Image style={styles.Icon} source={bank} />
                    </View>
                    <View>
                        <Text style={styles.text}>Bank Transfer</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Payment

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: '#EBF0FF',
        paddingLeft: wp('4%'),
        paddingRight: wp('4%'),
    },
    Icon: {
        width: wp('10%'),
        height: hp('5%')
    },
    text: {
        color: '#223263',
        fontWeight: 'bold',
        fontSize: wp('5%'),
        marginLeft: wp('5%')
    },
})