import React from 'react'
import {Text, View} from 'react-native'

const Header = props => {
  const {textStyling, viewStyle} = styles
  return (
    <View style={viewStyle}>
      <Text style={textStyling}> {props.title} </Text>
    </View>
  )
}

const styles = {
  textStyling: {
    fontSize: 20,
  },
  viewStyle: {
    backgroundColor: '#f8f8f8',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 35,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
  },
}

export default Header
