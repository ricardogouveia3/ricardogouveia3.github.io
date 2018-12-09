document.addEventListener('DOMContentLoaded', () => {
  //  Trigger elements
  const menuButton = document.getElementById('menuLink')

  //  Sliding Elements
  let menuInner = document.getElementById('menuInner')

  // Initial state of element
  let viewportW, mobileMode, initialPosition

  setScreenMode()
  setInitialPosition()

  window.onresize = () => {
    viewportW = window.innerWidth

    setScreenMode()
    setInitialPosition()
  }

  function setScreenMode () {
    viewportW = window.innerWidth

    if (viewportW <= 700) {
      mobileMode = true
    } else { mobileMode = false }
  }

  function setInitialPosition () {
    if (mobileMode) {
      initialPosition = 'translateY(-150%)'
    } else {
      initialPosition = 'translateX(-150%)'
    }

    menuInner.style.transform = initialPosition
  }

  //  Major sliding (both axis) funtion
  function toogleSlidingElement (slidingElement) {
    if (slidingElement.style.transform === initialPosition) {
      slidingElement.style.transform = 'translate(0)'
    } else {
      slidingElement.style.transform = initialPosition
    }
  }

  //  Events binding
  menuButton.addEventListener('click', () => {
    toogleSlidingElement(menuInner)
  }, false)
})
