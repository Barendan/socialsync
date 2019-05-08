import * as firebase from 'firebase';



const config = {
    apiKey: "AIzaSyDRQgWIcTOVTJfSeb9k1OY-K3eG0XimjFM",
    authDomain: "socialsync-8bce5.firebaseapp.com",
    databaseURL: "https://socialsync-8bce5.firebaseio.com",
    projectId: "socialsync-8bce5",
    storageBucket: "socialsync-8bce5.appspot.com",
    messagingSenderId: "992279428511",
    appId: "1:992279428511:web:69c9d4e5fcefe581"
}

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const googleAuth = new firebase.auth.GoogleAuthProvider();


export { 
	firebase,
	firebaseDB,
	googleAuth 
}