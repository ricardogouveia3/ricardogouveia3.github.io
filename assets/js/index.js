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

/* My actual age */
function calcAge(dateString) {
  var birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / (31557600000));
}
var age = calcAge("Wed Aug 02 1995 09:00:00 GMT-0300 (BRT)");
document.getElementById("years-old").innerHTML = age.toString();

