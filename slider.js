const sliderItems = document.querySelectorAll(".matchCard");
const nbSlide = sliderItems.length;
const nextSlideBtn = document.querySelector(".nextSlide");
let count = 0;

function highQuery(highMedia) {
  if (highMedia.matches) {

    function nextSlide() {
      sliderItems[count].classList.remove("activeSlider");

      if (count < nbSlide - 1) {
        count++;
      } else {
        count = 0;
      }
      sliderItems[count].classList.add("activeSlider");
      sliderItems[count + 1].classList.add("activeSlider");
    }
    nextSlideBtn.addEventListener("click", nextSlide);
  }
}
let highMedia = window.matchMedia("(min-width: 1201px)");
highQuery(highMedia);
highMedia.addEventListener('load', highQuery);

function query(media) {
  if (media.matches) {
    const secondCard = document.querySelector(".card2");
    secondCard.classList.remove("activeSlider");

    function nextSlideMobile() {
      sliderItems[count].classList.remove("activeSlider");

      if (count < nbSlide - 1) {
        count++;
      } else {
        count = 0;
      }
      sliderItems[count].classList.add("activeSlider");
    }
    nextSlideBtn.addEventListener("click", nextSlideMobile);
  }
}
let media = window.matchMedia("(max-width: 1200px)");
query(media);
media.addEventListener('load', query);
