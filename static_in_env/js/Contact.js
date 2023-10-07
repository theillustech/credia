const hearBtn = document.getElementById("#hear-btn");
const interestedBtn = document.getElementById("#interested-btn");
const interestedInput = document.querySelector("#interested-input");
const hearInput = document.querySelector("#hear-about-us-input");

const dropdownmenus = [
  document.querySelector("#hear-menu"),
  document.querySelector("#interested-menu"),
];

dropdownmenus.forEach((element) => {
  const arr = Array.prototype.slice.call(element.children);
  arr.forEach((li) => {
    li.addEventListener("click", () => {
      li.classList.add("selected");
      if (element.id == "hear-menu") {
        hearBtn.innerHTML = li.innerHTML;
        hearInput.value = li.innerText;
      } else {
        interestedBtn.innerHTML = li.innerHTML;
        interestedInput.value = li.innerText;
      }
    });
  });
});

const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute(
    "style",
    "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
  );
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  if (grecaptcha.getResponse() == "") {
    alert("Please check the recaptcha");
    e.preventDefault();
  }
});

function setCookie(cname, cvalue, exdays = 1) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
