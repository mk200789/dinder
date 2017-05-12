import React, { Component } from 'react'
import SideMenu from '../components/sideMenu'
import SplashScene from '../components/splashScene'
import theme from '../theme/base-theme'
import SettingsStore from '../stores/settingsStore'

import { Drawer, View } from 'native-base'
import { Navigator } from 'react-native-deprecated-custom-components'

const settings = new SettingsStore()

export default class AppContainer extends Component{
	constructor(props) {
	    super(props)
	    this.state = {
	      toggled: false,
	      store: {
	        settings: settings
	      },
	      theme: theme
	    }
	  }
	  toggleDrawer() {
	    this.state.toggled ? this._drawer.close() : this._drawer.open()
	  }
	  openDrawer() {
			console.log("openDrawer");
	    this.setState({toggled: true})
	  }
	  closeDrawer() {
			console.log("closeDrawer");
	    this.setState({toggled: false})
	  }
	  renderScene(route, navigator) {
	    switch(route.title) {
	      case 'Splash': {
					console.log("splashy", this.state.toggled);
	        return <SplashScene {...route.passProps} navigator={navigator}/>
	      }
	      default: {
					console.log("default");
	        return null
	      }
	    }
	  }
	  configureScene(route, routeStack) {
			console.log("pushfromright");
			if (route.title == 'Splash'){
				console.log('configureScene');
			}
	    return Navigator.SceneConfigs.PushFromRight
	  }

	render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="displace"
        content={<SideMenu navigator={this._navigator} theme={this.state.theme}/>}
        onClose={this.closeDrawer.bind(this)}
        onOpen={this.openDrawer.bind(this)}
        openDrawerOffset={0.2}
				panOpenMask={0.3}
 				captureGestures="open"
				styles={{drawer: {backgroundColor: "#8c5687"}}}
        >
          <Navigator
            ref={(ref) => this._navigator = ref}
            configureScene={this.configureScene.bind(this)}
            renderScene={this.renderScene.bind(this)}
            initialRoute={{
              title: "Splash",
              passProps: {
                stores: this.state.store,
                toggleDrawer: this.toggleDrawer.bind(this),
                theme: this.state.theme
              }
            }}
            />
        </Drawer>
    )
  }
}
