import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import acc from '../assets/account.png'
import phone from '../assets/phone.png'
import home from '../assets/home.png'
import mail1 from '../assets/mail1.png'
import CheckBox from 'expo-checkbox'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios'

const RegisterStore = ({ navigation }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [storeName, setStoreName] = useState('');
    const [storeAddress, setStoreAddress] = useState('');
    const [storePhone, setStorePhone] = useState('');
    const [storeEmail, setStoreEmail] = useState('');
    const handleRegisterStore = () => {
        if (toggleCheckBox == true) {
            axios.post("http://shoeshine-001-site1.ftempurl.com/api/stores", {
                storeName: storeName,
                storeAddress: storeAddress,
                storePhone: storePhone,
                storeEmal: storeEmail
            })
                .then((response) => {
                    // Xử lý phản hồi từ máy chủ sau khi đăng ký
                    if (response.status === 200) {
                        Alert.alert('đăng kí thành công !!!')
                        setTimeout(() => {
                            navigation.navigate('Store');
                        }, 2000);
                    }
                })
                .catch((err) => {
                    Alert.alert('đăng kí thất bại !!!');
                });
        }
        else {
            Alert.alert("Please accept my rule !!!")
        }
    };
    return (
        <View style={styles.Container}>
            <View style={styles.Circle}>
                <View>
                    <Image style={styles.Icon} source={acc} />
                </View>
                <View>
                    <TextInput style={styles.Txt} placeholder='Name Store'
                        value={storeName}
                        onChangeText={text => setStoreName(text)} />
                </View>
            </View>
            <View style={styles.Circle}>
                <View>
                    <Image style={styles.Icon} source={phone} />
                </View>
                <View>
                    <TextInput style={styles.Txt} placeholder='Phone Store'
                        value={storePhone}
                        onChangeText={text => setStorePhone(text)} />
                </View>
            </View>
            <View style={styles.Circle}>
                <View>
                    <Image style={styles.Icon} source={home} />
                </View>
                <View>
                    <TextInput style={styles.Txt} placeholder='Address Store'
                        value={storeAddress}
                        onChangeText={text => setStoreAddress(text)} />
                </View>
            </View>
            <View style={styles.Circle}>
                <View>
                    <Image style={styles.Icon} source={mail1} />
                </View>
                <View>
                    <TextInput style={styles.Txt} placeholder='Email Store'
                        value={storeEmail}
                        onChangeText={text => setStoreEmail(text)} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: hp('5%'), alignItems: 'center' }}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Text style={styles.Label}>By registering, you are agreeing with our Terms of Use and Privacy Policy</Text>
            </View>
            <View style={{ marginTop: hp('5%') }}>
                <TouchableOpacity style={styles.Button} activeOpacity={0.7} onPress={handleRegisterStore}>
                    <Text style={styles.Save}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RegisterStore

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: '#EBF0FF',
        paddingLeft: wp('4%'),
        paddingRight: wp('4%'),
    },
    Circle: {
        borderRadius: 20,
        borderWidth: 4,
        borderColor: "#40BFFF",
        flexDirection: 'row',
        paddingVertical: hp('2.5%'),
        paddingLeft: wp('5%'),
        alignItems: 'center',
        marginTop: hp('2%')
    },
    Icon: {
        width: wp('7%'),
        height: hp('3.5%')
    },
    Txt: {
        fontSize: wp('4%'),
        marginLeft: wp('4%'),
        color: '#C7C7C7'
    },
    Checkbox: {
        alignSelf: 'center',
    },
    Label: {
        marginLeft: wp('3%'),
        color: '#40BFFF',
        fontWeight: 'bold',
        fontSize: wp('4%')
    },
    Button: {
        borderWidth: 2,
        borderRadius: 10,
        height: hp('7%'),
        borderColor: '#EBF0FF',
        paddingLeft: wp('5%'),
        backgroundColor: '#40BFFF',
    },
    Save: {
        alignSelf: 'center',
        marginTop: hp('1.7%'),
        fontWeight: 'bold',
        color: 'white',
        fontSize: wp('4.4%')
    }
})