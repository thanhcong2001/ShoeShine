import { View, Text, Image, SafeAreaView, StyleSheet, Button, FlatList, TouchableOpacity } from "react-native";
import copyLogo from "../assets/copyLogo.png";
import banner from "../assets/banner.png";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import box from "../assets/box.png";
import wallet from "../assets/wallet.png";
import chart from "../assets/chart.png";
import marketing from "../assets/marketing.png";
import crown from "../assets/crown.png";
import help from "../assets/question.png";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import * as Progress from "react-native-progress";

const DATA = [
  {
    id: "1",
    title: "Trang trí Shop cơ bản cho phiên bản di động",
    reward: "Nhận 1 lần Đẩy sản phẩm",
    numberDoTask: 1,
  },
];

const Item = ({ task }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: wp("2%"),
      gap: wp("8%"),
    }}
  >
    <View style={{ flex: 3 }}>
      <Text style={{ fontSize: wp('4.3%') }}>{task.title}</Text>
      <View style={{ marginTop: hp("0.4%"), gap: hp("0.4%") }}>
        <Text>{task.reward}</Text>
        <Progress.Bar progress={1} width={null} />
      </View>
    </View>
    <View style={{ flex: 1 }}>
      <Button title="Bắt Đầu" color={"#40BFFF"} />
    </View>
  </View>
);

export default function Store({ navigation }) {
  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: wp("2%") }}>
          <Image
            source={{
              uri: "https://cdn.create.vista.com/downloads/eafa9999-cb7e-49be-918d-2b7f1197dbbf_1024.jpeg",
            }}
            style={styles.Logo}
          />
          <View>
            <Text style={{ fontWeight: 800, fontSize: wp('5%'),marginLeft:wp('5%') }}>Shop giá rẻ 0209</Text>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontSize: wp('3.5%'), color: "#949494",marginLeft:wp('5%') }}>shopep.vn/vu_demon.0209</Text>
              <Image source={copyLogo} style={styles.CopyLogo} />
            </View>
          </View>
        </View>
      </View>

      <Image source={banner} resizeMode="cover" style={styles.Banner} />

      <View
        style={{
          padding: wp("2%"),
          backgroundColor: "white",
          paddingBottom: wp("4.4%"),
          flex: 2,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text style={{ fontSize: wp('5%'), fontWeight: 600 }}>Đơn hàng</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: wp('5%'), color: "#949494" }}>Xem lịch sử đặt hàng </Text>
            <Icon name="chevron-right" size={wp("3.6%")} color={"#949494"} style={{ marginTop: hp("1%") }} />
          </View>
        </View>

        <View style={{ flexDirection: "row", marginTop: hp("2%"), gap: wp("2%") }}>
          <View style={styles.Status}>
            <Text style={{ fontSize: wp('6%') }}>0</Text>
            <Text style={{ fontSize: wp('3%'), color: "#7E7E7E" }}>Chờ lấy hàng</Text>
          </View>
          <View style={styles.Status}>
            <Text style={{ fontSize: wp('6%') }}>0</Text>
            <Text style={{ fontSize: wp('3%'), color: "#7E7E7E" }}>Đơn hủy</Text>
          </View>
          <View style={styles.Status}>
            <Text style={{ fontSize: wp('6%') }}>0</Text>
            <Text style={{ fontSize: wp('3%'), color: "#7E7E7E" }}>Trả hàng/Hoàn tiền</Text>
          </View>
          <View style={styles.Status}>
            <Text style={{ fontSize: wp('6%') }}>0</Text>
            <Text style={{ fontSize: wp('3%'), color: "#7E7E7E" }}>Phản hồi đánh giá</Text>
          </View>
        </View>
      </View>

      <View style={{ gap: wp("8%"), backgroundColor: "white", padding: wp("4%"), marginTop: hp("0.8%"), flex: 3 }}>
        {/*  */}
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", flex: 1, gap: hp("1.2%") }} onPress={() => navigation.navigate('MyProducts')}>
            <View style={{ width:wp('10%'), height: hp('4.5%') }}>
              <Image source={box} style={styles.Icon} />
            </View>
            <Text style={{ color: "#B3B3B3" }}>Sản phẩm của tôi</Text>
          </TouchableOpacity>
          <View style={{ alignItems: "center", justifyContent: "center", flex: 1, gap: hp("1.2%") }}>
            <View style={{ width:wp('10%'), height: hp('4.5%')  }}>
              <Image source={wallet} style={styles.Icon} />
            </View>
            <Text style={{ color: "#B3B3B3" }}>Tài chính</Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center", flex: 1, gap: hp("1.2%") }}>
            <View style={{ width:wp('10%'), height: hp('4.5%')  }}>
              <Image source={chart} style={styles.Icon} />
            </View>
            <Text style={{ color: "#B3B3B3" }}>Hiệu quả bán hàng</Text>
          </View>
        </View>
        {/*  */}
        <View style={{ flexDirection: "row" }}>
          <View style={{ alignItems: "center", justifyContent: "center", flex: 1, gap: hp("1.2%") }}>
            <View style={{ width:wp('10%'), height: hp('4.5%')  }}>
              <Image source={marketing} style={styles.Icon} />
            </View>
            <Text style={{ color: "#B3B3B3" }}>Kênh Marketing</Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center", flex: 1, gap: hp("1.2%") }}>
            <View style={{ width:wp('10%'), height: hp('4.5%')  }}>
              <Image source={crown} style={styles.Icon} />
            </View>
            <Text style={{ color: "#B3B3B3" }}>Đặc quyền Shop</Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center", flex: 1, gap: hp("1.2%") }}>
            <View style={{ width:wp('10%'), height: hp('4.5%')  }}>
              <Image source={help} style={styles.Icon} />
            </View>
            <Text style={{ color: "#B3B3B3" }}>Trung tâm hỗ trợ</Text>
          </View>
        </View>
        {/*  */}
      </View>

      <View style={{ backgroundColor: "white", marginTop: hp("0.8%"), padding: hp("0.8%"), flex: 2 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 20, fontWeight: 600 }}>Nhiệm Vụ</Text>
          <View style={{ flexDirection: "row", gap: wp("2 %") }}>
            <Text style={{ color: "#949494", fontSize: 20 }}>Xem thêm</Text>
            <Icon name="chevron-right" size={16} color={"#949494"} style={{ marginTop: hp("0.8%") }} />
          </View>
        </View>
        {/*  */}
        <View style={{ marginTop: hp("1%"), borderStyle: "solid", borderColor: "#EBEBEB", borderWidth: 2 }}>
          <FlatList data={DATA} renderItem={({ item }) => <Item task={item} />} keyExtractor={(task) => task.id} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Logo: {
    marginLeft:wp('2.5%'),
    width: wp("15%"),
    height: wp("15%"), // Đảm bảo chiều rộng và chiều cao bằng nhau
    borderRadius: wp("7.5%"),
  },
  Header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp('0.2%'),
    backgroundColor: "white",
    padding: wp("2%"),
    flex: 1,
  },
  CopyLogo: {
    width: wp("3.2%"),
    height: hp("3.2%"),
    marginLeft: wp("1.2%"),
  },
  Banner: {
    width: "auto",
    flex: 2,
  },
  Status: {
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: wp("2.4%"),
  },

  Icon: {
    width: wp('10%'),
    height: wp('10%'),

  },
});
