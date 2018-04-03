/* Mobile menu Show&Hide */
var divCloseMenu = document.getElementById("divCloseMenu");
var itemCloseMenu = document.getElementById("itemCloseMenu");
var menu = document.getElementById("menu");
var menuIcon = document.getElementById("menuButton");

var menuState = false;

function openMenu() {
  var menuState = true;
  divCloseMenu.style.display = "block";
  setTimeout(function(){
    menu.style.transform = "translate(0)";
  }, 100);
}

menuIcon.addEventListener("click", openMenu, false);

function closeMenu() {
  var menuState = false;
  divCloseMenu.style.display = "none";
  setTimeout(function(){
    menu.style.transform = "translate(120%)";
  }, 100);
}

divCloseMenu.addEventListener("click", closeMenu, false);
itemCloseMenu.addEventListener("click", closeMenu, false);