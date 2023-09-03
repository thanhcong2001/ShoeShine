import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/LoginForm';
import SignUp from '../screens/SignUp'
import Main from '../screens/Login'
import Home from '../screens/HomePage'
import StoreDetails from '../screens/StoreDetails'
import StoreNearYou from '../screens/StoreNearYou'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from '../screens/Cart'
import Explore from '../screens/Explore'
import Setting from '../screens/Setting'
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

//Bottom navigator
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ color }) => <Icon name="home" size={25} color={color} />, headerShown: false }} />
      <Tab.Screen name="Explore" component={Explore} options={{
        tabBarIcon: ({ color }) => <Icon name="search" size={25} color={color} />, headerShown: false
      }} />
      <Tab.Screen name="Cart" component={Cart} options={{
        tabBarIcon: ({ color }) => <Icon name="shopping-cart" size={25} color={color} />,
      }} />
      <Tab.Screen name="Setting" component={Setting} options={{
        tabBarIcon: ({ color }) => <Icon name="user" size={25} color={color} />,
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
                    height: hp('2.5%'), marginLeft:wp('16%')
                  }}
                />
              </TouchableOpacity>
            </View>
          )
        }} />
      <Stack.Screen name="StoreDetails" component={StoreDetails} options={({ route}) => ({ title: route.params.storeName })} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
