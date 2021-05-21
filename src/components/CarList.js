import React, {Component} from 'react'
import {View, Text} from 'react-native'
import axios from 'axios'
class CarList extends Component {
  constructor () {
    super()

    this.state = {carList: []}
  }
  componentDidMount () {
    axios.get('https://givecars.herokuapp.com').then(res => {
      this.setState({carList: res.data})
    })
  }

  renderList = () => {
    return this.state.carList.map(brand => (
      <Text key={brand.model[0].name}>{brand.model[0].name}</Text>
    ))
  }
  render () {
    return <View>{this.renderList()}</View>
  }
}

export default CarList
