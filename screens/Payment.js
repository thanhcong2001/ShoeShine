import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import card from '../assets/card.png'
import bank from '../assets/bank.png'
import paypal from '../assets/paypal.png'
import { Linking } from 'react-native';
import axios from 'axios';

const Payment = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            getMomo();
        }, 2800);
    }, []);

    const getMomo = async () => {
        try {
            const response = await axios.get('https://shoeshineapi.azurewebsites.net/api/orders');
            const orders = response.data;
            setData(orders);
            if (orders.length > 0) {
                const lastOrder = orders[orders.length - 1];
                const lastOrderIsOrderStatus = lastOrder.isOrderStatus;
                if (lastOrderIsOrderStatus === 1) {
                    navigation.navigate("WriteFeed")
                } else {
                    console.log('isOrderStatus của phần tử cuối cùng không phải là 0.');
                }
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const [isPressed, setIsPressed] = useState(false);
    // const [isPressed1, setIsPressed1] = useState(false);
    // const [isPressed2, setIsPressed2] = useState(false);
    const momo = () => {
        const momoAppURI = 'https://test-payment.momo.vn/gateway/pay?t=TU9NT0JLVU4yMDE4MDUyOXxTU04tMjM&s=f9a28d1d5885c68cc3e682b7be48888e0deb44d3f0509b6b807f531a36feb97b';
        Linking.canOpenURL(momoAppURI)
            .then(supported => {
                if (supported) {
                    Linking.openURL(momoAppURI);
                } else {
                    // Nếu không thể mở ứng dụng Facebook, bạn có thể mở trang web của Facebook
                    Alert.alert("Fails!")
                }
            })
            .catch(err => {
                console.error('Lỗi khi kiểm tra hoặc mở ứng dụng:', err);
            });

    }

    const handlePress = () => {
        setIsPressed(!isPressed);
    };
    // const handlePress1 = () => {
    //     setIsPressed1(!isPressed1);
    // };
    // const handlePress2 = () => {
    //     setIsPressed2(!isPressed2);
    // };
    return (
        <View style={styles.Container}>
            <View>
                <TouchableOpacity style={[
                    styles.Payment,
                    { backgroundColor: isPressed ? '#EBF0FF' : 'white' },
                ]}
                    onPress={handlePress}>
                    <View>
                        <Image style={styles.Icon} source={card} />
                    </View>
                    <View>
                        <Text style={styles.text}>Momo Banking</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={[
                    styles.Payment,
                    // { backgroundColor: isPressed1 ? '#EBF0FF' : 'white' },
                ]}
                // onPress={handlePress1}
                >
                    <View>
                        <Image style={styles.Icon} source={paypal} />
                    </View>
                    <View>
                        <Text style={styles.text}>Paypal</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={[
                    styles.Payment,
                    // { backgroundColor: isPressed2 ? '#EBF0FF' : 'white' },
                ]}
                // onPress={handlePress2}
                >
                    <View>
                        <Image style={styles.Icon} source={bank} />
                    </View>
                    <View>
                        <Text style={styles.text}>Paypal</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.PaymentButton} onPress={momo}>
                    <Text style={{ marginLeft: wp('30%'), marginTop: hp('0.5%'), color: 'white', fontSize: wp('4.5%'), fontWeight: 'bold' }}>Payment</Text>
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
    PaymentButton: {
        borderWidth: 1.5,
        borderColor: '#F6F4D9',
        width: wp('90%'),
        height: hp('8%'),
        paddingTop: hp('1.5%'),
        marginTop: hp('50%'),
        borderRadius: 10,
        flexDirection: 'row',
        paddingLeft: wp('4%'),
        paddingBottom: hp('1%'),
        backgroundColor: '#40BFFF'
    },
    Payment: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp('3%'),
        padding: 10,
        borderRadius: 10
    }
})