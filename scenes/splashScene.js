import React, { Component } from 'react'
import { Image } from 'react-native'
import { View } from 'native-base'
import { Navigator } from 'react-native-deprecated-custom-components'

export default class SplashScene extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // const { stores } = this.props
    // setTimeout(() => {
    //   this.props.navigator.replace({title: "Login", passProps: this.props})
    // },stores.settings.splashTime)
  }

  componentWillMount(){
    const { stores } = this.props
    setTimeout(() => {
      // this.props.navigator.replace({title: "Login", passProps: this.props, SceneConfigs: Navigator.SceneConfigs._detachGesture})
      this.props.navigator.replace({title: "Login", passProps: this.props})
    },stores.settings.splashTime)
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
