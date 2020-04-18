import app from 'firebase/app';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDRQgWIcTOVTJfSeb9k1OY-K3eG0XimjFM",
    authDomain: "socialsync-8bce5.firebaseapp.com",
    databaseURL: "https://socialsync-8bce5.firebaseio.com",
    projectId: "socialsync-8bce5",
    storageBucket: "socialsync-8bce5.appspot.com",
    messagingSenderId: "992279428511",
    appId: "1:992279428511:web:69c9d4e5fcefe581"
}

class Firebase {
    constructor(){
        app.initializeApp(config);
    
        this.auth = app.auth();
    }

                // AUTH API 

    doCreateUserWithEmailAndPassword = (email,password) => {
        this.auth.createUserWithEmailAndPassword(email,password)
    }

    doSignInWithEmailAndPassword = (email,password) => {
        this.auth.signInWithEmailAndPassword(email,password)
    }

    doSignOut = () => this.auth.signOut()

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

    doPasswordUpdate = password => 
        this.auth.currentUser.updatePassword(password)
}



// const firebaseDB = firebase.database();
// const googleAuth = new firebase.auth.GoogleAuthProvider();



export default Firebase