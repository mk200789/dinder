import React, { Component } from 'react'
import {
  Container,
  Content,
  View,
  Button
} from 'native-base'
import {Image, StyleSheet, Dimensions} from 'react-native'
import Login from '../components/login'
import {observer} from 'mobx-react/native'


@observer
export default class LoginScene extends Component{
     constructor(props){
          super(props)
     }

     componentDidMount(){
          this.props.state.current_page = this.props.title
     }


     render(){
          console.log("loginscene.js: ", this, this.props.state.stores.auth.authUser)
          const { theme, stores } = this.props.state
           return (
                <Container theme={theme}>
                    <View style={style.container}>
                         <Content scrollEnabled={false}>
                              <Image style={style.loginBackground} source={stores.settings.LoginBG}>
                              <View style={style.loginForeground} >
                                   <Login {...this.props}/>
                              </View>
                              </Image>
                         </Content>
                    </View>
               </Container>
          )
     }
}


const style = StyleSheet.flatten({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  loginBackground: {
    flex:1,
    width: null,
    height: null
  },
  loginForeground: {
    flex:1,
    marginTop: Dimensions.get('window').height/1.75,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 90,
    bottom: 0
  }
})
