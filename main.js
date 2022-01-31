const toggle = document.querySelectorAll('.toggle');
const menu = document.querySelector('.navigation');


//jeito q funcionou
for (const element of toggle) {
  element.addEventListener('click', function () {
    menu.classList.toggle('show')
  })
}

// //JEITO DO PROFESSOR
// toggle.addEventListener('click', () => {
//     menu.classList.toggle('show')
// })

//jeito do youtube
// const toggle = document.getElementById('btn-mobile');

// function toggleMenu() {
//   const nav = document.querySelector('.menu-lateral');
//   nav.classList.toggle('ativo');
// }

// btnMobile.addEventListener('click', toggleMenu);
