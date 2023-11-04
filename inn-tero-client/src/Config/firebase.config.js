// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB5lzFz_VahHHEF2vuLPYuladq4_yMDCYg',
  authDomain: 'inn-tero.firebaseapp.com',
  projectId: 'inn-tero',
  storageBucket: 'inn-tero.appspot.com',
  messagingSenderId: '946247325719',
  appId: '1:946247325719:web:14e6af33e6b08d8ebba452',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
