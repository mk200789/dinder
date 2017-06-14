import {observable, action}  from 'mobx'
import firebase from 'firebase'

export default class AuthStore {
  @observable authUser = null

  constructor(){
    firebase.auth().onAuthStateChanged((user) => {
      this.authUser = user;
    })
  }

  @action
  signIn({email, password}){
    if(this.authUser) {
      console.log("signin: this.authUser")
      return Promise.resolve(this.authUser)
    }
    console.log("signin: signInWithEmailAndPassword")
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

  @action
  signOff(){
    return firebase.auth().signOut()
  }


}