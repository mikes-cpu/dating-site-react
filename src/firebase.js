import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZnVTNIkvAr9sNWhJl8DcoXDFRFjYxQdA",
  authDomain: "pom-test-6e38e.firebaseapp.com",
  projectId: "pom-test-6e38e",
  storageBucket: "pom-test-6e38e.appspot.com",
  messagingSenderId: "884639540070",
  appId: "1:884639540070:web:67cf8ae3f8e330dfc69ea7",
  measurementId: "G-4G2H5W743M",
};

firebase.initializeApp(firebaseConfig);

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default firebase;
