import firebase from 'firebase'
import MobxFirebaseStore from 'mobx-firebase-store'

const config = {
  apiKey: "",
  authDomain: "dinder-6959b.firebaseapp.com",
  databaseURL: "https://dinder-6959b.firebaseio.com",
  projectId: "dinder-6959b",
  storageBucket: "dinder-6959b.appspot.com",
  messagingSenderId: "577173982580"
}


export default class SettingsStore extends MobxFirebaseStore {
  constructor() {
    firebase.initializeApp(config)
    super(firebase.database().ref())

    this.splashTime = 1000
    this.splashImg = require('../images/splash.jpg')
    this.loginBG = require('../images/login.jpg')
  }
  get LoginBG(){
    return this.loginBG
  }
  get SplashTime() {
    return this.splashTime
  }
  get SplashImg() {
    return this.splashImg
  }

}
