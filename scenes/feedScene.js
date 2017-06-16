import React, { Component } from 'react'
import {
  Container,
  Header,
  Content,
  View,
  Button,
  Title,
  Text,
} from 'native-base'
import {TouchableHighlight, Dimensions, TouchableOpacity} from 'react-native'
import {Router, Scene, ActionConst, Actions} from 'react-native-router-flux';

import { observer } from 'mobx-react/native'
import { autoSubscriber } from 'firebase-nest'


import CreateNewPost from '../components/createNewPost'

import Icon from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get('window');

export default class FeedScene extends Component {
     constructor(props){
          super(props)
          this.state = {
               posts: null
          }
     }

     _populateFeed(){

     }


     componentWillMount(){
          const {feed} = this.props.state.stores
          this.state.posts = feed.getFeed()
     }

     componentDidMount(){
          this.props.state.current_page = this.props.title
     }

     render(){

          const postItems = this.state.posts.map((item) => (
            <TouchableOpacity key={item.id}onPress={this._populateFeed.bind(this)}>
              <View>
                <Text>
                {item.text}
                </Text>
              </View>
            </TouchableOpacity>
          ))

          console.log("feedScene: ", this)

          return(
               <Container style={{marginTop: 128, marginLeft: 10, marginRight: 10, marginBottom: 10, alignItems: 'center'}}>
                    <View>
                         <Text> Hello This is the Feed page. </Text>
                    </View>
                    <View style={{ height, alignItems: 'center' }}>
                      { postItems }
                    </View>

               </Container>
          )

     }
}
