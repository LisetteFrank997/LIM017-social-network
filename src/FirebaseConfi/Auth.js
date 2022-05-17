import { getAuth, signInWithPopup, GoogleAuthProvider, updateProfile, createUserWithEmailAndPassword, sendEmailVerification, signOut, signInWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';
import { onNavigate } from '../main.js';

import { app } from './confi.js';

const auth = getAuth(app);

export const userInfo = () => {
  const auth = getAuth(app);
  const user = auth.currentUser;
  if (user !== null) {
    const displayName = user.displayName;
    const email = user.email;
    const uid = user.uid;
    return displayName;
  }
};

export const userInfoSesion = () => {
  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.email;
      return uid;
    }
    // User is signed out
    return 'user is signed out';
  });
};

export const registerWithEmailAndPassword = (email, password, displayName) => {
  const auth = getAuth(app);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      sendEmailVerification(auth.currentUser);
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName,

      });
      console.log(displayName);
      // console.log(user);
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return errorMessage;
    });
};

export const loginWithEmailPassword = (email, password) => {
  const auth = getAuth(app);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      onNavigate('/profile');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

export const userSignOut = () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('Sign-out sucessful');
    onNavigate('/');
  }).catch((error) => {
    // An error happened.
    // const error = error.message
    console.log(error);
  });
};

/* onAuthStateChanged(auth, (user) => {
  const emailVerified = user.emailVerified;
    const uid = user.uid;
    if (emailVerified) {
      onNavigate('/profie');
    } */

export const registerWithGoogle = () => {
  const provider = new GoogleAuthProvider(app);
  const auth = getAuth(app);
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      onNavigate('/profile');
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};
