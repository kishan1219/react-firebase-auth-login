import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
// use your firebaseConfig
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export default firebase;
