/* Mobile menu Show&Hide */
var divCloseMenu = document.getElementById("divCloseMenu");
var itemCloseMenu = document.getElementById("itemCloseMenu");
var menu = document.getElementById("menu");
var menuIcon = document.getElementById("menuButton");

function openMenu() {
  menuIcon.style.display = "none";
  divCloseMenu.style.display = "block";
  menu.classList.remove("menu_display-none");
  menu.classList.add("menu_display-block");
}

menuIcon.addEventListener("click", openMenu, false);

function closeMenu() {
  menuIcon.style.display = "block";
  divCloseMenu.style.display = "none";
  menu.classList.remove("menu_display-block");
  menu.classList.add("menu_display-none");
}

divCloseMenu.addEventListener("click", closeMenu, false);
itemCloseMenu.addEventListener("click", closeMenu, false);