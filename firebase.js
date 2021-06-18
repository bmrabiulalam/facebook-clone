import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAD4HCK60FFt0bLEWr2tpqbULowQXcmNWE",
    authDomain: "facebook-byrabi.firebaseapp.com",
    projectId: "facebook-byrabi",
    storageBucket: "facebook-byrabi.appspot.com",
    messagingSenderId: "839932906936",
    appId: "1:839932906936:web:4a40496b8652e6be94d34d"
};

// Check initialize or not if none->initializeApp & if its not firebase use the existing app
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
// const auth = app.auth();  //not used auth yet
const storage = firebase.storage();

export { db, storage };

// export { auth, db, storage }; // If auth used