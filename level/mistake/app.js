const slipPricing = document.querySelector("#slip-Pricing");
const iconPricing = document.querySelector(".icon-Pricing");
const menuPricing = document.querySelector(".menu-Pricing-text");
const slipFeatures = document.querySelector("#slip-Features");
const iconFeatures = document.querySelector(".icon-Features");
const menuFeatures = document.querySelector(".menu-Features-text");

const login = document.querySelector("#login");
const modal = document.querySelector("#modal");
const darkness = document.querySelector("#darkness");

const registr = document.querySelector("#registr");
const modalRegistr = document.querySelector("#modalRegistr");
const darkness2 = document.querySelector("#darkness-2");

slipPricing.addEventListener("click", openMenu);
slipFeatures.addEventListener("click", openMenu2);

function openMenu() {
  menuPricing.classList.toggle("active");
  iconPricing.classList.toggle("active");
}

function openMenu2() {
  menuFeatures.classList.toggle("active");
  iconFeatures.classList.toggle("active");
}

login.addEventListener("click", modalOpen);
darkness.addEventListener("click", modalClose);

function modalOpen() {
  modal.classList.add("active");
  darkness.classList.add("active");
}

function modalClose() {
  modal.classList.remove("active");
  darkness.classList.remove("active");
}

registr.addEventListener("click", registrOpen);
darkness2.addEventListener("click", regostrClose);

function registrOpen() {
  modalRegistr.classList.add("active");
  darkness2.classList.add("active");
}

function regostrClose() {
  modalRegistr.classList.remove("active");
  darkness2.classList.remove("active");
}
