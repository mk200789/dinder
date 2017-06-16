import React, { Component } from 'react'
import {
  Button,
  InputGroup,
  Input,
  Icon,
  View,
  Text,
  Spinner
} from 'native-base'
import {observer} from 'mobx-react/native'
import {Router, Scene, ActionConst, Actions} from 'react-native-router-flux';
import {AsyncStorage} from 'react-native'


@observer
export default class Login extends Component{
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      loading: null
    }
  }


  updateEmail(email){
    this.setState({email});
  }
  updatePassword(password){
    this.setState({password});
  }

  signIn(){
    const {auth} = this.props.state.stores
    const {email, password} = this.state
    this.setState({loading: true}, () => {
      auth.signIn({email, password})
        .then((text) => {

             this.props.state.user = text.email
             AsyncStorage.setItem("user", text.email)
             Actions.feedScene()
        }).catch(function(error){
             alert("Password/username is incorrect. Please try again.")
        })
    })
  }

  render(){
    const {loading} = this.state
    const {auth} = this.props.state.stores
    return (
      <View theme={this.props.theme} >
        <InputGroup style={{marginBottom: 10}} boarderType='round'>
          <Icon style={{color: "#fff"}} name="ios-person-outline"/>
          <Input style={{color: "#fff"}}
            placeholder="Please Enter Email"
            placeholderTextColor = "#fff"
            onChangeText={(email) => {this.updateEmail(email)}} />
        </InputGroup>
        <InputGroup style={{marginBottom: 10}} boarderType='round'>
          <Icon style={{color: "#fff"}} name="ios-lock"/>
          <Input style={{color: "#fff"}}
            placeholder="Please Enter Password"
            placeholderTextColor = "#fff"
            secureTextEntry={true}
            onChangeText={(password) => {this.updatePassword(password)}} />
        </InputGroup>
        <Button rounded block style={{marginBottom:10}} onPress={this.signIn.bind(this)}>
          <Text>{'Login'}</Text>
        </Button>
      </View>
    )
  }
}
