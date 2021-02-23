const swiper = new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.slider__next',
    prevEl: '.slider__prev',
  }
});

const menu = document.querySelector('.menu')
const menuItems = document.querySelectorAll('.menu__item')
const headerToggle = document.querySelector('.header__toggle')

headerToggle.addEventListener('click', ()=>{
  menu.classList.toggle('active')
})

menuItems.forEach((item) => {
  item.addEventListener('click', ()=>{
    menu.classList.remove('active')
  })
});
