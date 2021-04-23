import firebase from "firebase/app";

importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');


firebase.initializeApp({
    apiKey: "AIzaSyBvLfzHUxmd1MmraXaATKtkhQ2LR6Yp6fk",
    authDomain: "glowing-computer-chat-app.firebaseapp.com",
    databaseURL: "https://glowing-computer-chat-app-default-rtdb.firebaseio.com",
    projectId: "glowing-computer-chat-app",
    storageBucket: "glowing-computer-cshat-app.appspot.com",
    messagingSenderId: "853116935210",
    appId: "1:853116935210:web:49c4f698ffa78f371d7753"
});


firebase.messaging();