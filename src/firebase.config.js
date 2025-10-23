// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-vKBv_yxakfqmSNl5BklfkSee20t5Ozk",
  authDomain: "a9-pet-care-animal.firebaseapp.com",
  projectId: "a9-pet-care-animal",
  storageBucket: "a9-pet-care-animal.firebasestorage.app",
  messagingSenderId: "317152341679",
  appId: "1:317152341679:web:7a393ec67ae043ec4dee5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);