import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
 apiKey: "AIzaSyDwObh-M7u0YUj6TDRLXav9zuYXD4RFjDs",
 authDomain: "fb-clone-34324.firebaseapp.com",
 projectId: "fb-clone-34324",
 storageBucket: "fb-clone-34324.appspot.com",
 messagingSenderId: "959823995127",
 appId: "1:959823995127:web:48141bae876583a3cd33f2",
 measurementId: "G-ZQTR5Y0QMW"
  });

  const auth = firebase.auth();
  const provider = new firebase.auth.FacebookAuthProvider();

  const db= firebaseConfig.firestore();
  const storage = firebase.storage();

  export { auth, provider, db, storage}
