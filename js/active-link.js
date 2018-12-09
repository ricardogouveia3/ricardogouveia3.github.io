let homeLink = document.getElementById('menuListItemHome')
let aboutMeLink = document.getElementById('menuListItemAboutMe')
let postsLink = document.getElementById('menuListItemPosts')
let contactLink = document.getElementById('menuListItemContact')

let menuLinks = [homeLink, aboutMeLink, postsLink, contactLink]

homeLink.addEventListener('click', () => {
  removeAllActiveLinksBut(homeLink)
}, false)

aboutMeLink.addEventListener('click', () => {
  removeAllActiveLinksBut(aboutMeLink)
}, false)

postsLink.addEventListener('click', () => {
  removeAllActiveLinksBut(homeLink)
}, false)

contactLink.addEventListener('click', () => {
  removeAllActiveLinksBut(contactLink)
}, false)

function removeAllActiveLinksBut (activeElement) {
  activeElement.classList.add('menu__list__item--active')
  for (const element of menuLinks) {
    if (element !== activeElement) {
      element.classList.remove('menu__list__item--active')
    }
  }
}
