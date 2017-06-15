import React, {Component} from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Dimensions} from 'react-native';

import Drawer from 'react-native-drawer';
import {Actions, DefaultRenderer} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get('window');


export default class SideMenu extends Component {

     _logout(){
          this.props.state.stores.auth.signOff()
          Actions.loginpage()
     }

    render(){
      console.log("SideMenu: ", this)

      const menuDescription = [
        {id: 1, title: 'Match Scene', nav: Actions.matchScene},
        {id: 2, title: 'Logout', nav: this._logout.bind(this)}

      ];

      const menuItems = menuDescription.map(item => (
        <TouchableOpacity key={item.id} onPress={this.props.pressMenu.bind(this, item.nav, item.title)}>
          <View>
            <Text>
            {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      ))

     console.log(this.props.state.user)
      return (
        <View style={{ flex: 1, backgroundColor: 'red' }}>
            <View style={{ alignItems: 'center' , paddingTop: 40}}>
               <Text style={{color: '#ffff'}}>Welcome {this.props.state.user}</Text>
            </View>
            <View style={{ height, alignItems: 'center', justifyContent: 'center' }}>
              { menuItems }
            </View>
          </View>
      )
    }
}
