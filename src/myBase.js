import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAuWhwftRjy-BxZ-RzYHa6dUtlPHdbUfuQ",
    authDomain: "nwitter-e5c35.firebaseapp.com",
    projectId: "nwitter-e5c35",
    storageBucket: "nwitter-e5c35.appspot.com",
    messagingSenderId: "182197615763",
    appId: "1:182197615763:web:c41eda4dddca4211fbe166"
  };

firebase.initializeApp(firebaseConfig);
export const authService = firebase.auth();