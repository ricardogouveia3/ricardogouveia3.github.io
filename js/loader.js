document.addEventListener('DOMContentLoaded', () => {
  let loader = document.getElementById('loader')

  loader.classList.add('loader-fade')

  loader.addEventListener('animationend', () => {
    loader.style.display = 'none'
  })
})
