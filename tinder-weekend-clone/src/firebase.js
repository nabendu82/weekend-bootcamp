import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAG4QGXrW3B-yUVdUuprdIptMJ8S-rGtDk",
    authDomain: "tinder-weekend-clone.firebaseapp.com",
    projectId: "tinder-weekend-clone",
    storageBucket: "tinder-weekend-clone.appspot.com",
    messagingSenderId: "581224132218",
    appId: "1:581224132218:web:56638b44af12c0fdd095c3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db