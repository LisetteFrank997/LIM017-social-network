/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
import { addDoc, collection, getDocs, onSnapshot, deleteDoc, doc } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, updateProfile, createUserWithEmailAndPassword, sendEmailVerification, signOut, signInWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';

export { addDoc, collection, getDocs, onSnapshot, deleteDoc, doc };
export { getAuth, signInWithPopup, GoogleAuthProvider, updateProfile, createUserWithEmailAndPassword, sendEmailVerification, signOut, signInWithEmailAndPassword, onAuthStateChanged };
export { initializeApp };
export { getFirestore };