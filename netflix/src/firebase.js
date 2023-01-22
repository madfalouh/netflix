import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBYmPLLIEw4T_mxHmQSTtM38oB8kBzyDIQ",
  authDomain: "netflix-296aa.firebaseapp.com",
  projectId: "netflix-296aa",
  storageBucket: "netflix-296aa.appspot.com",
  messagingSenderId: "141118517349",
  appId: "1:141118517349:web:7c92f626c38fa7b79ed68c"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();


const auth = firebase.auth();

export {auth}

export default db ; 
