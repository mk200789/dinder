import React, {Component} from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Dimensions} from 'react-native';

import Drawer from 'react-native-drawer';
import {Actions, DefaultRenderer} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get('window');
import {List, ListItem} from 'native-base'


export default class SideMenu extends Component {

     _logout(){
          this.props.state.stores.auth.signOff()
          Actions.loginpage()
     }

    render(){

      const menuDescription = [
        {id: 1, title: 'Feed', nav: Actions.feedScene},
        {id: 2, title: 'Settings', nav: Actions.settingScene},
        {id: 3, title: 'Logout', nav: this._logout.bind(this)}

      ];

      const menuItems = menuDescription.map(item => (

        <TouchableOpacity key={item.id} onPress={this.props.pressMenu.bind(this, item.nav, item.title)} style={{width: width*0.54 , margin: 2, padding: 5, borderWidth: 1, borderColor: '#c6cad1', height: 30}}>
          <View>
               <Text>
               {item.title}
               </Text>
          </View>
        </TouchableOpacity>
      ))


      return (
        <View style={{ flex: 1, backgroundColor: '#e8ecf2' }}>
            <View style={{ alignItems: 'center' , paddingTop: 70}}>
               <Text style={{color: '#000'}}>Welcome {this.props.state.user}</Text>
            </View>
            <View style={{ height, alignItems: 'center', justifyContent: 'center' }}>
              { menuItems }
            </View>
          </View>
      )
    }
}
