import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Storage = firebase.storage();
const FireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { Storage, FireStore, timestamp };
