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

  componentWillMount(){

  }

  render(){
    return (
      <Container theme={this.props.theme}>
        <View>
          <Text> This is MatchScene </Text>
        </View>
      </Container>
    )
  }
}
