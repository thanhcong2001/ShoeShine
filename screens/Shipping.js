import {
  Button,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRoute } from "@react-navigation/native";

const Shipping = ({ navigation, route }) => {
  // const { options,services} = route.params;
  // const route = useRoute();
  // console.log(route.params.dataToSend);
  const [isEditable, setIsEditable] = useState(false);
  const handleEditPress = () => {
    setIsEditable(true);
  };
  return (
    <View style={styles.Container}>
      <View>
        <View style={styles.Border}>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={styles.Ship}>Delivery</Text>
            <TextInput
              editable={isEditable}
              style={{ marginBottom: hp("0.5%") }}
              placeholder="12/11 Street 109, Phuoc Long B Ward"
            />
            <TextInput
              editable={isEditable}
              style={{ marginBottom: hp("0.5%") }}
              placeholder="+99 1234567890"
            />
            <TouchableOpacity
              style={styles.Button}
              activeOpacity={0.7}
              onPress={handleEditPress}
            >
              <Text style={styles.Txt}>Edit</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        <View style={styles.BorderBring}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              navigation.navigate("Cart");
            }}
          >
            <Text style={styles.Ship}>Bring To The Store</Text>
            <Text style={styles.Contact}>
              You Bring Your Own Shoes To The Store
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Shipping;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#EBF0FF",
    paddingLeft: wp("4%"),
    paddingRight: wp("4%"),
    justifyContent: "space-between",
  },
  Button: {
    borderWidth: 2,
    borderRadius: 10,
    height: hp("7%"),
    borderColor: "#EBF0FF",
    paddingLeft: wp("5%"),
    backgroundColor: "#40BFFF",
    width: wp("20%"),
    marginBottom: hp("1%"),
  },
  Txt: {
    alignSelf: "center",
    marginTop: hp("1.7%"),
    fontWeight: "bold",
    color: "white",
    marginRight: wp("5%"),
  },
  Border: {
    marginTop: hp("2%"),
    borderWidth: 1.5,
    borderColor: "#40BFFF",
    borderRadius: 10,
    paddingLeft: wp("5%"),
  },
  Contact: {
    marginBottom: hp("1%"),
    color: "#796B6B",
  },
  Ship: {
    fontWeight: "bold",
    color: "#223263",
    marginBottom: hp("1%"),
    fontSize: wp("4%"),
    marginTop: hp("1%"),
  },
  BorderBring: {
    marginTop: hp("2%"),
    borderWidth: 1.5,
    borderColor: "#40BFFF",
    borderRadius: 10,
    paddingLeft: wp("5%"),
    paddingTop: hp("2%"),
    paddingBottom: hp("2%"),
  },
});
