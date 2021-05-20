import React from 'react'
import {View, AppRegistry} from 'react-native'
import Header from './src/components/Header'

const App = () => {
  return <Header title={'Cars'} />
}
AppRegistry.registerComponent('sampleProject', () => App)
