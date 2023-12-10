const slipPricing = document.querySelector("#slip-Pricing");
const menuPricing = document.querySelector("#menuPricing");
const iconPricing = document.querySelector("#iconPricing");
const slipTextP = document.querySelector(".slip-textP");

const slipFeatures = document.querySelector("#slip-Features");
const menuFeatures = document.querySelector("#menuFeatures");
const iconFeatures = document.querySelector("#iconFeatures");
const slipTextF = document.querySelector(".slip-textF");

// меню Pricing
slipPricing.addEventListener("click", () => {
  menuPricing.classList.toggle("active");
  iconPricing.classList.toggle("active");
  slipTextP.classList.toggle("active");
});

// меню Features
slipFeatures.addEventListener("click", () => {
  menuFeatures.classList.toggle("active");
  iconFeatures.classList.toggle("active");
  slipTextF.classList.toggle("active");
});

const login = document.querySelector(".login");
const modal = document.querySelector("#modal");
const darkness = document.querySelector("#darkness");

// Secure Login

function activationAdd(beta, gama) {
  beta.addEventListener("click", () => {
    gama.classList.add("active");
  });
}

function activationRemove(beta, gama) {
  beta.addEventListener("click", () => {
    gama.classList.remove("active");
  });
}

activationAdd(login, modal);
activationAdd(login, darkness);
activationRemove(darkness, modal);
activationRemove(darkness, darkness);

// Register

const registr = document.querySelector(".registr");
const modalRegistr = document.querySelector("#modalRegistr");
const darkness2 = document.querySelector("#darkness2");

activationAdd(registr, modalRegistr);
activationAdd(registr, darkness2);
activationRemove(darkness2, modalRegistr);
activationRemove(darkness2, darkness2);

// login
const EmailLog = document.querySelector("#Email-log");
const passwordTextLog = document.querySelector("#password-text-log");
const passwordControlLog = document.querySelector(".password-control-log");

passwordControlLog.addEventListener("click", () => {
  if (passwordTextLog.type == "password") {
    passwordTextLog.type = "text";
    passwordControlLog.classList.add("view");
  } else if (passwordTextLog.type == "text") {
    passwordTextLog.type = "password";
    passwordControlLog.classList.remove("view");
  }
});

// registr
const EmailReg = document.querySelector("#Email-reg");
const passwordText = document.querySelector(".password-text");
const passwordControl1 = document.querySelector(".password-control");

passwordControl1.addEventListener("click", () => {
  if (passwordText.type == "password") {
    passwordText.type = "text";
    passwordControl1.classList.add("view");
  } else if (passwordText.type == "text") {
    passwordText.type = "password";
    passwordControl1.classList.remove("view");
  }
});

const rePasswordText = document.querySelector("#re-password-text");
const rePasswordControl = document.querySelector(".re-password-control");

rePasswordControl.addEventListener("click", () => {
  if (rePasswordText.type == "password") {
    rePasswordText.type = "text";
    rePasswordControl.classList.add("view");
  } else if (rePasswordText.type == "text") {
    rePasswordText.type = "password";
    rePasswordControl.classList.remove("view");
  }
});

// login

const loginBt = document.querySelector("#login-bt");

loginBt.addEventListener("click", () => {
  if (EmailLog.value == "") {
    EmailLog.style.animation = "none";
    EmailLog.offsetHeight;
    setTimeout(function () {
      EmailLog.style.animation = "noText 2s linear";
    }, 1000);
  }
});

loginBt.addEventListener("click", () => {
  if (passwordTextLog.value == "") {
    passwordTextLog.style.animation = "none";
    passwordTextLog.offsetHeight;
    setTimeout(function () {
      passwordTextLog.style.animation = "noText 2s linear";
    }, 1000);
  }
});

// registr
const registrBt = document.querySelector("#registrBt");

registrBt.addEventListener("click", () => {
  if (EmailReg.value == "") {
    EmailReg.style.animation = "none";
    EmailReg.offsetHeight;
    setTimeout(function () {
      EmailReg.style.animation = "noText 2s linear";
    }, 1000);
  }
});

registrBt.addEventListener("click", () => {
  if (passwordText.value == "") {
    passwordText.style.animation = "none";
    passwordText.offsetHeight;
    setTimeout(function () {
      passwordText.style.animation = "noText 2s linear";
    }, 1000);
  }
});

registrBt.addEventListener("click", () => {
  if (rePasswordText.value == "") {
    rePasswordText.style.animation = "none";
    rePasswordText.offsetHeight;
    setTimeout(function () {
      rePasswordText.style.animation = "noText 2s linear";
    }, 1000);
  }
});

// login Adap

const loginAdap = document.querySelector("#loginAdap");

activationAdd(loginAdap, modal);
activationAdd(loginAdap, darkness);
activationRemove(darkness, modal);
activationRemove(darkness, darkness);

const bodel = document.querySelector("body");

loginAdap.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Register

const registrAdap = document.querySelector("#registrAdap");

activationAdd(registrAdap, modalRegistr);
activationAdd(registrAdap, darkness2);
activationRemove(darkness2, modalRegistr);
activationRemove(darkness2, darkness2);

registrAdap.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const menuOutput = document.querySelector("#menu-output");
const contentBurger = document.querySelector("#content-burger");
const iconRemove = document.querySelector("#icon-remove");

menuOutput.addEventListener("click", () => {
  contentBurger.classList.add("active");
});

iconRemove.addEventListener("click", () => {
  contentBurger.classList.remove("active");
});

const slipPricing2 = document.querySelector("#slip-Pricing2");
const iconPric = document.querySelector(".icon-Pric");
const menuPricing2 = document.querySelector("#menuPricing2");
const slipTextF2 = document.querySelector(".slipTextF2");

function openMenu(a, b) {
  a.addEventListener("click", () => {
    b.classList.toggle("active");
  });
}
openMenu(slipPricing2, menuPricing2);
openMenu(slipPricing2, slipTextF2);
openMenu(slipPricing2, iconPric);

const slipFeatures2 = document.querySelector("#slip-Features2");
const iconFeat = document.querySelector(".icon-Feat");
const menuFeatures2 = document.querySelector("#menuFeatures2");
const blog = document.querySelector(".blog");

openMenu(slipFeatures2, menuFeatures2);
openMenu(slipFeatures2, blog);
openMenu(slipFeatures2, iconFeat);

// Open contact
const glavResources = document.querySelector("#glavResources");
const glavContact = document.querySelector("#glavContact");
const glavContactUS = document.querySelector("#glavContactUS");
const glavSocial = document.querySelector("#glavSocial");

const contactTextR = document.querySelector("#contactTextR");
const contactTextC = document.querySelector("#contactTextC");
const contactTextCU = document.querySelector("#contactTextCU");
const contactTextS = document.querySelector("#contactTextS");

openMenu(glavResources, contactTextR);
openMenu(glavContact, contactTextC);
openMenu(glavContactUS, contactTextCU);
openMenu(glavSocial, contactTextS);
