import React, {Component} from 'react';
import {Text, View} from 'react-native';

import Drawer from 'react-native-drawer';
import SideMenu from './SideMenu';
import {Actions, DefaultRenderer} from 'react-native-router-flux';

export default class NavigationDrawer extends Component{
  constructor(props){
    super(props)
  }

  _onClose(statekey){
    Actions.refresh({key:statekey, open: false})
  }

  _onOpen(statekey){
    Actions.refresh({key:statekey, open: true})
  }

  _hideMenu(){
    this._drawer.close()
  }

  _pressMenu(action, title){
    if (this.props.state.current_page == title){
      this._hideMenu()
    }
    action()
  }

  render(){
    // console.log("NavigationDrawer.js: ", this)
    const state = this.props.navigationState;
    const children = state.children;
    return(
      <Drawer
          ref={(ref) => {this._drawer = ref}}
          open={state.open}
          onOpen={this._onOpen.bind(state.key)}
          onClose={this._onClose.bind(state.key)}
          type="overlay"
          content={<SideMenu state={this.props.state} hideMenu={this._hideMenu.bind(this)} pressMenu={this._pressMenu.bind(this)}/>}
          tapToClose={true}
          openDrawerOffset={0.2}
          panCloseMask={0.2}
          negotiatePan={true}
          tweenHandler={(ratio) => ({
           main: { opacity:Math.max(0.54,1-ratio) }
          })}
        >

          <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    )
  }
}
