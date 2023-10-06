import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/LoginForm';
import SignUp from '../screens/SignUp'
import Main from '../screens/Login'
import Home from '../screens/HomePage'
import StoreDetails from '../screens/StoreDetails'
import StoreNearYou from '../screens/StoreNearYou'
import Profile from '../screens/Profile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Shipping from '../screens/Shipping'
import UpdateName from '../screens/UpdateName'
import Explore from '../screens/Explore'
import Setting from '../screens/Setting'
import Gender from '../screens/Gender'
import UpdatePhone from '../screens/UpdatePhone'
import UpdateEmail from '../screens/UpdateEmail'
import UpdatePass from '../screens/UpdatePass'
import Review from '../screens/Review'
import WriteFeed from '../screens/WriteFeed'
import Payment from '../screens/Payment'
import RegisterStore from '../screens/RegisterStore'
import Cart from '../screens/Cart'
import Store from '../screens/Store'

import AddProduct from '../screens/AddProduct'

import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MyProducts from '../screens/MyProducts';

//Bottom navigator
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ color }) => <Icon name="home" size={wp('7%')} color={color} />, headerShown: false }} />
      <Tab.Screen name="Explore" component={Explore} options={{
        tabBarIcon: ({ color }) => <Icon name="search" size={wp('7%')} color={color} />, headerShown: false
      }} />
      <Tab.Screen name="Cart" component={Cart} options={{
        tabBarIcon: ({ color }) => <Icon name="shopping-cart" size={wp('7%')} color={color} />,
        headerTitle: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: wp('5%'), letterSpacing: wp('0.1%'), marginLeft: wp('20%'), fontWeight: 'bold', color: '#223263' }}>Your Shopping Cart</Text>
            <TouchableOpacity>
              <Image
                source={require('../assets/loupe.png')} // Thay bằng đường dẫn tới icon search
                style={{
                  width: wp('5.2%'),
                  height: hp('2.5%'), marginLeft: wp('15%')
                }}
              />
            </TouchableOpacity>
          </View>
        )
      }} />
      <Tab.Screen name="Account" component={Setting} options={{
        tabBarIcon: ({ color }) => <Icon name="user" size={wp('7%')} color={color} />,
      }} />
    </Tab.Navigator>
  );
}
const Stack = createStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="HomePage" component={MyTabs} options={{ headerShown: false }} />
      <Stack.Screen name='StoreNearYou' component={StoreNearYou}
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: wp('5%'), letterSpacing: 1, marginLeft: wp('10%'), fontWeight: 'bold', color: '#223263' }}>Store Near You</Text>
              <TouchableOpacity>
                <Image
                  source={require('../assets/loupe.png')} // Thay bằng đường dẫn tới icon search
                  style={{
                    width: wp('5.2%'),
                    height: hp('2.5%'), marginLeft: wp('16%')
                  }}
                />
              </TouchableOpacity>
            </View>
          )
        }} />
      <Stack.Screen name="StoreDetails" component={StoreDetails} options={({ route }) => ({ title: route.params.storeName })} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="UpdateName" component={UpdateName} options={{ title: 'Name' }} />
      <Stack.Screen name="Gender" component={Gender} options={{ title: 'Gender' }} />
      <Stack.Screen name="UpdateEmail" component={UpdateEmail} options={{ title: 'Email' }} />
      <Stack.Screen name="UpdatePhone" component={UpdatePhone} options={{ title: 'Phone Number' }} />
      <Stack.Screen name="UpdatePass" component={UpdatePass} options={{ title: 'Change Password' }} />
      <Stack.Screen name="Review" component={Review} options={{ title: 'Review' }} />
      <Stack.Screen name="WriteFeed" component={WriteFeed} options={{ title: 'Write Review' }} />
      <Stack.Screen name="RegisterStore" component={RegisterStore} options={{ title: 'Register Store' }} />
      <Stack.Screen name="MyProducts" component={MyProducts}
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: wp('5%') }}>My Products</Text>
              <TouchableOpacity>
                <Image
                  source={require('../assets/loupe.png')} // Thay bằng đường dẫn tới icon search
                  style={{
                    width: wp('5.2%'),
                    height: hp('2.5%'), marginLeft: wp('30%')
                  }}
                />
              </TouchableOpacity>
            </View>
          )
        }}
      />
      <Stack.Screen name="Payment" component={Payment} options={{ title: 'Payment' }} />
      <Stack.Screen name="Shipping" component={Shipping} options={{ title: 'Booking Service' }} />
      <Stack.Screen name="Store" component={Store} options={{ title: 'Store' }} />
      <Stack.Screen name="AddProduct" component={AddProduct} options={{ title: 'Add Product' }} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
