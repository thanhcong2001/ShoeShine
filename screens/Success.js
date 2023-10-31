import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import success from '../assets/Success.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Success = ({navigation}) => {
    return (
        <View style={styles.Container}>
            <Image style={styles.Pic} source={success} />
            <Text style={{fontSize:wp('12%'),marginTop:hp('5%')}}>Successfully</Text>
            <TouchableOpacity style={styles.Button} onPress={()=>{navigation.navigate('Explore')}}>
                <Text style={{color:'white',fontWeight:'bold'}}>Back To Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Success

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    Pic: {
        marginTop: hp('18%')
    },
    Button:{
        marginTop:hp('5%'),
        borderWidth:1,
        width:wp('80%'),
        alignItems:'center',
        paddingTop:hp('2%'),
        paddingBottom:hp('2%'),
        borderRadius:30,
        backgroundColor:'#32C671',
        borderColor:'#40BFFF'
    }
})