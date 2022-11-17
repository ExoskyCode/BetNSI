import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyClhfeQ5j5Av19TIb3LwcW8NZg4borQMPg",
  authDomain: "betnsi-1ba9e.firebaseapp.com",
  projectId: "betnsi-1ba9e",
  storageBucket: "betnsi-1ba9e.appspot.com",
  messagingSenderId: "619288105570",
  appId: "1:619288105570:web:6f676bd58d80775d6eb73b",
  measurementId: "G-JVXWMB5FPP",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

const signUp = document.querySelector(".signUp");
let statusLog = false;

signUp.addEventListener("click", () => {
  const pseudo = document.getElementById("pseudo").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const uid = user.uid
      statusLog = true;
      if ((statusLog = true)) {
        async function addUserFireStore() {
          await setDoc(doc(db, "Users", uid), data);
          let docRef = await addDoc(collection(db, "Users"), {
            name: `${pseudo}`,
            email: `${email}`,
            password: `${password}`,
            points: 50,
            id_paris: {
              id_match: {
                score_joueur: "4 - 1",
                score_match: "2-0",
              },
            },
          });
        }
        addUserFireStore();
      }
      setTimeout(() => {
        window.location.href = "http://127.0.0.1:5500/signIn.html?";
      }, 2500);
      // Regarder Eden et faire UI design des alerts
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      statusLog = false;
    });
});
