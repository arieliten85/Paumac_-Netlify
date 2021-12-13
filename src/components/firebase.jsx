import firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6fFaDAnOQNXNZJgy7sbu8v8Lr0GiTa2w",
  authDomain: "paulaproductjson.firebaseapp.com",
  projectId: "paulaproductjson",
  storageBucket: "paulaproductjson.appspot.com",
  messagingSenderId: "515437186241",
  appId: "1:515437186241:web:5e2b6ca70420c9743a5840",
  measurementId: "G-434QP2LPF2",
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
