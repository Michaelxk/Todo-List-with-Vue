import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC72PuoHRLOkRG1ErwC5DH7qCTJ-QmYCVU",
  authDomain: "crud-vue-fire-8edc7.firebaseapp.com",
  projectId: "crud-vue-fire-8edc7",
  storageBucket: "crud-vue-fire-8edc7.appspot.com",
  messagingSenderId: "360376695932",
  appId: "1:360376695932:web:8023304307d0e06947ddf9",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
