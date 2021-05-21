import React, {Component} from 'react'
import {View, Text} from 'react-native'

class CarList extends Component {
  componentDidMount () {
    console.log('hello')
  }
  render () {
    return (
      <View>
        <Text>Car List</Text>
      </View>
    )
  }
}

export default CarList
