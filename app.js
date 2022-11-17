const navToggler = document.querySelector(".navBtn");
const navLinksContainer = document.querySelector(".mobileNav");

const toggleNav = (e) => {
  navToggler.classList.toggle("open");
  navLinksContainer.classList.toggle("open");
};
navToggler.addEventListener("click", toggleNav);

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth ,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { collection, getDocs, getFirestore} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyClhfeQ5j5Av19TIb3LwcW8NZg4borQMPg",
  authDomain: "betnsi-1ba9e.firebaseapp.com",
  projectId: "betnsi-1ba9e",
  storageBucket: "betnsi-1ba9e.appspot.com",
  messagingSenderId: "619288105570",
  appId: "1:619288105570:web:6f676bd58d80775d6eb73b",
  measurementId: "G-JVXWMB5FPP",
};

// const app = initializeApp(firebaseConfig);
// const auth = getAuth();

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     const userName = document.querySelector('.userName')
//     userName.innerHTML = `
//     <a class="userName" href="">${uid}</a>
//     `
//     // ...
//   } else {
//     // User is signed out
//     // ...
//     console.log("error");
//   }
// });
// const db = getFirestore(app);
// async function test(){
//   const querySnapshot = await getDocs(collection(db, "Users"));
//   querySnapshot.forEach((doc) => {
//     console.log(doc.id, doc.data());
//   });
// }
// test()