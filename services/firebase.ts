import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASEURL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}else {
  firebase.app();
}


async function loginWithEmailAndPassword(email: string, password: string) {
  try {
    const result = await firebase.auth().signInWithEmailAndPassword(email, password)
    if (result.user) {
      const { uid } = result.user
      if (!uid) {
        throw new Error('Missing information from Account.');
      }
      localStorage.setItem('user_id', uid)
      return true
    }
  } catch (error) {
    return false;
  }
}

export { firebase, loginWithEmailAndPassword }