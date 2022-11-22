const navToggler = document.querySelector(".navBtn");
const navLinksContainer = document.querySelector(".mobileNav");

const toggleNav = (e) => {
  navToggler.classList.toggle("open");
  navLinksContainer.classList.toggle("open");
};
navToggler.addEventListener("click", toggleNav);

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {
  collection,
  getDocs,
  getFirestore,
  getDoc,
  doc,
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

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    const userNameContainer = document.querySelector(".userName");
    const logOutSvg = document.querySelector(".logOut");
    const points = document.querySelector(".points");
    const db = getFirestore(app);
    async function getUser() {
      const docRef = doc(db, "Users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      const userName = docSnap.data().name;
      userNameContainer.innerHTML = `
      ${userName}
      `;
      logOutSvg.innerHTML = `
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M40 32.5V27.5H17.5V20L5 30L17.5 40V32.5H40Z" fill="white" />
        <path
          d="M50 7.5H27.5C24.7425 7.5 22.5 9.7425 22.5 12.5V22.5H27.5V12.5H50V47.5H27.5V37.5H22.5V47.5C22.5 50.2575 24.7425 52.5 27.5 52.5H50C52.7575 52.5 55 50.2575 55 47.5V12.5C55 9.7425 52.7575 7.5 50 7.5Z"
          fill="white"
        />
      </svg>
      `;
      const userPoints = docSnap.data().points;
      points.innerHTML = `
      ${userPoints}
      `;
      const auth = getAuth();
      logOutSvg.addEventListener("click", () => {
        signOut(auth)
          .then(() => {
            // Sign-out successful.
            window.location.href = "http://localhost:5501/";
          })
          .catch((error) => {
            // An error happened.
          });
      });
    }
    getUser();
    // ...
  } else {
    // User is signed out
    // ...
    console.log("error");
  }
});
