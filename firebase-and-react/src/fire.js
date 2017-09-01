import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyDCWoh51qfcjKqEyRVdJFgUVhtA2HC132g",
  authDomain: "react-firebase-test-1.firebaseapp.com",
  databaseURL: "https://react-firebase-test-1.firebaseio.com",
  projectId: "react-firebase-test-1",
  storageBucket: "react-firebase-test-1.appspot.com",
  messagingSenderId: "336826471069"
};
var fire = firebase.initializeApp(config);
export default fire;
