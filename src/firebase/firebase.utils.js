import firebase from "firebase/compat/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { setDoc, doc, getDoc, getFirestore } from "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCX6BJkPZa01V1v9rFtmppL9H7AM0uPx4Y",
  authDomain: "first-react-db-a780f.firebaseapp.com",
  projectId: "first-react-db-a780f",
  storageBucket: "first-react-db-a780f.appspot.com",
  messagingSenderId: "62444490282",
  appId: "1:62444490282:web:0e48fcf3b92a78e1b9fd53",
  measurementId: "G-1E0J0GMSV2",
});

// const auth = firebaseApp.auth();
const db = getFirestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db, "users", `${userAuth.uid}`);

  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return snapShot;
};

const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default auth;

// export default firebase;
