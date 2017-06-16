import React, { Component } from 'react'
import {
  Container,
  Header,
  Content,
  View,
  Button,
  Title,
  Text
} from 'native-base'
import {Router, Scene, ActionConst, Actions} from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class MatchScene extends Component {

  componentWillMount(){

     Icon.getImageSource('plus', 18, 'black').then(imgsource => {
          Actions.refresh({
              rightButtonImage: imgsource,
              rightButtonIconStyle: { width: 18, height: 18 , marginRight: 10},
              onRight: this._clickRightButton.bind(this)
          });
     });

  }
  componentDidMount(){
      this.props.state.current_page = this.props.title

  }

  _clickRightButton(){
     //   alert("Right button clicked!")
       Actions.newPostScene()
 }

  render(){
       console.log("matchScene.js: ", this)
     //   console.log(this.props.state.exit.uri)
    return (
      <Container style={{margin: 128}}>
        <View>
          <Text> This is MatchScene </Text>
        </View>
      </Container>
    )
  }
}
