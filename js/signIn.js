import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

import {  getAuth, browserSessionPersistence, signInWithEmailAndPassword, setPersistence, signInWithRedirect, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

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

const auth1 = getAuth(app);

const signIn = document.querySelector(".signIn");

signIn.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth1, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // Regarder Eden et faire UI design des alerts
      const auth = getAuth();
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        const provider = new GoogleAuthProvider();
        // In memory persistence will be applied to the signed in Google user
        // even though the persistence was set to 'none' and a page redirect
        // occurred.
        window.location.href = "http://localhost:5501/home.html?";
        return signInWithRedirect(auth, provider);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});