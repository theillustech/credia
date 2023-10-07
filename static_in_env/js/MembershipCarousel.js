const MembershipCardDiv = document.querySelectorAll(".membership-card-array");
const MembershipCircles = document.querySelectorAll(".membership-circle");

const MembershipPrevBtn = document.querySelector("#membership-left-arrow");
const MembershipNextBtn = document.querySelector("#membership-right-arrow");

let MembershipCardSlide = 0;
const MembershipMoveCardDots = (MembershipCurrentSlide, MembershipShift) => {
  const MembershipNextSlide = MembershipCurrentSlide + MembershipShift;
  if (
    MembershipNextSlide < 0 ||
    MembershipNextSlide >= MembershipCardDiv.length
  ) {
    return;
  }
  for (let iterator of MembershipCardDiv) {
    iterator.classList.add("membership-offscreen");
  }

  for (let iterator of MembershipCircles) {
    iterator.classList.add("membership-small-circle");
  }

  MembershipCircles[MembershipNextSlide].classList.remove(
    "membership-small-circle"
  );
  MembershipCardDiv[MembershipNextSlide].classList.remove(
    "membership-offscreen"
  );

  MembershipCardSlide = MembershipNextSlide;
};

MembershipNextBtn.addEventListener("click", () =>
  MembershipMoveCardDots(MembershipCardSlide, 1)
);
MembershipPrevBtn.addEventListener("click", () =>
  MembershipMoveCardDots(MembershipCardSlide, -1)
);

const MembershipCirclesArr = Array.prototype.slice.call(MembershipCircles);
MembershipCirclesArr.forEach((element, i) => {
  element.addEventListener("click", () => {
    MembershipMoveCardDots(0, i);
  });
});
