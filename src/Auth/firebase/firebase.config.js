// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5Yq0qVYY8OhI3hVJWvetXxykN16-imz4",
  authDomain: "js-job-task.firebaseapp.com",
  projectId: "js-job-task",
  storageBucket: "js-job-task.appspot.com",
  messagingSenderId: "1010787578026",
  appId: "1:1010787578026:web:1c88007a99f0782adc20d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth ;