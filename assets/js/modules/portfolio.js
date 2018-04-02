/* Portfolio Show&Hide */
var modal = document.getElementById("portfolioModal");
var menuAbout = document.getElementById("menuAbout");
var menuPortfolio = document.getElementById("menuPortfolio");
var divClosePortfolio = document.getElementById("divClosePortfolio");

var portfolioState = false;

function openPortfolio() {
  portfolioState = true;
  divClosePortfolio.style.display = "block";
  menuAbout.classList.remove("menu__list__item__link_active");
  menuPortfolio.classList.add("menu__list__item__link_active");
  modal.style.display = "grid";
  setTimeout(function(){
    modal.style.transform = "translate(0)";
  }, 100);
}

menuPortfolio.addEventListener("click", openPortfolio, false); 
menuPortfolio.addEventListener("click", closeMenu, false); 

function closePortfolio() {
  portfolioState = false;
  divClosePortfolio.style.display = "none";
  modal.style.transform = "translate(120%)";
  menuPortfolio.classList.remove("menu__list__item__link_active");
  menuAbout.classList.add("menu__list__item__link_active");
  setTimeout(function(){
    modal.style.display = "none";
  }, 600);
}

divClosePortfolio.addEventListener("click", closePortfolio, false); 
menuAbout.addEventListener("click", closePortfolio, false); 
menuAbout.addEventListener("click", closeMenu, false); 