import firebase from 'firebase';

  var Config = {
    apiKey: "AIzaSyAQEudQe95xsLj9oHp8hmKyyppC05UakkQ",
    authDomain: "thebookwormsrack-9e19c.firebaseapp.com",
    databaseURL: "https://thebookwormsrack-9e19c.firebaseio.com",
    projectId: "thebookwormsrack-9e19c",
    storageBucket: "thebookwormsrack-9e19c.appspot.com",
    messagingSenderId: "460465553572",
    appId: "1:460465553572:web:a7ab94fe77c47394a8a631",
    measurementId: "G-V1Y0N8RX2R"
  };
  // Initialize Firebase
  const Fire = firebase.initializeApp(Config);
  firebase.analytics();

  var db = Fire.firestore();

  export { db };
  export default Fire;
