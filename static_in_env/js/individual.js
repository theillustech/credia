if (window.matchMedia("(min-width: 736px)").matches) {
  const propertyImgs = document.querySelectorAll(
    ".property-single-img-container"
  );

  propertyImgs.forEach((element) => {
    if (element.classList.contains("offscreen")) {
      element.classList.remove("offscreen");
    }
  });

  const propertyImgOveralays = document.querySelectorAll(
    ".image-overlay-container"
  );
  propertyImgOveralays.forEach((element) => {
    element.classList.add("offscreen");
  });

  const displayedImgs = document.querySelectorAll(".main");
  displayedImgs.forEach((element) => {
    console.log(element.src);
    element.style.background = `linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),url("${element.href}"), center/cover `;
  });

  document.querySelector("aside").classList.remove("offscreen");
}

const constrictPara = (para) => {
  let newPara = para.slice(0, 200);
  newPara = newPara.slice(0, newPara.lastIndexOf("."));
  return newPara;
};

const properyReadMoreBtn = document.querySelector("#about-property-btn");
const aboutPropertyPara = document.querySelector("#about-property-para");
const aboutPropertyParaContent = aboutPropertyPara.innerText;

aboutPropertyPara.innerText = constrictPara(aboutPropertyParaContent);

let clickCounter = 0;
properyReadMoreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clickCounter++;
  console.log(clickCounter);
  if (clickCounter == 1) {
    aboutPropertyPara.innerText = aboutPropertyParaContent;
  } else if (clickCounter > 1) {
    aboutPropertyPara.innerText = constrictPara(aboutPropertyParaContent);
    clickCounter = 0;
  }
});

const developerReadMoreBtn = document.querySelector("#about-developer-btn");
const aboutDeveloperPara = document.querySelector("#about-developer-para");
const aboutDeveloperParaContent = aboutDeveloperPara.innerText;

aboutDeveloperPara.innerText = constrictPara(aboutDeveloperParaContent);

let clickCounter1 = 0;
developerReadMoreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clickCounter1++;
  console.log(clickCounter1);
  if (clickCounter1 == 1) {
    aboutDeveloperPara.innerText = aboutDeveloperParaContent;
  } else if (clickCounter1 > 1) {
    aboutDeveloperPara.innerText = constrictPara(aboutDeveloperParaContent);
    clickCounter1 = 0;
  }
});

// Floor Plans
const topTabs = document.querySelectorAll(".house-type-togglers");
const saleableAreaLabel = document.querySelector(".saleable-area-label");
const floorPlanImg = document.querySelector("#floor-plan-img");

const hideLowerTabs = (lowerTabs) => {
  lowerTabs.classList.add("offscreen");
};

const diplaySaleableAreaAndImg = (tabNo, lowerTab) => {
  const imgSrc = lowerTab.children[0].innerText;
  const saleableArea = `${
    topTabs[tabNo].innerText
  } Saleable Area: ${lowerTab.innerText.replace(imgSrc, "")}`;

  saleableAreaLabel.innerText = saleableArea;
  floorPlanImg.src = imgSrc;
};

const displayLowerTabs = (topTabNo, currentSelectedNo) => {
  if (topTabNo > topTabs.length - 1) {
    return;
  }
  const lowerTabsContainer = document.querySelectorAll(".lower-tabs");

  let lowerTabsContainerToDisplay = lowerTabsContainer[topTabNo];
  if (!lowerTabsContainer[topTabNo].classList.contains("offscreen")) {
    return;
  }

  hideLowerTabs(lowerTabsContainer[currentSelectedNo]);
  lowerTabsContainerToDisplay.classList.remove("offscreen");

  console.log(lowerTabsContainerToDisplay);
  const lowerTabsArr = [...lowerTabsContainerToDisplay.children];
  lowerTabsArr.forEach((element) => {
    element.classList.remove("selected-tab");
  });
  lowerTabsArr[0].classList.add("selected-tab");

  console.log(topTabNo, 0, lowerTabsContainerToDisplay.children[0].innerText);

  // displayPriceAndImg(
  //   topTabNo,
  //   0,
  //   lowerTabsContainerToDisplay.children[0].innerText
  // );

  diplaySaleableAreaAndImg(topTabNo, lowerTabsArr[0]);

  let currentSelected = lowerTabsArr[0];
  lowerTabsArr.forEach((lowerTab) => {
    lowerTab.addEventListener("click", () => {
      if (lowerTab == currentSelected) {
        return;
      }

      diplaySaleableAreaAndImg(topTabNo, lowerTab);

      lowerTab.classList.add("selected-tab");
      currentSelected.classList.remove("selected-tab");
      currentSelected = lowerTab;
    });
  });
};

