import React from 'react'
import {View, Text} from 'react-native'

const CarDetail = props => {
  return (
    <View>
      <Text>{props.brand.model[0].name}</Text>
    </View>
  )
}
export default CarDetail
