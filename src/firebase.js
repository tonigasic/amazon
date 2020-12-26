import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDEa4x01QwCPhrughcHhvncRfwwvA5hJ0g",
    authDomain: "e-comm-6717b.firebaseapp.com",
    projectId: "e-comm-6717b",
    storageBucket: "e-comm-6717b.appspot.com",
    messagingSenderId: "797431828877",
    appId: "1:797431828877:web:7f3052f0e9d15ca9902dc4",
    measurementId: "G-SY5F4900PR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};