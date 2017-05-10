import React, { Component } from 'react'
import {TouchableOpacity, Text, Button} from 'react-native'
import { View } from 'native-base'
import styles from './style'

export default class MyHomeScreen extends Component{
	constructor(props){
		super(props)
	}

	static navigationOptions = {
    drawerLabel: 'Home',
  };

	render() {
	    const { navigate } = this.props.navigation;
	    return(
	      <View style={styles.container}>
  	      <TouchableOpacity
  	        onPress={() => { navigate("Notifications")} }
  	        style={styles.tab}
  	        >
  	        <Text>Go to Notifications</Text>
  	      </TouchableOpacity>
	      </View>
	    );
	  }
}
