import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import PropTypes from 'prop-types';
import {Router, Scene, ActionConst, Actions} from 'react-native-router-flux';


import LoginScene from '../scenes/loginScene'
import MatchScene from  '../scenes/matchScene'
import CreateNewPostScene from '../scenes/createNewPostScene'

import NavigationDrawer from './NavigationDrawer'

import AuthStore from '../stores/authStore'
import theme from '../theme/base-theme'
import SettingsStore from '../stores/settingsStore'

import styles from '../components/style'

const settings = new SettingsStore()
const authStore = new AuthStore()

import {AsyncStorage} from 'react-native'


export default class AppContainer extends Component{
	constructor(props){
		super(props)
		this.state = {
			hasLoad: false,
			current_page: "",
			user: "",
			stores: {
				settings: settings,
				auth: authStore
			},
			theme: theme,

		}

	}

	componentWillMount(){
		AsyncStorage.getItem("user").done((val)=>{
			if (val != null){
				this.state.user = val
				Actions.matchScene()

			}
		})
	}

	render() {
		const {authUser} = this.state.stores.auth

		console.log("AppContainer.js: render(): ", this)

		return (
			<Router>
				<Scene key="drawer" key="loginScene" component={NavigationDrawer} open={false} passProps={true} state={this.state}>
					<Scene key="root">
						<Scene key="loginpage" component={LoginScene} title="Login" initial={true} type={ActionConst.REPLACE} hideNavBar={true}/>
                              <Scene key="matchScene" title="Match Scene" component={MatchScene}  type={ActionConst.REPLACE}  />
                              <Scene key="newPostScene" title="Create New Post" component={CreateNewPostScene}  type={ActionConst.PUSH}  />
					</Scene>
				</Scene>
			</Router>
		)


	}

}
