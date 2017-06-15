import firebase from 'firebase'
import MobxFirebaseStore from 'mobx-firebase-store'
var Environment = require('../environment.js')

const config = {
  apiKey: Environment.API_KEY,
  authDomain: Environment.AUTH_DOMAIN,
  databaseURL: Environment.DATABASE_URL,
  projectId: Environment.PROJECT_ID,
  storageBucket: Environment.STORAGE_BUCKET,
  messagingSenderId: Environment.MESSAGING_SENDER_ID
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
