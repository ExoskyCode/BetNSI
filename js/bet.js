const betItems = document.querySelectorAll(".currentCard");
const nbBet = betItems.length;
const nextBet = document.querySelectorAll(".nextBet");
let betCount = 0;

function highQueryBet(highMediaBet) {
  if (highMediaBet.matches) {

    function nextBetMobile() {
      betItems[betCount].classList.remove("activeBet");

      if (betCount < nbBet - 1) {
        betCount++;
      } else {
        betCount = 0;
      }
      betItems[betCount].classList.add("activeBet");
      betItems[betCount + 1].classList.add("activeBet");
    }
    nextBet.forEach((btn) => {
      btn.addEventListener("click", nextBetMobile);
    });
  }
}
let highMediaBet = window.matchMedia("(min-width: 1201px)");
highQueryBet(highMediaBet);
highMediaBet.addEventListener('load', highQueryBet);

function querybet(mediaBet) {
  if (mediaBet.matches) {
    const secondCard = document.querySelector(".current2");
    secondCard.classList.remove("activeBet");

    function nextBetMobile() {
      betItems[betCount].classList.remove("activeBet");

      if (betCount < nbBet - 1) {
        betCount++;
      } else {
        betCount = 0;
      }
      betItems[betCount].classList.add("activeBet");
    }

    nextBet.forEach((btn) => {
      btn.addEventListener("click", nextBetMobile);
    });
  }
}

let mediaBet = window.matchMedia("(max-width: 1200px)");
querybet(mediaBet);
mediaBet.addEventListener('load', querybet);
