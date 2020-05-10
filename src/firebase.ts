import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/firebase-storage";

  var firebaseConfig = {
    apiKey: "AIzaSyByrDF5QRkX2WPwdKZMiXLBMsxLXVb8WjM",
    authDomain: "distribution-site-25f79.firebaseapp.com",
    databaseURL: "https://distribution-site-25f79.firebaseio.com",
    projectId: "distribution-site-25f79",
    storageBucket: "distribution-site-25f79.appspot.com",
    messagingSenderId: "751737877399",
    appId: "1:751737877399:web:6794fc84c86c7040eccad2",
    measurementId: "G-M4L1PQYRJN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;