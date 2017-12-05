/* Dropdown Show&Hide */
var closeMenu = document.getElementById("closeMenu");
var menuList = document.getElementById("menuList");

function dropdownOpen() {
  closeMenu.style.display = "block";
  menuList.style.display = "block";
}

function dropdownClose() {
  closeMenu.style.display = "none";
  menuList.style.display = "none";
}

/* Portfolio Show&Hide */
var modal = document.getElementById("portfolioModal");
var menuAbout = document.getElementById("menuAbout");
var menuPortfolio = document.getElementById("menuPortfolio");

function openPortfolio() {
  menuAbout.classList.remove("active");
  menuPortfolio.classList.add("active");
  modal.style.transform = "translate(0)";
}

function closePortfolio() {
  modal.style.transform = "translate(120%)";
  menuPortfolio.classList.remove("active");
  menuAbout.classList.add("active");
}

var menuAboutDrop = document.getElementById("menuAboutDrop");
var menuPortfolioDrop = document.getElementById("menuPortfolioDrop");

function openPortfolioDrop() {
  menuAboutDrop.classList.remove("active");
  menuPortfolioDrop.classList.add("active");
  modal.style.transform = "translate(0)";
  dropdownClose();
}

function closePortfolioDrop() {
  modal.style.transform = "translate(0, -200%)";
  menuPortfolioDrop.classList.remove("active");
  menuAboutDrop.classList.add("active");
  dropdownClose();
}

/* My actual age */
function calcAge(dateString) {
  var birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / (31557600000));
}
var age = calcAge("Wed Aug 02 1995 09:00:00 GMT-0300 (BRT)");
document.getElementById("years-old").innerHTML = age.toString();

