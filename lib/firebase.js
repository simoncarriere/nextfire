import firebase from 'firebase/app'
import 'firebbase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA6d3GbK5ZN6KncS_qdwZgLCE8mTpFwEZ0",
    authDomain: "nextfire-d9e64.firebaseapp.com",
    projectId: "nextfire-d9e64",
    storageBucket: "nextfire-d9e64.appspot.com",
    messagingSenderId: "260944598382",
    appId: "1:260944598382:web:f9a845c6c417719aebdd7f",
    measurementId: "G-H6HF6RMD2R"
}

// In some cases, Next may try to initialize twice, we can avoid errors with this conditional
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

// References to firebase SDKs we need
export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()