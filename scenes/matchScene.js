import React, { Component } from 'react'
import {
  Container,
  Header,
  Content,
  Icon,
  View,
  Button,
  Title,
  Text
} from 'native-base'

export default class MatchScene extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
      this.props.state.current_page = this.props.title
  }

  render(){
       console.log("matchScene.js: ", this)
    return (
      <Container style={{margin: 128}}>
        <View>
          <Text> This is MatchScene </Text>
        </View>
      </Container>
    )
  }
}
