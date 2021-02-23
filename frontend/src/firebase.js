import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCax5VJw3vvIrrZBmWy9nkKZlH5GFWppPw",
  authDomain: "chatserver-afb56.firebaseapp.com",
  projectId: "chatserver-afb56",
  storageBucket: "chatserver-afb56.appspot.com",
  messagingSenderId: "343309830602",
  appId: "1:343309830602:web:533c73e601200fc419e733",
  measurementId: "G-YMJXWC4CZG",
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()
const githubAuthProvider = new firebase.auth.GithubAuthProvider()

export {
  auth,
  firebase,
  googleAuthProvider,
  facebookAuthProvider,
  githubAuthProvider,
}
