
import {initializeApp, auth, database} from 'firebase'


const firebaseConfig = {
    apiKey: 'AIzaSyC4yfc24SoKLhbtTT3HDmlwE5Q2r5P7D7k',
    authDomain: 'galaxyweblinks-182af.firebaseapp.com',
    databaseURL: "https://galaxyweblinks-182af.firebaseio.com",
    projectId: "galaxyweblinks-182af",
    storageBucket: '',
    messagingSenderId: "227366268352",
};

// Initialize firebase instance
initializeApp(firebaseConfig)

export  {auth, database};