import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Button, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import logo from '../assets/logo.png'
import backGround from '../assets/sneaker.jpg'
import mail from '../assets/envelope.png'
import lock from '../assets/padlock.png'
import facebook from '../assets/face.jpg'
import instagram from '../assets/INS.jpg'
import google from '../assets/GOOGLE.jpg'
import back from '../assets/shoe.jpg'

import axios from 'axios';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const LoginForm = ({ navigation }) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const handleLogin = () => {
        const data = { email: userEmail, password: userPassword }
        axios.post(`https://shoeshineapi.azurewebsites.net/api/users/login?email=${userEmail}&password=${userPassword}`, data)
            .then((response) => {
                if (response.status === 200) {
                    // Đăng ký thành công, bạn có thể điều hướng đến màn hình khác
                    navigation.navigate('HomePage');
                } else {
                    Alert.alert('Đăng ký thất bại');
                }
            })
            .catch((err) => console.log(err))
    };

    return (
        <View style={styles.All}>
            <ImageBackground source={back} blurRadius={1.2} style={styles.backPic}>
                <View style={styles.Container}>
                    <Image style={styles.Pic} source={logo} />
                    <Text style={styles.Header}>ShoeShine</Text>
                    <Text style={styles.Title}>Speacial footwear for everyday use</Text>
                </View>
                <View style={styles.Form}>
                    <View style={styles.Email}>
                        <Image source={mail} style={styles.Icon} />
                        <TextInput style={styles.EmailTitle}
                            placeholder="Email"
                            value={userEmail}
                            onChangeText={text => setUserEmail(text)}
                        />
                    </View>
                    <View style={styles.Pass}>
                        <Image source={lock} style={styles.Icon} />
                        <TextInput style={styles.EmailTitle}
                            placeholder="Password"
                            value={userPassword}
                            secureTextEntry
                            onChangeText={text => setUserPassword(text)}
                        />
                    </View>
                    <View style={styles.Button}>
                        <TouchableOpacity onPress={handleLogin}>
                            <Text style={styles.LoginTxt}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Vertical}>
                        <View style={{ flex: 1, height: 2, backgroundColor: 'white', marginVertical: 10 }}>
                        </View>
                        <Text style={{ fontSize: 14, color: 'white', marginLeft: 5, marginRight: 5 }}>OR</Text>
                        <View style={{ flex: 1, height: 2, backgroundColor: 'white', marginVertical: 10 }}>
                        </View>
                    </View>
                    <View style={styles.Contact}>
                        <TouchableOpacity >
                            <Image style={styles.Image} source={instagram}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image style={styles.Image} source={facebook}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.Image} source={google}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.SignUp}>
                        <Text style={{ marginTop: 10, color: 'white' }}>Don’t have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.SignUpTitle}>Sign Up here?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        marginTop: hp('9%'),
    },
    Header: {
        fontSize: wp('12%'),
        fontWeight: 'bold',
        color: 'white'
    },
    Title: {
        color: 'white',
        fontSize: wp('4.5%'),
        marginBottom: hp('1%')
    },
    Pic: {
        width: wp('31%'),
        height: hp('19%')
    },
    backPic: {
        width: wp('100%'),
        height: hp('110%'),
    },
    All: {
        alignSelf: 'center',
    },
    Email: {
        marginTop: hp('2%'),
        marginLeft: wp('4%'),
        width: wp('81.5%'),
        borderWidth: 1,
        height: hp('6.5%'),
        borderColor: 'blue',
        borderRadius: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: wp('3%'),
        backgroundColor: 'white'

    },
    EmailTitle: {
        marginLeft: wp('2.5%')
    },
    Pass: {
        marginTop: hp('2%'),
        marginLeft: wp('4%'),
        width: wp('81.5%'),
        height: hp('6.5%'),
        borderColor: 'blue',
        borderRadius: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: wp('3%'),
        backgroundColor: 'white',
        borderWidth: 1

    },
    Icon: {
        width: 20,
        height: 20
    },

    Button: {
        marginTop: hp('2%'),
        height: hp('6.5%'),
        width: wp('81.5%'),
        borderWidth: 2,
        borderRadius: 30,
        alignSelf: 'center',
        borderColor: 'blue',
        marginLeft: wp('0.5%'),
        backgroundColor: 'blue'
    },
    Vertical: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        width: wp('80%'),
        alignSelf: 'center',
        marginLeft: wp('2%')
    },
    Contact: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginLeft: wp('3.5%')
    },
    Image: {
        width: wp('14.5%'),
        height: hp('7%'),
        borderRadius: 10,
        alignSelf: 'center',
        marginLeft: wp('5%'),
        marginRight: wp('5%')
    },
    SignUp: {
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: hp('0.5%')
    },
    SignUpTitle: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: wp('2%'),
        marginTop: hp('1.4%')
    },
    Form: {
        backgroundColor: 'rgba(200, 200, 200, 0.5)',
        width: wp('90%'),
        marginLeft: wp('5%'),
        height: hp('48%'),
        borderRadius: 20,
        alignContent: 'center',
        paddingTop: hp('1%'),
        borderColor: 'white',
        borderWidth: 1
    },
    LoginTxt: {
        marginLeft: wp('35%'),
        marginTop: hp('1.5%'),
        fontSize: wp('4%'),
        color: 'white',
        fontWeight: 'bold'
    }

})