import React, { Component } from 'react'
import {Text, Button} from 'react-native'
import styles from './style'


export default class MyNotificationsScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}
