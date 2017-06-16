import { action } from 'mobx'
import firebase from 'firebase'
import MobxFirebaseStore from 'mobx-firebase-store'
import {AsyncStorage} from 'react-native'


export default class FeedStore extends MobxFirebaseStore {

     constructor(){
          super(firebase.database().ref())
          firebase.auth().onAuthStateChanged((user) => {
               this.user = user;
               this.posts = this.getFeed()
          })
     }

     getFeed(){
          var posts = [];
          var ref = firebase.database().ref('posts')
          ref.on('value', (snap) =>{
               var id = 0;
               snap.forEach((child) => {
                    var temp = child.val()
                    temp['id'] = id++;
                    posts.push(temp)
               })
               return posts
          });
          return posts
     }

}
