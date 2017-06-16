import React, { Component } from 'react'
import {
  Container,
  Header,
  Content,
  View,
  Button,
  Title,
  Text
} from 'native-base'
import {Router, Scene, ActionConst, Actions} from 'react-native-router-flux';



export default class SettingScene extends Component {


  componentDidMount(){
      this.props.state.current_page = this.props.title

  }

  render(){
    return (
      <Container style={{margin: 128}}>
        <View>
          <Text> This is MatchScene </Text>
        </View>
      </Container>
    )
  }
}
