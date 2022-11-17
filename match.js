const matchItems = document.querySelectorAll(".currentMatch");
const nbMatch = matchItems.length;
const nextMatchBtn = document.querySelector(".nextMatch");
let matchCount = 0;

function highQueryMatch(highMediaMatch) {
  if (highMediaMatch.matches) {

    function nextMatch() {
      matchItems[matchCount].classList.remove("activeMatch");

      if (matchCount < nbBet - 1) {
        matchCount++;
      } else {
        matchCount = 0;
      }
      matchItems[matchCount].classList.add("activeMatch");
      matchItems[matchCount + 1].classList.add("activeMatch");
    }
    nextMatchBtn.addEventListener("click", nextMatch);
  }
}
let highMediaMatch = window.matchMedia("(min-width: 1201px)");
highQueryMatch(highMediaMatch);
highMediaMatch.addEventListener('load', highQueryMatch);

function queryMatch(mediaMatch) {
  if (mediaMatch.matches) {
    const secondCard = document.querySelector(".match2");
    secondCard.classList.remove("activeMatch");

    function nextMatchMobile() {
      matchItems[matchCount].classList.remove("activeMatch");

      if (matchCount < nbBet - 1) {
        matchCount++;
      } else {
        matchCount = 0;
      }
      matchItems[matchCount].classList.add("activeMatch");
    }
    nextMatchBtn.addEventListener("click", nextMatchMobile);
  }
}

let mediaMatch = window.matchMedia("(max-width: 1200px)");
queryMatch(mediaMatch);
mediaMatch.addEventListener('load', queryMatch);
