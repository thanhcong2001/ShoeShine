import { StatusBar } from 'expo-status-bar'
import { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, Image, TextInput, Platform } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function App() {
    const [image, setImage] = useState();
    const [productName, setProductName] = useState('')
    const [productDetail, setProductDetail] = useState('')
    const [price, setPrice] = useState('')
    const [storage, setStorage] = useState('')

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <ScrollView>
            <View style={styles.ImagePicker}>
                {image && <Image source={{ uri: image }} style={{ width: hp('13%'), height: hp('13%') }} />}
                <TouchableOpacity onPress={pickImage}>
                    <View style={styles.ImagePickerButton}>
                        <Text style={{ fontSize: hp('1.7%') }}>Add Image</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.Input}>
                <View style={styles.InputTitle}>
                    <View style={{ marginBottom: wp('2%') }}>
                        <Text>Type Of Shoes <Text style={{ color: 'red' }}>*</Text></Text>
                    </View>
                    <View style={styles.InputTitleLength}>
                        <Text>{productName.length}/120</Text>
                    </View>
                </View>
                <TextInput
                    multiline
                    placeholder="Enter product name"
                    value={productName}
                    onChangeText={text => setProductName(text)}
                    maxLength={120}
                />
            </View>

            <View style={styles.Input}>
                <View style={styles.InputTitle}>
                    <View style={{ marginBottom: wp('2%') }}>
                        <Text>Store Service <Text style={{ color: 'red' }}>*</Text></Text>
                    </View>
                    <View style={styles.InputTitleLength}>
                        <Text>{productDetail.length}/3000</Text>
                    </View>
                </View>
                <TextInput
                    multiline
                    placeholder="Enter product detail"
                    value={productDetail}
                    onChangeText={text => setProductDetail(text)}
                    maxLength={3000}
                />
            </View>

            <View style={styles.Features}>
                <TouchableOpacity>
                    <View style={styles.FeaturesElement}>
                        <Image source={require('../assets/menu.png')} style={styles.Icon} />
                        <Text style={{ marginLeft: 10 }}>Category <Text style={{ color: 'red' }}>*</Text></Text>
                        <View style={styles.InputTitleLength}>
                            <Image source={require('../assets/next.png')} style={styles.Icon} />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.FeaturesElement}>
                        <Image source={require('../assets/category.png')} style={styles.Icon} />
                        <Text style={{ marginRight: 10, marginLeft: 10 }}>Classification</Text>
                        <Image source={require('../assets/question.png')} style={styles.Icon} />
                        <View style={styles.InputTitleLength}>
                            <Image source={require('../assets/next.png')} style={styles.Icon} />
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={styles.FeaturesElement}>
                    <Image source={require('../assets/online-shop.png')} style={styles.Icon} />
                    <Text style={{ marginLeft: 10 }}>Price <Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={styles.InputTitleLength}>
                        <TextInput
                            multiline
                            placeholder="Set"
                            value={price}
                            onChangeText={text => setPrice(text)}
                            keyboardType="numeric"
                        />
                    </View>
                </View>

                <View style={styles.FeaturesElementNoBorder}>
                    <Image source={require('../assets/box.png')} style={styles.Icon} />
                    <Text style={{ marginLeft: 10 }}>Storage <Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={styles.InputTitleLength}>
                        <TextInput
                            multiline
                            placeholder="0"
                            value={storage}
                            onChangeText={text => setStorage(text)}
                            keyboardType="numeric"
                            style={{ alignContent: 'center' }}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.Features}>
                <TouchableOpacity>
                    <View style={styles.FeaturesElementNoBorder}>
                        <Image source={require('../assets/discount.png')} style={styles.Icon} />
                        <Text style={{ marginRight: 10, marginLeft: 10 }}>Bulk discount</Text>
                        <Image source={require('../assets/question.png')} style={styles.Icon} />
                        <View style={styles.InputTitleLength}>
                            <Image source={require('../assets/next.png')} style={styles.Icon} />
                        </View>
                    </View>

                </TouchableOpacity>
            </View>

            <View style={styles.Button} >
                <TouchableOpacity style={styles.ButtonELement}>
                    <View>
                        <Text style={{ textAlign: 'center' }}>Save</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ButtonELement}>
                    <View>
                        <Text style={{ textAlign: 'center' }}>Display</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        // marginTop: hp('1%'),
    },
    ImagePicker: {
        width: 'auto',
        height: 'auto',
        backgroundColor: 'white',
        flexDirection: 'row',
        marginTop: hp('1%'),
        paddingTop: hp('2.5%'),
        paddingBottom: hp('2.5%'),
        paddingLeft: wp('2.5%'),
    },
    ImagePickerButton: {
        width: hp('13%'),
        height: hp("13%"),
        paddingTop: hp('5%'),
        paddingLeft: hp('2%'),
        marginLeft: 10,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#7f8c8d'
    },
    Input: {
        width: "100%",
        height: 'auto',
        padding: wp('3.5%'),
        flexDirection: 'column',
        backgroundColor: 'white',
        marginTop: 10,
    },
    InputTitle: {
        flexDirection: 'row',
    },
    InputTitleLength: {
        flex: 1,
        flexDirection: 'row-reverse'
    },
    Features: {
        width: 'auto',
        height: 'auto',
        marginTop: 10,
        // fontSize: hp('1.7%')
    },
    FeaturesElement: {
        width: 'auto',
        height: 'auto',
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: hp('2%'),
        borderBottomWidth: 1,
        borderBottomColor: '#ecf0f1',
    },
    FeaturesElementNoBorder: {
        width: 'auto',
        height: 'auto',
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: hp('2%'),
    },
    Icon: {
        // resizeMode: 'center',
        width: hp('2.5%'),
        height: hp('2.5%'),
    },
    Button: {
        marginTop: 10,
        flexDirection: 'row',
        flex: 1,
        
    },
    ButtonELement: {
        flex: 0.5,
        margin: hp('0.5%'),
        borderWidth: 1,
        borderColor: '#3498db',
        paddingTop: hp('1.5%'),
        paddingBottom: hp('1.5%'),
        backgroundColor: 'white',
    }
}) 