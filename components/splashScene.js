import React, { Component } from 'react'
import { Image } from 'react-native'
import { View } from 'native-base'

export default class SplashScene extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log("componentDidMount");
    const { stores } = this.props
    setTimeout(() => {
      this.props.navigator.replace({title: "Login"})
    },stores.settings.splashTime)
  }

  componentWillMount(){
    console.log("componentWillMount");
  }
  render() {
    const { settings } = this.props.stores

    return (
      <View style={{flex: 1}}>
        <Image style={{flex: 1, width: null, height: null}} source={settings.SplashImg}/>
      </View>
    )

  }
}
