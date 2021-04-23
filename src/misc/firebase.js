import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';

const config = {
    apiKey: "AIzaSyBvLfzHUxmd1MmraXaATKtkhQ2LR6Yp6fk",
    authDomain: "glowing-computer-chat-app.firebaseapp.com",
    databaseURL: "https://glowing-computer-chat-app-default-rtdb.firebaseio.com",
    projectId: "glowing-computer-chat-app",
    storageBucket: "glowing-computer-chat-app.appspot.com",
    messagingSenderId: "853116935210",
    appId: "1:853116935210:web:49c4f698ffa78f371d7753"
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();

export const messaging = firebase.messaging.isSupported() ? app.messaging() : null;

if(messaging) {
    messaging.usePublicVapidKey('BGx1TNezcbPDltsXhBRSK9yHoDLeYMlLJ8yJd1sCQ5Q-4TUMyzLJnm5UUgjj_Z0n-jd4_ud2gs-j2yxSupksLxo')
// }   messaging.getToken({vapidKey: "BGx1TNezcbPDltsXhBRSK9yHoDLeYMlLJ8yJd1sCQ5Q-4TUMyzLJnm5UUgjj_Z0n-jd4_ud2gs-j2yxSupksLxo"});
    messaging.onMessage(data => {
        console.log(data);
    })
}

