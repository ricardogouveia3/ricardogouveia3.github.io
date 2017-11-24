/* Dropdown Show&Hide */
var dropdown = document.getElementById("dropdown-content");
function dropdownToggle() {
    if (dropdown.style.display === "none") {
        dropdown.style.display = "inline-block";
    }
    else {
        dropdown.style.display = "none";
    }
}
/* My actual age */
function calcAge(dateString) {
    var birthday = +new Date(dateString);
    return ~~((Date.now() - birthday) / (31557600000));
}
var age = calcAge("Wed Aug 02 1995 09:00:00 GMT-0300 (BRT)");
document.getElementById("years-old").innerHTML = age.toString();
/* Smooth scroll to a certain element */

/* Load particles */
particlesJS.load('welcome', '../json/particles.json', function() {
  console.log('callback - particles.js config loaded on welcome-section background');
});

particlesJS.load('portfolio', '../json/particles.json', function() {
  console.log('callback - particles.js config loaded on portfolio background');
});

particlesJS.load('footer', '../json/particles.json', function() {
  console.log('callback - particles.js config loaded on footer background');
});

/* Smooth scroll */
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });