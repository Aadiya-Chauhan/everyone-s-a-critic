import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 
 apiKey: "AIzaSyCnYq9UYygepayP-9_sYO6zMhyRN4FG_3I",

 authDomain: "everyone-s-a-critic-b7c65.firebaseapp.com",

 projectId: "everyone-s-a-critic-b7c65",

 storageBucket: "everyone-s-a-critic-b7c65.appspot.com",

 messagingSenderId: "952791142423",

 appId: "1:952791142423:web:be09d780bd9df373e50c52"

};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

