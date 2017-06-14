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
    const {auth} = this.props.stores
    const {email, password} = this.state
    this.setState({loading: true}, () => {
      auth.signIn({email, password})
        .then(() => {
          this.props.navigator.replace({
            title: 'Match',
            passProps: this.props
          })
        })
    })
  }

  render(){
    const {loading} = this.state
    const {auth} = this.props.stores

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