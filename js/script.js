window.onscroll = () => {
  //Смена шапки при скролле
  if (pageYOffset >= 100) {
    document.querySelector('.header__top').classList.add('active');
  } else {
    document.querySelector('.header__top').classList.remove('active');
  }

  // Плавное появление контента

  const circles = document.querySelectorAll('.circle');

  for (circle of circles) {
    const elemBoundingClientRect =
      circle.getBoundingClientRect().top - document.documentElement.clientHeight;
    if (elemBoundingClientRect <= 0) {
      circle.classList.add('active');
    }
  }
};

// Чтобы полоска автоматически становилась больше,если больше собрали денег ученики
(function earnedLine() {
  let startEarned = document.querySelector('.header__money-start').textContent;
  let endEarned = document.querySelector('.header__money-end').textContent;

  let colectedLine = document.querySelector('.header__line-colected');
  let uncolecltedLine = document.querySelector('.header__line-uncolected');

  let colectedPercentage = Math.round((eval(startEarned) / eval(endEarned)) * 100);
  let uncolectedPercentage = 100 - colectedPercentage;

  colectedLine.style.width = colectedPercentage + '%';
  uncolecltedLine.style.width = uncolectedPercentage + '%';
})();

// //Открывать окошко при клике на кнопку биография

// const teachersBlocks = document.querySelector('.teachers__blocks');
// const showBiography = document.querySelector('.show-biography');
// const showBiographyTitle = document.querySelector('.show-biography-title');
// const showBiographyDescribe = document.querySelector('.show-biography-describe');
// const close = document.querySelector('.close');

// teachersBlocks.addEventListener('click', (e) => {
//   const target = e.target;

//   if (target.classList.contains('teachers__block-biography1')) {
//     showBiography.style.display = 'block';
//     showBiographyTitle.textContent = 'Человек 1';
//     showBiographyDescribe.textContent = `
//     Биография Человека 1 Биография Человека 1 Биография Человека 1
//     Биография Человека 1 Биография Человека 1 Биография Человека 1
//     Биография Человека 1 Биография Человека 1 Биография Человека 1
//     Биография Человека 1 Биография Человека 1 Биография Человека 1
//     `;
//   } else if (target.classList.contains('teachers__block-biography2')) {
//     showBiography.style.display = 'block';
//     showBiographyTitle.textContent = 'Человек 2';
//     showBiographyDescribe.textContent = `
//     Биография Человека 2 Биография Человека 2 Биография Человека 2
//     Биография Человека 2 Биография Человека 2 Биография Человека 2
//     Биография Человека 2 Биография Человека 2 Биография Человека 2
//     Биография Человека 2 Биография Человека 2 Биография Человека 2
//     `;
//   } else if (target.classList.contains('teachers__block-biography3')) {
//     showBiography.style.display = 'block';
//     showBiographyTitle.textContent = 'Человек 3';
//     showBiographyDescribe.textContent = `
//     Биография Человека 3 Биография Человека 3 Биография Человека 3
//     Биография Человека 3 Биография Человека 3 Биография Человека 3
//     Биография Человека 3 Биография Человека 3 Биография Человека 3
//     Биография Человека 3 Биография Человека 3 Биография Человека 3
//     `;
//   }
// });
// //Закрывать окошко биографии
// close.addEventListener('click', () => {
//   showBiography.style.display = 'none';
// });
// Бургер
const burger = document.querySelector('.burger');
const headerNavigation = document.querySelector('.header__navigation');
const closeNavigation = document.querySelector('.header__navigation-close');
const headerNavigationItems = document.querySelectorAll('.header__navigation-item');

burger.addEventListener('click', () => {
  headerNavigation.style.top = '0';
});
closeNavigation.addEventListener('click', () => {
  headerNavigation.style.top = '-100vh';
});
for (item of headerNavigationItems) {
  item.addEventListener('click', () => {
    headerNavigation.style.top = '-100vh';
  });
}
