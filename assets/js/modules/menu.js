/*                       */
/* Mobile menu Show&Hide */
/*                       */

/* Get HTML elements */
var divCloseMenu = document.getElementById("divCloseMenu");
var itemCloseMenu = document.getElementById("itemCloseMenu");
var menu = document.getElementById("menu");
var menuIcon = document.getElementById("menuButton");

/* Get viewport props */
var windowWidth = window.innerWidth;  //  Get viewport width

/* Set elements status variables n default values */
var menuState = false;  // Is menu open?
var mobileMenu = false; // Is menu on mobile mode?


/* Checks for every window rezise */
window.onresize = function() {  //  Updates viewport width on resize
  windowWidth = window.innerWidth;

  if (windowWidth <= 600) { mobileMenu = true; } else { mobileMenu = false; } // Sets variable to watch menu mode
  if (mobileMenu == false) {
    menu.style.transform = "translate(0)";  // Resets desktop menu translate on resize;
  } else { 
    menu.style.transform = "translate(120%)";
    divCloseMenu.style.display = "none";
  }  // Sets mobile menu to hide position on resize
};


/* Open menu func */
function openMenu() {
  var menuState = true;
  
  if (mobileMenu == true) {
    divCloseMenu.style.display = "block";
    setTimeout(function(){
      menu.style.transform = "translate(0)";  // Move menu to inside viewport
    }, 100);
  }
}

/* Open menu event listeners */
menuIcon.addEventListener("click", openMenu, false);


/* Close menu func */
function closeMenu() {
  var menuState = false;
  divCloseMenu.style.display = "none";

  if (mobileMenu == true) {
    setTimeout(function(){
      menu.style.transform = "translate(120%)"; // Move menu to outside viewport
    }, 100);
  }
}

/* Close menu event listeners */
divCloseMenu.addEventListener("click", closeMenu, false);
itemCloseMenu.addEventListener("click", closeMenu, false);