displayLowerTabs(0, 0);
// displayPriceAndImg(0, 0, document.querySelector);

const topTabsArr = [...topTabs];

let selected = document.querySelectorAll(".house-type-togglers")[0];

topTabsArr.forEach((topTab) => {
  topTab.addEventListener("click", () => {
    if (topTab === selected) {
      return;
    }

    let currentSelectedNo = topTabsArr.indexOf(selected);

    selected.classList.remove("selected-tab");
    topTab.classList.add("selected-tab");

    let tabNo = topTabsArr.indexOf(topTab);
    displayLowerTabs(tabNo, currentSelectedNo);
    selected = topTab;
  });
});

const propertyTypeTogglers = document.querySelectorAll(
  ".property-type-togglers"
);
const propertyInput = document.querySelector("#property-type");

propertyTypeTogglers.forEach((propertyTypeToggler) => {
  if (propertyTypeToggler.classList.contains("selected")) {
    propertyTypeToggler.classList.remove("selected");
  }
});

const links = document.querySelectorAll(".property-body-nav__link > a");

links.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();

    if (element.classList.contains("current-body-highlight")) {
      return;
    }

    const navigateToId =
      "#" + element.innerText.toLowerCase().replace(" ", "-");
    console.log(navigateToId);
    document.querySelector(navigateToId).scrollIntoView({ behavior: "smooth" });

    links.forEach((el) => {
      el.classList.remove("current-body-highlight");
    });

    element.classList.add("current-body-highlight");
  });
});

if (window.matchMedia("(max-width: 736px)").matches) {
  const contactForm = document.querySelector("aside");
  contactForm.removeAttribute("data-aos");
  const contactBuilderBtn = document.querySelector("#contact-builder-btn");
  const closeBtn = document.querySelector(".close");
  contactBuilderBtn.addEventListener("click", (e) => {
    e.preventDefault();
    contactForm.classList.remove("offscreen");
    contactForm.classList.add("modal");
    closeBtn.classList.remove("offscreen");
    closeBtn.addEventListener("click", () => {
      contactForm.classList.remove("modal");
      contactForm.classList.add("offscreen");
      closeBtn.classList.add("offscreen");
    });
    console.log(e);
  });
}
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  if (grecaptcha.getResponse() == "") {
    alert("Please check the recaptcha");
    e.preventDefault();
  } else {
  }
});

AOS.init();

const bodyNavLinks = [
  "overview",
  "about-project",
  "floor-plans",
  "amenities",
  "about-developer",
  "map-view",
];

bodyNavLinks.forEach((bodyNavLink) => {
  document.addEventListener("aos:in:" + bodyNavLink, ({ detail }) => {
    const navLinkID = "#" + bodyNavLink + "-link";
    const navLink = document.querySelector(navLinkID);
    navLink.classList.add("current-body-highlight");

    if (window.matchMedia("(max-width: 736px)").matches) {
      navLink.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  });

  document.addEventListener("aos:out:" + bodyNavLink, ({ detail }) => {
    const navLinkID = "#" + bodyNavLink + "-link";
    const navLink = document.querySelector(navLinkID);
    navLink.classList.remove("current-body-highlight");
    console.log(navLink);
  });
});
