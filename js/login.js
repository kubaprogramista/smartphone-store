const toggle = document.querySelector("#darkmode-toggle");
const mainImage = document.querySelector(".main-right-img");
const bottomWaveColor = document.querySelectorAll(".bottom-wave .shape-fill");
const upperWaveColor = document.querySelectorAll(".upper-wave .shape-fill");
const loginSection = document.querySelector(".login-section");

function darkModeHandler() {
  if (toggle.checked) {
    localStorage.setItem("theme", "dark");
    dark();
  } else {
    localStorage.setItem("theme", "light");
    light();
  }
}

let theme = localStorage.getItem("theme");
if (theme === "dark") {
  dark();
} else if (theme === "light") {
  light();
}

function dark() {
  toggle.checked = true;
  bottomWaveColor.forEach((element) => {
    element.style.transition = "all .3s ease-in-out";
    element.style.fill = "#242424";
  });
  upperWaveColor.forEach((element) => {
    element.style.transition = "all .3s ease-in-out";
    element.style.fill = "#242424";
  });
  document.body.style.transition = "background 0.3s ease-in-out";
  document.body.style.backgroundColor = "rgb(47,47,47)";

  loginSection.style.transition = "background 0.3s ease-in-out";
  loginSection.style.background =
    "linear-gradient(rgba(29, 29, 29, 1), rgba(40, 40, 40, 1))";
}

function light() {
  toggle.checked = false;
  bottomWaveColor.forEach((element) => {
    element.style.transition = "all .3s ease-in-out";
    element.style.fill = "#264ACA";
  });
  upperWaveColor.forEach((element) => {
    element.style.transition = "all .3s ease-in-out";
    element.style.fill = "#264ACA";
  });
  document.body.style.transition = "0.3s ease-in-out";
  document.body.style.backgroundColor = "rgb(51,99,231)";
  // --darkBlue: rgba(38, 74, 202, 1);
  // --lightBlue: rgba(51, 99, 231, 1);
  loginSection.style.background =
    "linear-gradient(rgba(255,255,255, .1), rgba(255,255,255, .05))";
}

const responsiveList = document.querySelector(".responsive-list");
const mobileHeaderWrapper = document.querySelector(".header-wrapper");
const mobileHeaderLinks = document.querySelector("#header-links");
const mobileHeaderButtons = document.querySelector("#header-buttons");

responsiveList.addEventListener("click", function () {
  mobileHeaderWrapper.classList.toggle("active");
  mobileHeaderLinks.classList.toggle("active");
  mobileHeaderButtons.classList.toggle("active");
  responsiveList.classList.toggle("active");
});
