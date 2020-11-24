import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDaMUfO8vhozavFUtgYyKR0eRvbwoze4AQ",
    authDomain: "whatsapp-clone-reactjs-f2856.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-reactjs-f2856.firebaseio.com",
    projectId: "whatsapp-clone-reactjs-f2856",
    storageBucket: "whatsapp-clone-reactjs-f2856.appspot.com",
    messagingSenderId: "487209339448",
    appId: "1:487209339448:web:bd592b9766260940cc74cd",
    measurementId: "G-3MQ0Y92JZM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db