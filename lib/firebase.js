import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCda1plKdgrm4GnF0I6DIcXTQvMPAlt6Qs",
    authDomain: "teslaclone-fce24.firebaseapp.com",
    projectId: "teslaclone-fce24",
    storageBucket: "teslaclone-fce24.appspot.com",
    messagingSenderId: "17066301177",
    appId: "1:17066301177:web:8c2974d47d22eafe573428",
    measurementId: "G-8M5G8YECVS"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;