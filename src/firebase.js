
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


    const firebaseConfig = {
    apiKey: "AIzaSyDV42JNnvjrdtSj5fN7zSGH4Piz2QaOP9Q",
    authDomain: "react-hooks-blog-c997c.firebaseapp.com",
    projectId: "react-hooks-blog-c997c",
    storageBucket: "react-hooks-blog-c997c.appspot.com",
    messagingSenderId: "1024982344474",
    appId: "1:1024982344474:web:7693ef59be34941e42c2a3"
  };

  
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

  
