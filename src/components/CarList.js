import React, {Component} from 'react'
import {ScrollView} from 'react-native'
import axios from 'axios'

import CarDetail from './CarDetail'
class CarList extends Component {
  constructor () {
    super()

    this.state = {carList: []}
  }
  componentDidMount () {
    axios.get('https://givecars.herokuapp.com').then(res => {
      this.setState({carList: res.data})
      console.log(res.data)
    })
  }

  renderList = () => {
    return this.state.carList.map(brand => (
      <CarDetail key={brand.model[0].name} brand={brand} />
    ))
  }
  render () {
    return <ScrollView>{this.renderList()}</ScrollView>
  }
}

export default CarList
