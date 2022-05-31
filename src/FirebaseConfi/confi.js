import { initializeApp } from './Firebase.js';
import { getFirestore } from './Firebase.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyDn8ABmn_bl1Hax1EWDJKlxqZn9CvkBdTM',
  authDomain: 'logibri-8ebf9.firebaseapp.com',
  projectId: 'logibri-8ebf9',
  storageBucket: 'logibri-8ebf9.appspot.com',
  messagingSenderId: '257777411915',
  appId: '1:257777411915:web:25a804bf1cd98a79766ace',
  measurementId: 'G-EZQ0M130D4',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
