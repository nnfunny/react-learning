import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAp7V9-q6x8-j1Q0Fh2j8ZCU4DNPhN874k",
  authDomain: "nam-photo.firebaseapp.com",
  databaseURL: "https://nam-photo.firebaseio.com",
  projectId: "nam-photo",
  storageBucket: "nam-photo.appspot.com",
  messagingSenderId: "463712265256",
  appId: "1:463712265256:web:614eeec4ee026c9907c11d",
  measurementId: "G-7HRVP71FTN",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Storage = firebase.storage();
const FireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { Storage, FireStore, timestamp };
