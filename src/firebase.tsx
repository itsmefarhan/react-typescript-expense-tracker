import firebase from "firebase";

const config = {
  apiKey: "AIzaSyB3H4WaWmkmJe8Q9WedyMfC1j-rsSm3qlw",
  authDomain: "project-cfdbb.firebaseapp.com",
  databaseURL: "https://project-cfdbb.firebaseio.com",
  projectId: "project-cfdbb",
  storageBucket: "project-cfdbb.appspot.com",
  messagingSenderId: "262296927726",
  appId: "1:262296927726:web:52d6177f311dfcda",
};

firebase.initializeApp(config);

export default firebase;
