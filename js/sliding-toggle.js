document.addEventListener('DOMContentLoaded', () => {
  //  Trigger elements
  const menuButton = document.getElementById('menuLink')
  const homeButton = document.getElementById('menuListItemHome')
  const aboutMeButton = document.getElementById('menuListItemAboutMe')
  const postsButton = document.getElementById('menuListItemPosts')
  const contactButton = document.getElementById('menuListItemContact')

  //  Sliding Elements
  let menuInner = document.getElementById('menuInner')
  let aboutMeContainer = document.getElementById('aboutMe')
  let contactContainer = document.getElementById('contact')

  let slidingElements = [menuInner, aboutMeContainer, contactContainer]

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

    for (let element of slidingElements) {
      element.style.transform = initialPosition
    }
  }

  //  Major sliding (both axis) funtion
  function toogleSlidingElement (slidingElement) {
    if (slidingElement.style.transform === initialPosition) {
      slidingElement.style.transform = 'translate(0)'
    } else {
      slidingElement.style.transform = initialPosition
    }
  }

  function closeAll () {
    for (const element of slidingElements) {
      element.style.transform = initialPosition
    }
  }

  function closeAllBut (persistantElement) {
    for (const element of slidingElements) {
      if (element !== persistantElement) {
        element.style.transform = initialPosition
      }
    }
  }

  //  Events binding
  menuButton.addEventListener('click', () => {
    toogleSlidingElement(menuInner)
    closeAllBut(menuInner)
  }, false)

  homeButton.addEventListener('click', closeAll, false)

  aboutMeButton.addEventListener('click', () => {
    toogleSlidingElement(aboutMeContainer)
    closeAllBut(aboutMeContainer)
  }, false)

  postsButton.addEventListener('click', closeAll, false)

  contactButton.addEventListener('click', () => {
    toogleSlidingElement(contactContainer)
    closeAllBut(contactContainer)
  }, false)
})
