import firebase from "firebase/compat/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const config = {
  apiKey: "AIzaSyCX6BJkPZa01V1v9rFtmppL9H7AM0uPx4Y",
  authDomain: "first-react-db-a780f.firebaseapp.com",
  projectId: "first-react-db-a780f",
  storageBucket: "first-react-db-a780f.appspot.com",
  messagingSenderId: "62444490282",
  appId: "1:62444490282:web:0e48fcf3b92a78e1b9fd53",
  measurementId: "G-1E0J0GMSV2",
};

firebase.initializeApp(config);

const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default auth;

// export default firebase;
