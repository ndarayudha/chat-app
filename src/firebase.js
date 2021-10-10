import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwgO6uB6UZqSJMM_qrOFpvWk2Vyd_dm8s",
    authDomain: "whatsapp-clone-ff032.firebaseapp.com",
    projectId: "whatsapp-clone-ff032",
    storageBucket: "whatsapp-clone-ff032.appspot.com",
    messagingSenderId: "618787004969",
    appId: "1:618787004969:web:ab112fb403dfdb0b8e7238",
    measurementId: "G-NDZN690QCM"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;