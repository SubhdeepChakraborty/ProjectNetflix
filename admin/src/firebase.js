// import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyCG_wVcdT3kuteRYqpvu8vBCISjG5qLuh0",
//   authDomain: "netflix-2e9ae.firebaseapp.com",
//   projectId: "netflix-2e9ae",
//   storageBucket: "netflix-2e9ae.appspot.com",
//   messagingSenderId: "16093105421",
//   appId: "1:16093105421:web:0067529b53228c349df444",
//   measurementId: "G-MF6XSP6YWK",
// };

// const app = initializeApp(firebaseConfig);

// const storage = getStorage(app);

// firebase.initializeApp(firebaseConfig);
// const storage = firebase.storage();

// export default storage;

import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCG_wVcdT3kuteRYqpvu8vBCISjG5qLuh0",
  authDomain: "netflix-2e9ae.firebaseapp.com",
  projectId: "netflix-2e9ae",
  storageBucket: "netflix-2e9ae.appspot.com",
  messagingSenderId: "16093105421",
  appId: "1:16093105421:web:0067529b53228c349df444",
  measurementId: "G-MF6XSP6YWK",
};

firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
