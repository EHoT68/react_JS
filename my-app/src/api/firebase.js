import firebase from "firebase/compat";

const firebaseConfig = {
   apiKey: "AIzaSyAfrc4rtfbRaAZo6GySTk7WyVa6bwfL9jk",
   authDomain: "react-js-chat-e6093.firebaseapp.com",
   databaseURL: "https://react-js-chat-e6093-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "react-js-chat-e6093",
   storageBucket: "react-js-chat-e6093.appspot.com",
   messagingSenderId: "968570566334",
   appId: "1:968570566334:web:e37cfb8cb62fc8a71a50ef",
   measurementId: "G-XZL7PN5Z3L"
 };

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
