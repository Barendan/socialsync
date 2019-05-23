import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

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
	constructor() {
		app.initializeApp(config);
		
		this.auth = app.auth();
    this.db = app.database();

    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
    this.serverValue = app.database.ServerValue;
	}

		// *** Auth API ***
  	doCreateUserWithEmailAndPassword = (email, password) =>
    	this.auth.createUserWithEmailAndPassword(email, password)

  	doSignInWithEmailAndPassword = (email, password) =>
    	this.auth.signInWithEmailAndPassword(email, password)

    doSignInWithGoogle = () => 
      this.auth.signInWithPopup(this.googleProvider)

    doSignInWithFacebook = () =>
      this.auth.signInWithPopup(this.facebookProvider)

  	doSignOut = () => this.auth.signOut()
	
  	doPasswordReset = email => this.auth.sendPasswordResetEmail(email)
	
  	doPasswordUpdate = password =>
    	this.auth.currentUser.updatePassword(password)


    // *** Merge Auth and DB User API ***
    onAuthUserListener = (next, fallback) => 
      this.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();

            //merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              ...dbUser,
            }

            next(authUser)
          })
        } else {
          fallback()
        }
      })


    // *** User API ***
    users = () => this.db.ref('users')
    user = uid => this.db.ref(`users/${uid}`)


    // *** Contact API ***
    contacts = () => this.db.ref('contacts')
    contact = uid => this.db.ref(`contacts/${uid}`)


    // *** NEW AND BRILLIANT API ***
    userContacts = uid => this.db.ref(`users/${uid}/contacts`)
    // contact = uid => this.db.ref(`users/${uid}/contacts/`)
}

export default Firebase