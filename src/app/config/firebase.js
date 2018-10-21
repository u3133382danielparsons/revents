import firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC6AaBwlZ7Fmme6Tl7CtW5Kxqy4Nsrmbu4",
    authDomain: "canberraevents-219911.firebaseapp.com",
    databaseURL: "https://canberraevents-219911.firebaseio.com",
    projectId: "canberraevents-219911",
    storageBucket: "canberraevents-219911.appspot.com",
    messagingSenderId: "249038080251"
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
    timestampsInSnapshots: true
}
firestore.settings(settings);

export default firebase;