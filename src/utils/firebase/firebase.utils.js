import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLggckzKITWdctrsqa1v_YDDo80T8DJ6w",
  authDomain: "crown-clothing-db-79fbf.firebaseapp.com",
  projectId: "crown-clothing-db-79fbf",
  storageBucket: "crown-clothing-db-79fbf.appspot.com",
  messagingSenderId: "231262422257",
  appId: "1:231262422257:web:3b6e65fc39874d56769550",
};

const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => {
  signInWithPopup(auth, provider);
};

