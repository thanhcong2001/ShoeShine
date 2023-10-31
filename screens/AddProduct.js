import { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";
import Modal from 'react-native-modal';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default function App() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleInputChange = (text) => {
        setInputValue(text);
    };

    const handleSave = () => {
        // Xử lý dữ liệu sau khi người dùng đã nhập và ấn "Lưu"
        console.log(inputValue);
        toggleModal();
    };
    const [image, setImage] = useState();
    const [serviceId, setServiceId] = useState([])
    const [price, setPrice] = useState([])
    const [categoryId, setCategoryId] = useState([])
    const [storage, setStorage] = useState('')
    const [checkboxes, setCheckboxes] = useState([]);
    const [dataFromApi, setDataFromApi] = useState([]);
    const [dataFromService, setDataFromService] = useState([]);
    const [checkboxesService, setCheckboxesService] = useState([]);
    console.log('price:', price);
    useEffect(() => {
        // Gọi API để lấy dữ liệu
        ApiService();
        axios.get('http://shoeshine-001-site1.ftempurl.com/api/categories/get-all')
            .then((response) => {
                setDataFromApi(response.data); // Lưu dữ liệu từ API vào state
                // Khởi tạo mảng checkboxes với giá trị ban đầu là false
                const initialCheckboxes = new Array(response.data.length).fill(false);
                setCheckboxes(initialCheckboxes);
            })
            .catch((error) => {
                console.error('Lỗi khi fetch dữ liệu từ API:', error);
            });

    }, []);
    const ApiService = () => {
        axios.get('http://shoeshine-001-site1.ftempurl.com/api/services')
            .then((response) => {
                setDataFromService(response.data); // Lưu dữ liệu từ API vào state
                // Khởi tạo mảng checkboxes với giá trị ban đầu là false
                const initialCheckboxes = new Array(response.data.length).fill(false);
                setCheckboxes(initialCheckboxes);
            })
            .catch((error) => {
                console.error('Lỗi khi fetch dữ liệu từ API:', error);
            });
    }
    const handleCheckboxChange = (index, option) => {
        const newCheckboxes = [...checkboxes];
        newCheckboxes[index] = !newCheckboxes[index]; // Đảo ngược trạng thái của checkbox
        setCheckboxes(newCheckboxes);
        if (newCheckboxes[index]) {
            // Nếu checkbox được chọn, thêm vào mảng categoryId
            setCategoryId((prevCategoryIds) => [...prevCategoryIds, option.categoryId]);
        } else {
            // Nếu checkbox không được chọn, lọc ra khỏi mảng categoryId
            setCategoryId((prevCategoryIds) =>
                prevCategoryIds.filter((id) => id !== option.categoryId)
            );
        }
    };
    const handleCheckboxChangeService = (index, option) => {
        const newCheckboxesService = [...checkboxesService];
        newCheckboxesService[index] = !newCheckboxesService[index];
        setCheckboxesService(newCheckboxesService);
        if (newCheckboxesService[index]) {
            setServiceId((prevServiceIds) => [...prevServiceIds, option.serviceId]);
            setPrice((prevServicePrices) => [...prevServicePrices, option.servicePrice]);
        } else {
            setServiceId((prevServiceIds) =>
                prevServiceIds.filter((id) => id !== option.serviceId)
            );
            setPrice((prevServicePrices) =>
                prevServicePrices.filter((price) => price !== option.servicePrice)
            );
        }
    };



    const CreateService = async () => {
        const dataCategory = {
            storeId: 1,
            categoryId: categoryId
        }

        const dataService = {
            storeId: 1,
            serviceId: serviceId,
            price: price
        }
        await axios.post(`http://shoeshine-001-site1.ftempurl.com/add-category-store`, dataCategory)
            .then(res => {
                if (res.status === 200) {
                    Alert.alert("Cate: success!!")
                }
            })
            .catch(err => { console.log('Cate Fail') })

        await axios.post(`http://shoeshine-001-site1.ftempurl.com/add-service-store`, dataService)
            .then(res => {
                if (res.status === 200) {
                    Alert.alert("Service: success!!")
                }
            })
            .catch(err => { console.log('Ser: Fail') })
    }



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
                    <View style={{ marginBottom: wp('5%') }}>
                        <Text style={{ fontSize: wp('4%'), fontWeight: 'bold' }}>Type Of Shoes <Text style={{ color: 'red' }}>*</Text></Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: wp('120%') }}>
                    {dataFromApi.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            style={{ flexDirection: 'row', alignItems: 'center', marginBottom: hp('2%') }}
                            onPress={() => handleCheckboxChange(index, option)}
                        >
                            <View
                                style={{
                                    width: wp('6%'),
                                    height: wp('6%'),
                                    borderRadius: 12,
                                    borderWidth: 2,
                                    borderColor: checkboxes[index] ? 'blue' : 'gray',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginRight: wp('0.8%'),
                                }}
                            >
                                {checkboxes[index] && (
                                    <View
                                        style={{
                                            width: wp('4%'),
                                            height: hp('2%'),
                                            borderRadius: 8,
                                            backgroundColor: 'blue',
                                        }}
                                    />
                                )}
                            </View>
                            <Text style={{ marginRight: wp('5%'), fontSize: wp('3.1%') }}>{option.categoryName}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View style={styles.Input}>
                <View style={styles.InputTitle}>
                    <View style={{ marginBottom: wp('5%') }}>
                        <Text style={{ fontSize: wp('4%'), fontWeight: 'bold' }}>Store Service <Text style={{ color: 'red' }}>*</Text></Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: wp('100%') }}>
                    {dataFromService.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            style={{ flexDirection: 'row', alignItems: 'center', marginBottom: hp('2%'), marginRight: wp('7%') }}
                            onPress={() => handleCheckboxChangeService(index, option)}
                        >
                            <View
                                style={{
                                    width: wp('6%'),
                                    height: wp('6%'),
                                    borderRadius: 12,
                                    borderWidth: 2,
                                    borderColor: checkboxesService[index] ? 'blue' : 'gray',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginRight: wp('2%'),
                                }}
                            >
                                {checkboxesService[index] && (
                                    <View
                                        style={{
                                            width: wp('4%'),
                                            height: hp('2%'),
                                            borderRadius: 8,
                                            backgroundColor: 'blue',
                                        }}
                                    />
                                )}
                            </View>
                            <Text style={{ marginRight: wp('5%'), fontSize: wp('3.1%'), width: wp('35%') }}>{option.serviceName}</Text>
                            <View>
                                <TextInput
                                    placeholder={` ${option.servicePrice}`}
                                    onChangeText={handleInputChange}
                                    style={styles.PriceInput}
                                    editable={false}

                                />
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View style={styles.Features}>
                <TouchableOpacity>
                    <View style={styles.FeaturesElement}>
                        <Image source={require('../assets/menu.png')} style={styles.Icon} />
                        <Text style={{ marginLeft: 10 }}>Type Of Shoes <Text style={{ color: 'red' }}>*</Text></Text>
                        <View style={styles.InputTitleLength}>
                            <Image source={require('../assets/next.png')} style={styles.Icon} />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.FeaturesElement}>
                        <Image source={require('../assets/category.png')} style={styles.Icon} />
                        <Text style={{ marginRight: 10, marginLeft: 10 }}>Store Service</Text>
                        <Image source={require('../assets/question.png')} style={styles.Icon} />
                        <View style={styles.InputTitleLength}>
                            <Image source={require('../assets/next.png')} style={styles.Icon} />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleModal}>
                    <View style={styles.FeaturesElement}>
                        <Image source={require('../assets/online-shop.png')} style={styles.Icon} />
                        <Text style={{ marginLeft: 10 }}>Price <Text style={{ color: 'red' }}>*</Text></Text>
                        <Modal isVisible={isModalVisible} onBackdropPress={toggleModal} >
                            <View style={{ height: hp('50%'), justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white' }}>
                                {dataFromService.map((option, index) => (
                                    <View style={{ flexDirection: 'row', marginTop: hp('2%') }} key={index}>
                                        <Text style={styles.NamePrice}>{option.serviceName}</Text>
                                        <TextInput
                                            placeholder={` ${option.servicePrice}`}
                                            onChangeText={handleInputChange}
                                            style={styles.PriceInput}
                                        />
                                    </View>
                                ))}
                                <View style={{ flexDirection: 'row', marginBottom: hp('1%'), marginTop: hp('2%') }}>
                                    <TouchableOpacity style={styles.ButtonPrice} onPress={handleSave}>
                                        <Text style={{ fontSize: wp('4%'), marginTop: hp('1.5%'), color: 'white', fontWeight: '500' }}>Lưu</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.Cancel} onPress={toggleModal}>
                                        <Text style={{ fontSize: wp('4%'), marginTop: hp('1.5%'), color: 'white', fontWeight: '500' }}>Hủy</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    </View>
                </TouchableOpacity>
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
                <TouchableOpacity style={styles.ButtonELement} onPress={CreateService}>
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
    },
    PriceInput: {
        borderWidth: 1,
        borderColor: 'blue',
        width: wp('40%'),
        marginLeft: wp('2.3%'),
        borderRadius: 5,
        paddingLeft: wp('2%'),
        height: hp('5%'),
    },
    NamePrice: {
        marginTop: hp('0.5%'),
        fontSize: wp('4%'),
        width: wp('35%'),
        textAlign: 'left'
    },
    ButtonPrice: {
        borderColor: 'blue',
        borderWidth: 1,
        marginRight: wp('20%'),
        paddingHorizontal: wp('10%'),
        height: hp('6%'),
        borderRadius: 5,
        width: wp('29%'),
        backgroundColor: "#40BFFF",
    },
    Cancel: {
        borderColor: 'blue',
        borderWidth: 1,
        paddingHorizontal: wp('10%'),
        height: hp('6%'),
        borderRadius: 5,
        width: wp('29%'),
        backgroundColor: "#898A8D"
    }
}) 