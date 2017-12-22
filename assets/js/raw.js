/* Dropdown Show&Hide */
var closeMenu = document.getElementById("closeMenu");
var menu = document.getElementById("menu");
var button = document.getElementById("menuButton");

function dropdownOpen() {
  button.style.display = "none";
  closeMenu.style.display = "block";
  menu.classList.remove("menu_display-none");
  menu.classList.add("menu_display-block");
}

function dropdownClose() {
  button.style.display = "block";
  closeMenu.style.display = "none";
  menu.classList.remove("menu_display-block");
  menu.classList.add("menu_display-none");
}

/* Portfolio Show&Hide */
var modal = document.getElementById("portfolioModal");
var menuAbout = document.getElementById("menuAbout");
var menuPortfolio = document.getElementById("menuPortfolio");

function openPortfolio() {
  menuAbout.classList.remove("menu__list__item__link_active");
  menuPortfolio.classList.add("menu__list__item__link_active");
  modal.style.display = "grid";
  setTimeout(function(){
    modal.style.transform = "translate(0)";
  }, 100);

}

function closePortfolio() {
  modal.style.transform = "translate(120%)";
  menuPortfolio.classList.remove("menu__list__item__link_active");
  menuAbout.classList.add("menu__list__item__link_active");
  setTimeout(function(){
    modal.style.display = "none";
  }, 600);
}

/* My actual age */
function calcAge(dateString) {
  var birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / (31557600000));
}
var age = calcAge("Wed Aug 02 1995 09:00:00 GMT-0300 (BRT)");
document.getElementById("years-old").innerHTML = age.toString();
