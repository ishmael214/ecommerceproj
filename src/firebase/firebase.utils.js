import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCVTKt7Uqb5HfMQI1JyVCz8aJ34rxTW61g",
    authDomain: "ecommerce-sto.firebaseapp.com",
    databaseURL: "https://ecommerce-sto.firebaseio.com",
    projectId: "ecommerce-sto",
    storageBucket: "ecommerce-sto.appspot.com",
    messagingSenderId: "336541575384",
    appId: "1:336541575384:web:a0522f471d5c733a10cfad",
    measurementId: "G-L5SN8E1C2P"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth)  return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
    

    try {
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        });

    } catch (error) {

        console.log('error creating user', error.message);
    }

  }
  return userRef;
  
}



  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

  