import './sass/main.scss';
import cards from "./card.hbs";
import menu from "./menu.json";

const refs = {
  menu: document.querySelector(".js-menu"),
  themeSwitch: document.querySelector(".theme-switch__toggle"),
  body: document.body,
};

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const theme = localStorage.getItem("theme");

refs.body.classList.add(!theme ? Theme.LIGHT : theme);

refs.themeSwitch.checked = theme === "dark-theme" ? true : false;

markupGallery(menu);

function markupGallery(data) {
  const markup = cards(data);
  refs.menu.insertAdjacentHTML("beforeend", markup);
}

refs.themeSwitch.addEventListener("change", switchHendler);

function switchHendler() {
  refs.body.classList.toggle(Theme.DARK);
  refs.body.classList.toggle(Theme.LIGHT);
  localStorage.setItem("theme", refs.body.className);
}




// v.2
// const menuContainer = document.querySelector(".js-menu");
// const cardsMarkup = createMenuMarkup(menu);

// menuContainer.insertAdjacentHTML("beforeend", cardsMarkup);

// function createMenuMarkup(menu) {
//   return cards(menu);
// }

// const Theme = {
//     LIGHT: 'light-theme',
//     DARK: 'dark-theme',
//   };
//   const swichToggle = document.querySelector('#theme-switch-toggle');
//   const bodyEl = document.body;

//   swichToggle.addEventListener('change', onSwich);

//   bodyEl.className = localStorage.getItem('Theme');
  
//   swichToggle.checked = localStorage.getItem('Theme') === Theme.DARK;
  
//   function onSwich(e) {
//     if (e.target.checked) {
//       bodyEl.classList.toggle(Theme.DARK);
//       bodyEl.classList.toggle(Theme.LIGHT);
//       localStorage.setItem('Theme', Theme.DARK);
//     } else {
//       bodyEl.classList.add(Theme.LIGHT);
//       bodyEl.classList.remove(Theme.DARK);
//       localStorage.setItem('Theme', Theme.LIGHT);
//     }
//   }
