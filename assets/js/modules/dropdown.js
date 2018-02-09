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
