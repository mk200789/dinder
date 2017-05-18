import React, { Component } from 'react'
import SideMenu from '../components/sideMenu'

import SplashScene from '../scenes/splashScene'
import LoginScene from '../scenes/loginScene'
import MatchScene from  '../scenes/matchScene'

import AuthStore from '../stores/authStore'
import theme from '../theme/base-theme'
import SettingsStore from '../stores/settingsStore'

import { Drawer, View } from 'native-base'
import { Navigator } from 'react-native-deprecated-custom-components'
import styles from '../components/style'

const settings = new SettingsStore()
const authStore = new AuthStore()

export default class AppContainer extends Component{
	constructor(props) {
	    super(props)
	    this.state = {
	      toggled: false,
				panOpenMask: 0.0,
	      store: {
	        settings: settings,
					auth: authStore,
	      },
	      theme: theme
	    }
	  }

	  toggleDrawer() {
			console.log("toggleDrawer")
	    this.state.toggled ? this._drawer._root.close() : this._drawer._root.open()
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

			console.log("love: ",this.state.store.auth.authUser)

	    switch(route.title) {
	      case 'Splash': {
	        return <SplashScene {...route.passProps} navigator={navigator} />
	      }
				case 'Login': {
					if (this.state.store.auth.authUser){
						this.state.panOpenMask = 0.3
						this._drawer.props.panOpenMask = 0.3
						console.log('changing 0.3: ', this)

					}
					return <LoginScene {...route.passProps} navigator={navigator} />
				}
				case 'Match': {
					return <MatchScene {...route.passProps} navigator={navigator} />
				}
				case 'SignOut': {
					this.state.store.auth.signOff()
					return <LoginScene {...route.passProps} navigator={navigator} />
				}
	      default: {
	        return null
	      }
	    }
	  }
	  configureScene(route, routeStack) {
    	return Navigator.SceneConfigs.PushFromRight
	  }

	render() {
		console.log("AppContainer.js")
		const {authUser} = this.state.store.auth
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="displace"
        content={<SideMenu navigator={this._navigator} theme={this.state.theme} toggleDrawer={this.toggleDrawer.bind(this)} stores={this.state.store}/>}
        onClose={this.closeDrawer.bind(this)}
        onOpen={this.openDrawer.bind(this)}
        openDrawerOffset={0.2}
				panOpenMask={this.state.panOpenMask}
 				captureGestures="open"
				styles={{drawer: {backgroundColor: "#8c5687"}}}
        >
          <Navigator
					  style={{ flex: 1 }}
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
