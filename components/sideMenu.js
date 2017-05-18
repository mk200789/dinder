import React, { Component } from 'react'
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  View,
  Button
} from 'native-base'
import {StyleSheet} from 'react-native'
import styles from './style'

export default class SideMenu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log("sideMenu.js")
    let list = [{
      title: "Match",

      onPress: () => {
        this.props.navigator.replace({
          title: 'Match',
          passProps: this.props
        })
        this.props.toggleDrawer()
      }
    }, {
      title: "History",
        onPress: () => {
          this.props.navigator.replace({
            title: 'History',
            passProps: this.props
          })
          this.props.toggleDrawer()
        }
    },{
      title: "SignOut",
      onPress: () => {
        this.props.navigator.replace({title: "SignOut", passProps: this.props})
        this.props.toggleDrawer()
      }
    }]

    return (
      <Container style={{marginTop:50, marginLeft: -10, marginRight: 6}} theme={this.props.theme}>
        <View>
          <List dataArray={list} renderRow={(item) =>
            <ListItem button onPress={item.onPress.bind(this)} style={{borderBottomWidth: 0}}>
              <Text style={{color:'black'}}> {item.title} </Text>
            </ListItem>
          }/>
        </View>
      </Container>
    )
  }
}
