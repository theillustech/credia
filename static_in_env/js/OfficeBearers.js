const cards = document.querySelectorAll(".card");
const circles = document.querySelectorAll(".circle");

const prevBtn = document.querySelector("#left-arrow");
const nextBtn = document.querySelector("#right-arrow");

let cardSlide = 0;

const moveCardDots = (cards, circles, currentSlide, shift) => {
  const nextSlide = currentSlide + shift;
  console.log(cards[0], cards[cards.length - 1]);
  if (nextSlide < 0 || nextSlide > cards.length - 1) {
    return currentSlide;
  }

  if (window.matchMedia("(min-width: 736px)").matches && shift == 1) {
    cards[0].classList.add("offscreen");
    cards[cards.length - 1].classList.remove("offscreen");
    return 0;
  }

  if (window.matchMedia("(min-width: 736px)").matches && shift == -1) {
    cards[cards.length - 1].classList.add("offscreen");
    cards[0].classList.remove("offscreen");
    return 0;
  }

  for (let iterator of cards) {
    iterator.classList.add("offscreen");
  }

  for (let iterator of circles) {
    iterator.classList.add("small-circle");
  }

  circles[nextSlide].classList.remove("small-circle");
  cards[nextSlide].classList.remove("offscreen");

  return nextSlide;
};

nextBtn.addEventListener(
  "click",
  () => (cardSlide = moveCardDots(cards, circles, cardSlide, 1))
);
prevBtn.addEventListener(
  "click",
  () => (cardSlide = moveCardDots(cards, circles, cardSlide, -1))
);

const circlesArr = Array.prototype.slice.call(circles);
circlesArr.forEach((element, i) => {
  element.addEventListener("click", () => {
    moveCardDots(cards, circles, 0, i);
  });
});
const cards1 = document.querySelectorAll(".card1");
const circles1 = document.querySelectorAll(".c2");

const prevBtn1 = document.querySelector(".l1");
const nextBtn1 = document.querySelector(".r1");

let cardSlide1 = 0;

nextBtn1.addEventListener(
  "click",
  () => (cardSlide1 = moveCardDots(cards1, circles1, cardSlide1, 1))
);
prevBtn1.addEventListener(
  "click",
  () => (cardSlide1 = moveCardDots(cards1, circles1, cardSlide1, -1))
);

const circlesArr1 = Array.prototype.slice.call(circles1);
circlesArr1.forEach((element, i) => {
  element.addEventListener("click", () => {
    moveCardDots(cards1, circles1, 0, i);
  });
});

const cards3 = document.querySelectorAll(".card2");
const circles3 = document.querySelectorAll(".c3");

const prevBtn2 = document.querySelector("#left-arrow-green");
const nextBtn2 = document.querySelector("#right-arrow-green");

let cardSlide2 = 0;

nextBtn2.addEventListener(
  "click",
  () => (cardSlide2 = moveCardDots(cards3, circles3, cardSlide2, 1))
);
prevBtn2.addEventListener(
  "click",
  () => (cardSlide2 = moveCardDots(cards3, circles3, cardSlide2, -1))
);

const circlesArr2 = Array.prototype.slice.call(circles3);
circlesArr2.forEach((element, i) => {
  element.addEventListener("click", (e) => {
    moveCardDots(cards3, circles3, 0, i);
  });
});

const cards4 = document.querySelectorAll(".card3");
const circles4 = document.querySelectorAll(".c4");

const prevBtn3 = document.querySelector("#left-arrow-green2");
const nextBtn3 = document.querySelector("#right-arrow-green2");

let cardSlide3 = 0;

nextBtn3.addEventListener(
  "click",
  () => (cardSlide3 = moveCardDots(cards4, circles4, cardSlide3, 1))
);
prevBtn3.addEventListener(
  "click",
  () => (cardSlide3 = moveCardDots(cards4, circles4, cardSlide3, -1))
);

const circlesArr3 = Array.prototype.slice.call(circles4);
circlesArr3.forEach((element, i) => {
  element.addEventListener("click", (e) => {
    moveCardDots(cards4, circles4, 0, i);
  });
});

if (window.matchMedia("(min-width: 736px)").matches) {
  const memberCards = document.querySelectorAll(".individual-member-container");
  for (let card of memberCards) {
    card.classList.remove("offscreen");
  }

  cards3[cards3.length - 1].classList.add("offscreen");

  prevBtn2.setAttribute("src", "./static/images/svgs/Left Arrow.svg");
  nextBtn2.setAttribute("src", "./static/images/svgs/Right Arrow.svg");
}
