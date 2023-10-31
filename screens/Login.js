import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React,{ useEffect } from 'react'
import logo from '../assets/logo.png'
import backGround from '../assets/shoe.jpg'
const Login = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
          navigation.navigate('Login');
        }, 2000); 
      }, []);
    return (
        <View style={styles.All}>
            <ImageBackground source={backGround} style={styles.backPic}>
                <View style={styles.Container}>
                    <Image style={styles.Pic} source={logo} />
                    <Text style={styles.Header}>ShoeShine</Text>
                    <Text style={styles.Title}>Speacial footwear for everyday use</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        marginTop: 120,
    },
    Header: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white'
    },
    Title: {
        color: 'white',
        fontSize: 18
    },
    Pic: {
        width: 150,
        height: 150
    },
    backPic: {
        width: 400,
        height: 850,
    },
    All:{
        alignSelf:'center'
    }

})