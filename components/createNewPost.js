import React, { Component } from 'react'
import {
  Button,
  Container,
  Content,
  InputGroup,
  Input,
  Icon,
  View,
  Text,
  Item,
  Spinner
} from 'native-base'
import {Image, StyleSheet, Dimensions} from 'react-native'
import {Router, Scene, ActionConst, Actions} from 'react-native-router-flux';

export default class CreateNewPost extends Component{
     constructor(props){
          super(props)
          this.state = {
               title: '',
               content: '',
               url: '',
          }
     }

     postTitle(title){
          this.setState({title})
     }

     postContent(content){
          this.setState({content})
     }

     postUrl(url){
          this.setState({url})
     }

     _submit_post(){
          console.log("post submit: ")
          console.log("title: ", this.state.title)
          console.log("content: ", this.state.content)
          console.log("url: ", this.state.url)
          Actions.pop()
     }

     render(){
          return (
                <View>
                    <InputGroup style={{marginBottom: 20, width: 250, marginLeft: 5, marginRight: 5}} borderType='round'>
                         <Input style={{color: "black"}}
                              placeholder="Title"
                              placeholderTextColor = "grey"
                              onChangeText={(title) => {this.postTitle(title)}} />
                    </InputGroup>
                    <Item regular style={{marginBottom: 20, marginLeft: 5, marginRight: 5}}>
                        <Input style={{color: "black", height: 200}}
                              placeholder = "Content"
                              multiline={true}
                              placeholderTextColor = "grey"
                              onChangeText={(content) => {this.postContent(content)}} />
                    </Item>
                    <Item regular style={{marginBottom: 20, marginLeft: 5, marginRight: 5}}>
                         <Input style={{color: "black"}}
                              placeholder="url"
                              placeholderTextColor = "grey"
                              onChangeText={(url) => {this.postUrl(url)}} />
                    </Item>
                    <Button rounded block style={{marginBottom:10, width: 250, marginLeft: 5, marginRight: 5}} onPress={this._submit_post.bind(this)}>
                         <Text>{'Submit Post'}</Text>
                    </Button>

                </View>
          )
          // <InputGroup borderType='regular'>
          //               <Input style={{
          //                   width: 200, height: 200
          //               }}  multiline={true} placeholder='Type your text here'/>
          //           </InputGroup>
          // return (
          //       <View>
          //           <InputGroup style={{marginBottom: 10, width: 250, marginLeft: 5, marginRight: 5}} borderType='round'>
          //                <Input style={{color: "black"}}
          //                     placeholder="Title"
          //                     placeholderTextColor = "grey"
          //                     onChangeText={(email) => {}} />
          //           </InputGroup>
          //           <InputGroup style={{marginBottom: 10, width: 250, marginLeft: 5, marginRight: 5, borderWidth: 1, height: 200}} boarderType='round'>
          //                <Input style ={{color: "black"}}
          //                     placeholder="Content"
          //                     placeholderTextColor ="grey"
          //                     onChangeText={(email) =>{}} />
          //           </InputGroup>
          //           <Content>
          //                <Item regular>
          //                    <Input placeholder='Regular Textbox'/>
          //                </Item>
          //           </Content>
          //           <Button rounded block style={{marginBottom:10, width: 250, marginLeft: 5, marginRight: 5}} onPress={this._submit_post.bind(this)}>
          //                <Text>{'Submit Post'}</Text>
          //           </Button>
          //
          //       </View>
          // )
     }
}
