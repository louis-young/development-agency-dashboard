import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const configuration = {
  apiKey: "AIzaSyADkrFYRSDJZKfYxx4mQ2Rf5iMAJgtfIxY",
  authDomain: "authentication-de944.firebaseapp.com",
  databaseURL: "https://authentication-de944-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "authentication-de944",
  storageBucket: "authentication-de944.appspot.com",
  messagingSenderId: "1060559987965",
  appId: "1:1060559987965:web:c792875a729075b6d34a94",
};

firebase.initializeApp(configuration);

export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
