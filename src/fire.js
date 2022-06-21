import fire from 'firebase/compat/app'
import 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAxa6_ursEfzkTaOW5yEsLkKA9iW1iELdA",
    authDomain: "cinema-auth-6c34a.firebaseapp.com",
    projectId: "cinema-auth-6c34a",
    storageBucket: "cinema-auth-6c34a.appspot.com",
    messagingSenderId: "814806822976",
    appId: "1:814806822976:web:2ee57b044a2671472fefa5"
  };
  export default fire.initializeApp(firebaseConfig)