import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyANPgp693NeSoIGY9Ir_j-vRQQZKl72jyQ",
    authDomain: "chen-clone.firebaseapp.com",
    projectId: "chen-clone",
    storageBucket: "chen-clone.appspot.com",
    messagingSenderId: "530641291547",
    appId: "1:530641291547:web:1d71328cd5c05349cb6bbe",
    measurementId: "G-RB70MJ6C21"
  };

  const firebaseApp=firebase.initilizeApp(firebaseConfig);
  const db=firebaseApp.firestore();

  export default db;