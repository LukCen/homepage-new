const menuContainer = document.querySelector('.nav-button-container')
const btnMenuMobile = document.querySelector('#menu-mobile')

const closeMenu = (event) => {
  menuContainer.classList.remove('active')
}

btnMenuMobile.addEventListener('touchstart', (e) => {
  menuContainer.classList.toggle('active')
  e.stopPropagation()
})

document.addEventListener('touchstart', (e) => {
  if (menuContainer.classList.contains('active')) {
    closeMenu(e)
  }
})
