/* Portfolio Show&Hide */
var modal = document.getElementById("portfolioModal");
var menuAbout = document.getElementById("menuAbout");
var menuPortfolio = document.getElementById("menuPortfolio");

var portfolioState = false;

function openPortfolio() {
  portfolioState = true;
  menuAbout.classList.remove("menu__list__item__link_active");
  menuPortfolio.classList.add("menu__list__item__link_active");
  modal.style.display = "grid";
  setTimeout(function(){
    modal.style.transform = "translate(0)";
  }, 100);
}

menuPortfolio.addEventListener("click", openPortfolio, false); 

function closePortfolio() {
  portfolioState = false;
  modal.style.transform = "translate(120%)";
  menuPortfolio.classList.remove("menu__list__item__link_active");
  menuAbout.classList.add("menu__list__item__link_active");
  setTimeout(function(){
    modal.style.display = "none";
  }, 600);
}

menuAbout.addEventListener("click", closePortfolio, false); 