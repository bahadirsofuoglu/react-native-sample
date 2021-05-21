import React from 'react'
import {View, Text} from 'react-native'

import Item from './Item'
const CarDetail = props => {
  return (
    <Item>
      <Text>{props.brand.model[0].name}</Text>
    </Item>
  )
}
export default CarDetail
