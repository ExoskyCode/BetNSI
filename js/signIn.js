import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyClhfeQ5j5Av19TIb3LwcW8NZg4borQMPg",
  authDomain: "betnsi-1ba9e.firebaseapp.com",
  projectId: "betnsi-1ba9e",
  storageBucket: "betnsi-1ba9e.appspot.com",
  messagingSenderId: "619288105570",
  appId: "1:619288105570:web:6f676bd58d80775d6eb73b",
  measurementId: "G-JVXWMB5FPP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const signIn = document.querySelector(".signIn");

signIn.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.location.href = "http://127.0.0.1:5500/index.html?"; 
      // Regarder Eden et faire UI design des alerts
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
