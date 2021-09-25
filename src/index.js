import menuTpl from './teamplates/menu-card.hbs'
import menu from './menu.json'
import './css/styles.css'

const paletterColors = document.querySelector('.js-menu')
const cardsMarkUp = creatColorCardsMakup(menu)

paletterColors.insertAdjacentHTML('beforeend', cardsMarkUp)

function creatColorCardsMakup(menu) {
  return menu.map(menuTpl).join('')
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
}
// inputRef
const inputThem = document.querySelector('#theme-switch-toggle')

// Слушатель события на Кнопку чек
inputThem.addEventListener('change', changeInput)

// Проверка переключателя
function changeInput(event) {
  if (event.currentTarget.checked) {
    checkedInput()
  } else {
    notCheckedInput()
  }
}
//Функция Установка темного заднего фона
function checkedInput() {
  document.body.classList.add(Theme.DARK)
  document.body.classList.remove(Theme.LIGHT)
  localStorage.setItem('theme', Theme.DARK)
  inputThem.checked = true
}

// Функция Установка светлого заднего фона
function notCheckedInput() {
  document.body.classList.add(Theme.LIGHT)
  document.body.classList.remove(Theme.DARK)
  localStorage.setItem('theme', Theme.LIGHT)
  inputThem.checked = false
}

// Фон при перезагрузки оставатьс таким как ечть
function currentTheme() {
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme === Theme.LIGHT || savedTheme === null) {
    notCheckedInput()
    return
  }

  if (savedTheme === Theme.DARK) {
    checkedInput()
    return
  }
}

currentTheme()
