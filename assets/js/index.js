function dropdownOpen(){closeMenu.style.display="block",menuList.style.display="block"}function dropdownClose(){closeMenu.style.display="none",menuList.style.display="none"}function openPortfolio(){menuAbout.classList.remove("active"),menuPortfolio.classList.add("active"),modal.style.display="grid",setTimeout(function(){modal.style.transform="translate(0)"},100)}function closePortfolio(){modal.style.transform="translate(120%)",menuPortfolio.classList.remove("active"),menuAbout.classList.add("active"),setTimeout(function(){modal.style.display="none"},600)}function openPortfolioDrop(){menuAboutDrop.classList.remove("active"),menuPortfolioDrop.classList.add("active"),modal.style.display="grid",setTimeout(function(){modal.style.transform="translate(0)"},100),dropdownClose()}function closePortfolioDrop(){modal.style.transform="translate(0, -200%)",menuPortfolioDrop.classList.remove("active"),menuAboutDrop.classList.add("active"),setTimeout(function(){modal.style.display="none"},600),dropdownClose()}function calcAge(dateString){var birthday=+new Date(dateString);return~~((Date.now()-birthday)/315576e5)}var closeMenu=document.getElementById("closeMenu"),menuList=document.getElementById("menuList"),modal=document.getElementById("portfolioModal"),menuAbout=document.getElementById("menuAbout"),menuPortfolio=document.getElementById("menuPortfolio"),menuAboutDrop=document.getElementById("menuAboutDrop"),menuPortfolioDrop=document.getElementById("menuPortfolioDrop"),age=calcAge("Wed Aug 02 1995 09:00:00 GMT-0300 (BRT)");document.getElementById("years-old").innerHTML=age.toString();var backgroundImage=new Image,backgroundDiv=document.getElementById("photo"),changeBackground=function(){backgroundDiv.classList.remove("photo-blur"),backgroundDiv.classList.add("photo-large")};backgroundImage.onload=changeBackground(),backgroundImage.src="assets/img/bg.jpg";