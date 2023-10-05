import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Button, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import logo from '../assets/logo.png'
import backGround from '../assets/sneaker.jpg'
import mail from '../assets/envelope.png'
import lock from '../assets/padlock.png'
import user from '../assets/user.png'
import axios from 'axios'
import back from '../assets/shoe.jpg'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const LoginForm = ({ navigation }) => {
    const [userName, setUsername] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [password, setPassword] = useState('');
    const handleSignUp = () => {
        if (password == rePassword) {
            axios.post("https://shoeshineapi.azurewebsites.net/api/users/register", {
                // Thêm các trường dữ liệu đăng ký tài khoản vào đây
                userName: userName,
                userEmail: userEmail,
                userPassword: password,
                confirmPassword: rePassword,
                // Các trường dữ liệu khác cần thiết
            })
                .then((response) => {
                    // Xử lý phản hồi từ máy chủ sau khi đăng ký
                    if (response.status === 200) {
                        // Đăng ký thành công, bạn có thể điều hướng đến màn hình khác
                        navigation.navigate('Login');
                    }
                })
                .catch((err) => {
                    Alert.alert('đăng kí thất bại !!!');
                });
        }
        else {
            Alert.alert("Password is not match !!!")
        }
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
                    <View style={styles.Name}>
                        <Image source={user} style={styles.Icon} />
                        <TextInput style={styles.EmailTitle}
                            placeholder="Name"
                            value={userName}
                            onChangeText={text => setUsername(text)}
                        />
                    </View>
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
                            value={password}
                            secureTextEntry
                            onChangeText={text => setPassword(text)}
                        />
                    </View>
                    <View style={styles.Pass}>
                        <Image source={lock} style={styles.Icon} />
                        <TextInput style={styles.EmailTitle}
                            placeholder="Re-Password"
                            value={rePassword}
                            secureTextEntry
                            onChangeText={text => setRePassword(text)}
                        />
                    </View>
                    <View style={styles.Button}>
                        <TouchableOpacity onPress={handleSignUp}>
                            <Text style={styles.LoginTxt}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.SignUp}>
                        <Text style={{ marginTop: 10, color: 'white' }}>Already have an account?</Text>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.SignUpTitle}>Sign In here</Text>
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
        alignSelf: 'center'
    },
    Name: {
        marginTop: hp('2%'),
        marginLeft: wp('4%'),
        width: wp('81.5%'),
        height: hp('6.5%'),
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: wp('3%'),
        backgroundColor: 'white',
    },
    EmailTitle: {
        marginLeft: wp('2.5%')
    },
    Email: {
        marginTop: hp('1%'),
        marginLeft: wp('4%'),
        width: wp('81.5%'),
        height: hp('6.5%'),
        borderColor: 'blue',
        borderWidth: 1,
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
        marginTop: hp('1%'),
        marginLeft: wp('4%'),
        width: wp('81.5%'),
        height: hp('6.5%'),
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: wp('3%'),
        backgroundColor: 'white'
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
        backgroundColor:'blue'
    },
    SignUp: {
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: hp('1%')
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
        borderWidth:1
    },
    LoginTxt:{
        marginLeft:wp('33%'),
        marginTop:hp('1.5%'),
        fontSize:wp('4%'),
        color:'white',
        fontWeight:'bold'
    }
})