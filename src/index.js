import './sass/main.scss';
import cards from "./card.hbs";
import menu from "./menu.json";

const menuContainer = document.querySelector(".js-menu");
const cardsMarkup = createMenuMarkup(menu);

menuContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createMenuMarkup(menu) {
  return cards(menu);
}

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  const swichToggle = document.querySelector('#theme-switch-toggle');
  const bodyEl = document.querySelector('body');
  
  swichToggle.addEventListener('change', onSwich);
  
  bodyEl.setAttribute('class', localStorage.getItem('Theme'));
  
  if (localStorage.getItem('Theme') === Theme.DARK) {
    swichToggle.checked = true;
  }
  
  function onSwich(e) {
    if (e.target.checked) {
      bodyEl.classList.add(Theme.DARK);
      bodyEl.classList.remove(Theme.LIGHT);
      localStorage.setItem('Theme', Theme.DARK);
    } else {
      bodyEl.classList.add(Theme.LIGHT);
      bodyEl.classList.remove(Theme.DARK);
      localStorage.setItem('Theme', Theme.LIGHT);
    }
  }
