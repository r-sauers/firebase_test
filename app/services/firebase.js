import Service from '@ember/service';

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDP5bSGkKJu5M7zyOThjuZb3xujjipkXzA",

  authDomain: "test-fbb0c.firebaseapp.com",

  projectId: "test-fbb0c",

  storageBucket: "test-fbb0c.firebasestorage.app",

  messagingSenderId: "671727365723",

  appId: "1:671727365723:web:b9fc64d14d4536947f997e",

  measurementId: "G-64281V08W6"

};


// Initialize Firebase


export default class FirebaseService extends Service {
  app = initializeApp(firebase);
  db = getFirestore(this.app);
}
