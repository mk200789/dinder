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

import CreateNewPost from '../components/createNewPost'

import Icon from 'react-native-vector-icons/FontAwesome';

export default class CreateNewPostScene extends Component {

     componentDidMount(){
          this.props.state.current_page = this.props.title
     }


  render(){
    return (
      <Container style={{marginTop: 128, marginLeft: 10, marginRight: 10, marginBottom: 10, alignItems: 'center'}}>
          <View>
               <CreateNewPost />
           </View>
      </Container>
    )
  }
}
