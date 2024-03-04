const menuContainer = document.querySelector('.nav-button-container')
const btnMenuMobile = document.querySelector('#menu-mobile')

btnMenuMobile.addEventListener('click', () => {
  menuContainer.classList.toggle('active')
})

