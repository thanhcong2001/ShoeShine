import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const endComponent = () => {
    return (
        <View style={{ alignItems: 'center', width: wp('100%'), paddingTop: hp('1%') }}>
            <Text style={{ color: '#8b8b8b' }}>End Screen Reached</Text>
        </View>
    );
};

const emptyComponent = () => {
    return (
        <View style={{ alignItems: 'center', width: wp('100%'), paddingTop: hp('1%') }}>
            <Text style={{ color: '#8b8b8b' }}> You don't have any products</Text>
        </View>
    );
};

const MyProducts = ({ navigation }) => {
    //Status list
    const status = [
        { id: '1', name: 'Available', count: 16 },
        { id: '2', name: 'Out of order', count: 35 },
        { id: '3', name: 'In validation', count: 0 },
        { id: '4', name: 'Violated', count: 4 },
    ];

    const renderStatusItem = ({ item }) => (
        <TouchableOpacity style={styles.RenderContainer}>
            <Text>{item.name}</Text>
            <Text>&#40;{item.count}&#41;</Text>
        </TouchableOpacity>
    );

    //Product List
    // const product = [
    //     {
    //         id: '1', name: 'Shoes Air K-1 Type Student', image: require('../assets/myshoes1.png'),
    //         price: 100000, inStore: 2, sold: 0, like: 0, view: 0
    //     },
    //     {
    //         id: '2', name: 'Shoes Nike A93 Type Street', image: require('../assets/myshoes2.png'),
    //         price: 100000, inStore: 2, sold: 0, like: 0, view: 0
    //     }
    // ];

    const renderProductItem = ({ item }) => (
        <View style={styles.RenderProductContainer}>
            <View style={styles.ImageNameInfo}>
                <View>
                    <Image source={{ uri: item.image }} style={styles.Image} resizeMode="contain" />
                </View>
                <View style={{ marginLeft: wp('2%') }}>
                    <Text style={{ padding: wp('2%'), fontSize: 15 }}>{item.name}</Text>
                    <Text style={{ paddingLeft: wp('2%'), fontSize: 15 }}>₫{item.price}</Text>
                </View>
            </View>
            <View style={styles.ProductStatsMainContainer}>
                <View style={styles.ProductStatsContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/StackIcon.png')} style={styles.Icon} resizeMode="contain" />
                        <Text style={styles.ProductStats}>In store {item.inStore}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/BagIcon.png')} style={styles.Icon} resizeMode="contain" />
                        <Text style={styles.ProductStats}>Sold {item.sold}</Text>
                    </View>
                </View>
                <View style={styles.ProductStatsContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/HeartIcon.png')} style={styles.Icon} resizeMode="contain" />
                        <Text style={styles.ProductStats}>Like {item.like}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/EyeIcon.png')} style={styles.Icon} resizeMode="contain" />
                        <Text style={styles.ProductStats}>View {item.view}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: wp('100%'), marginTop: hp('2%') }}>
                <TouchableOpacity style={styles.ProductButton} activeOpacity={0.7}>
                    <Text style={styles.ProductTxt}>Show</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ProductButton} activeOpacity={0.7}>
                    <Text style={styles.ProductTxt}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ProductButton} activeOpacity={0.7}>
                    <Text style={styles.ProductTxt}>...</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setErrorFlag] = useState(false);

    //Get Data in Mockapi
    useEffect(() => {
        const abortController = new AbortController();
        const url = `https://64929a64428c3d2035d0547b.mockapi.io/MyProducts`;

        const fetchData = async () => {
            try {
                setIsLoading(true);

                const response = await axios.get(url, {
                    signal: abortController.signal,
                });

                if (response.status === 200) {
                    // console.log(response.data)
                    setData(response.data);
                    setIsLoading(false);

                    return;
                } else {
                    throw new Error("Failed to fetch users");
                }
            } catch (error) {
                if (abortController.signal.aborted) {
                    console.log("Data fetching cancelled");
                } else {
                    setErrorFlag(true);
                    setIsLoading(false);
                }
            }
        };

        fetchData();

        return () => abortController.abort("Data fetching cancelled");
    }, []);

    return (
        <View style={styles.Container}>
            <SafeAreaView style={{ flex: 9 }}>
                <View>
                    <FlatList
                        data={status}
                        keyExtractor={item => item.id}
                        renderItem={renderStatusItem}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.StatusList}
                    />
                </View>
                {isLoading ?
                    <View style={{ alignItems: 'center', width: wp('100%'), paddingTop: hp('1%') }}>
                        <Text style={{ color: '#8b8b8b' }}> Loading</Text>
                    </View>
                    :
                    <View>
                        <FlatList
                            data={data}
                            keyExtractor={item => item.id}
                            renderItem={renderProductItem}
                            showsHorizontalScrollIndicator={true}
                            contentContainerStyle={styles.ProductList}
                            ListFooterComponent={endComponent}
                            ListEmptyComponent={emptyComponent}
                        />
                    </View>
                }
            </SafeAreaView>
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => navigation.navigate('AddProduct')} style={styles.Button} activeOpacity={0.7}>
                    <Text style={styles.Txt}>Add product</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    StatusList: {
        width: wp('120%'),
        marginBottom: hp('1%')
    },
    RenderContainer: {
        alignItems: 'center',
        paddingLeft: wp('3%'),
        width: wp('30%'),
        height: hp('6%'),
        backgroundColor: 'white',
    },
    ProductList: {
        width: wp('100%'),
        paddingBottom: hp('10%')
    },
    RenderProductContainer: {
        paddingLeft: wp('3%'),
        paddingRight: wp('3%'),
        width: wp('100%'),
        backgroundColor: 'white',
        marginBottom: hp('1%'),
        paddingTop: hp('1%'),
        paddingBottom: hp('1%')
    },
    Image: {
        width: wp('20%'),
        height: hp('10%'),
        backgroundColor: 'white',
        alignItems: 'center',
    },
    Icon: {
        width: wp('5%'),
        height: hp('5%'),
        alignItems: 'center',
    },
    ImageNameInfo: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#e9e9e9'
    },
    ProductStatsMainContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#e9e9e9'
    },
    ProductStatsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ProductStats: {
        color: '#858585',
        padding: 4,
        width: wp('45%'),
    },
    ProductButton: {
        height: hp('6%'),
        borderColor: '#cccccc',
        borderWidth: 1,
        paddingLeft: wp('10%'),
        paddingRight: wp('10%'),
        marginBottom: hp('2%'),
        marginRight: wp('3%')
    },
    ProductTxt: {
        alignSelf: 'center',
        marginTop: hp('1.5%'),
        color: 'black',
        fontSize: wp('3.5%')
    },
    Button: {
        height: hp('7%'),
        paddingLeft: wp('5%'),
        backgroundColor: '#40BFFF',
        marginBottom: hp('2%')
    },
    Txt: {
        alignSelf: 'center',
        marginTop: hp('1.7%'),
        fontWeight: 'bold',
        color: 'white',
        fontSize: wp('4.4%')
    }
})

export default MyProducts