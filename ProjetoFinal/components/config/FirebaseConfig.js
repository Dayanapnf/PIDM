import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAM2dy28tsQz9LJZVzeFRLgrgBJS3oewIs",
    authDomain: "task-bbb19.firebaseapp.com",
    projectId: "task-bbb19",
    storageBucket: "task-bbb19.appspot.com",
    messagingSenderId: "537577572605",
    appId: "1:537577572605:web:6085b18e5512c078eb9694",
    measurementId: "G-NF40DZRX4G"
  };


//inicializando o firebase
firebase.initializeApp(firebaseConfig)
const database = firebase.firestore()

export default database