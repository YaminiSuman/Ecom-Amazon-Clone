import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBA49IcgtVvPNJYH4hQEvm8LAOkY9Z7MtY",
  authDomain: "yamini-ecom-clone.firebaseapp.com",
  databaseURL: "https://yamini-ecom-clone.firebaseio.com",
  projectId: "yamini-ecom-clone",
  storageBucket: "yamini-ecom-clone.appspot.com",
  messagingSenderId: "723217758053",
  appId: "1:723217758053:web:a223d97ff26b6ca3c9138c",
  measurementId: "G-BNL199DPMK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
