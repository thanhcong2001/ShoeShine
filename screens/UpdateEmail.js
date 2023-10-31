import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import email from '../assets/email.png'

const UpdateEmail = () => {
    const [isEditable, setIsEditable] = useState(false);
    const handleEditPress = () => {
        setIsEditable(true);
    };
    const handleSavePress = () => {
        Alert.alert('We will send verification to your new email')
    };
    return (
        <View style={styles.Container}>
            <View>
                <Text style={styles.Title}>Change Email</Text>
                <View style={styles.Circle}>
                    <View style={{flexDirection:'row',alignSelf:'center',marginRight:wp('5%')}}>
                        <Image source={email} style={styles.Icon} />
                        <TextInput editable={isEditable} style={{ marginLeft: wp('3%') }}
                            placeholder='vuntse151519@fpt.edu.vn'
                        />
                    </View>
                    <View style={{alignSelf:'center'}}>
                        <TouchableOpacity activeOpacity={0.7}  onPress={handleEditPress}>
                            <Text style={{ color: 'red', fontWeight: 'bold', fontSize: wp('3.6%')}}>Change</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.Button} activeOpacity={0.7} onPress={handleSavePress} >
                    <Text style={styles.Txt}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UpdateEmail

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
        justifyContent:'space-between',
        paddingRight:wp('2%')
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