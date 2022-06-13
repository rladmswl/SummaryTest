import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
// 인증정보!
    apiKey: "AIzaSyDq_bqlgLXF0drit6XdvBhrNnqFi38qiHk",
    authDomain: "image-community-843d5.firebaseapp.com",
    projectId: "image-community-843d5",
    storageBucket: "image-community-843d5.appspot.com",
    messagingSenderId: "354846117787",
    appId: "1:354846117787:web:5e773ed90a58fea2651b3e",
    measurementId: "G-S4K7G1DLFB"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth(); // 다른 파일에서 firebase가져와서 쓸 수 있도록 해줌.
const firestore = firebase.firestore();

export{auth, apiKey, firestore};