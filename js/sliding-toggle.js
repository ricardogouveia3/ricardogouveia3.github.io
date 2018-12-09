//  Trigger elements
const menuButton = document.getElementById('menuLink')

//  Sliding Elements
let menuInner = document.getElementById('menuInner')

// Initial state of element
menuInner.style.transform = 'translateX(-150%)' // Initialize with translateY(150%) if mobile

//  Major sliding (X axis) funtion
function toogleSlidingElement (slidingElement) { // conditionalize to translateY(150%) if mobile (bool)
  if (slidingElement.style.transform === 'translateX(-150%)') {
    slidingElement.style.transform = 'translateX(0)'
  } else { slidingElement.style.transform = 'translateX(-150%)' }
}

//  Events binding
menuButton.addEventListener('click', function () {
  toogleSlidingElement(menuInner)
}, false)
