import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import Qr from '../assets/QR.jpg'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
const QR = () => {
    return (
        <View>
            <ImageBackground  source={Qr} style={styles.ImgQr}>
                <Text style={styles.price}> Số tiền cần thanh toán: 150.000 VND</Text>
            </ImageBackground>
        </View>
    )
}

export default QR

const styles = StyleSheet.create({
    ImgQr: {
        width:wp('100%'),
        height:hp('100%')
    },
    price:{
        marginTop:hp('97%'),
        marginLeft:wp('13%'),
        color:'white'
    }
})