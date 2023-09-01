import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import logo from '../assets/logo.png'
import backGround from '../assets/sneaker.jpg'
import mail from '../assets/envelope.png'
import lock from '../assets/padlock.png'
import facebook from '../assets/face.jpg'
import instagram from '../assets/INS.jpg'
import google from '../assets/GOOGLE.jpg'
const LoginForm = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        // You can implement your login logic here
        if (username === 'cong' && password === '123') {
             navigation.navigate('HomePage')
        } else if (username === 'cong' && password != '123') {
            alert('Password is wrong!!');
        } else if (username != 'cong' && password === '123') {
            alert('Username is wrong!!');
        } else {
            alert('Username and Password are wrong!!');
        }
    };

    return (
        <View style={styles.All}>
            <ImageBackground source={backGround} blurRadius={1.8} style={styles.backPic}>
                <View style={styles.Container}>
                    <Image style={styles.Pic} source={logo} />
                    <Text style={styles.Header}>ShoeShine</Text>
                    <Text style={styles.Title}>Speacial footwear for everyday use</Text>
                </View>
                <View style={styles.Email}>
                    <Image source={mail} style={styles.Icon} />
                    <TextInput style={styles.EmailTitle}
                        placeholder="Username"
                        value={username}
                        onChangeText={text => setUsername(text)}
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
                <View style={styles.Button}>
                    <Button title="Login" color="blue" onPress={handleLogin} />
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
                    <Text style={{ marginTop: 10, color: 'lightblue' }}>Don’t have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.SignUpTitle}>Sign Up here?</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        marginTop: 80,
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
    All: {
        alignSelf:'center'
    },
    Email: {
        marginTop: 20,
        marginLeft: 40,
        width: 320,
        height: 48,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
        backgroundColor: 'white'
    },
    EmailTitle: {
        marginLeft: 10
    },
    Pass: {
        marginTop: 10,
        marginLeft: 40,
        width: 320,
        height: 48,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
        backgroundColor: 'white'
    },
    Icon: {
        width: 20,
        height: 20
    },

    Button: {
        marginTop: 10,
        width: 322,
        borderWidth: 2,
        borderRadius: 10,
        alignSelf: 'center',
        borderColor: 'blue'
    },
    Vertical: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        width: 310,
        alignSelf: 'center'
    },
    Contact: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    Image: {
        width: 50,
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
        marginLeft: 20,
        marginRight: 20
    },
    SignUp: {
        alignSelf: 'center',
        flexDirection: 'row'
    },
    SignUpTitle: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 10
    }

})