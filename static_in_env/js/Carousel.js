const cards = document.querySelectorAll(".our-core-values-card");
const circles = document.querySelectorAll(".our-core-values-circle");

const prevBtn = document.querySelector("#left-arrow");
const nextBtn = document.querySelector("#right-arrow");

let cardSlide = 0;
const moveCardDots = (currentSlide, shift) => {
  const nextSlide = currentSlide + shift;
  if (nextSlide < 0 || nextSlide >= cards.length) {
    return;
  }
  for (let iterator of cards) {
    iterator.classList.add("our-core-values-offscreen");
  }

  for (let iterator of circles) {
    iterator.classList.add("our-core-values-small-circle");
  }

  circles[nextSlide].classList.remove("our-core-values-small-circle");
  cards[nextSlide].classList.remove("our-core-values-offscreen");

  cardSlide = nextSlide;
};

nextBtn.addEventListener("click", () => moveCardDots(cardSlide, 1));
prevBtn.addEventListener("click", () => moveCardDots(cardSlide, -1));

const circlesArr = Array.prototype.slice.call(circles);
circlesArr.forEach((element, i) => {
  element.addEventListener("click", () => {
    moveCardDots(0, i);
  });
});
