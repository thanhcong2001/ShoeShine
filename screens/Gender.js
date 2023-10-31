import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Gender = () => {
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: '1', value: 'Male' },
    { key: '2', value: 'Female' },
    { key: '3', value: 'Other' },
  ]
  return (
    <View style={styles.Container}>
      <View>
        <Text style={styles.Title}>Choose Gender</Text>
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={data}
          save="value"
          search={false}
          defaultOption={{ key: '1', value: 'Male' }}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.Button} activeOpacity={0.7}>
          <Text style={styles.Txt}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Gender

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#EBF0FF',
    paddingLeft: wp('4%'),
    paddingRight: wp('4%'),
    justifyContent:'space-between',
    marginBottom:hp('2%')
  },
  Title: {
    fontWeight: 'bold',
    fontSize: wp('5%'),
    paddingTop: hp('2%'),
    paddingBottom: hp('2%')
  },
  Option: {
    color: '#40BFFF'
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