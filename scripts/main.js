// // cоздаем массив__________________________________________
// const initialCards = [
//   {
//     link: './images/kirill-pershin-1088404.jpg',
//     name: 'Карачаево-Черкесия'
//   },
//   {
//     link: './images/kirill-pershin-1404681-unsplash.png',
//     name: 'Гора Эльбрус'
//   },
//   {
//     link: './images/kirill-pershin-1556355-unsplash.jpg',
//     name: 'Домбай'
//   },
//   {
//     link: './images/photo-grid-baikal-2.jpg',
//     name: 'Байкал'
//   },
//   {
//     link: './images/photo-grid-sochi.jpg',
//     name: 'Сочи'
//   },
//   {
//     link: './images/place-karelia.jpg',
//     name: 'Карелия'
//   },
// ];
// const profilePopupOpenButton = document.querySelector('.profile__edit-button');
// const profTitle = document.querySelector('.profile__title');
// const profSubtitle = document.querySelector('.profile__subtitle');
// const profilePopup = document.querySelector('.popup_profile_editing');
// const profileСlosePopup = document.querySelector('.popup__close-icon_profile_edit');
// const nameInput = document.querySelector('.form__field_item_name');
// const jobInput = document.querySelector('.form__field_item_job');
// const profileFormPopup = document.querySelector('.form_profile_edit');
// // переменные для попапа добавление карточек
// const popupAddCards = document.querySelector('.popup_container_cards');
// const buttonAddCards = document.querySelector('.profile__add-button');
// const cardsClosePopup = document.querySelector('.popup__close-icon_close_cards');
// const formCardsPopup = document.querySelector('.popup__form_add_cards');
// const imputTitleCards = document.querySelector('.form__field_item_title');
// const inputLinkCards = document.querySelector('.form__field_item_link');
// const usersOnline = document.querySelector('.template-container');
// const popupClosCards = document.querySelector('.popup_content_image');
// const imageCardsmage = document.querySelector('.popup__image');
// const imagePopup = document.querySelector('.template-container');
// const buttnClosePopupCards = document.querySelector('.popup__close-icon_close_image');
// const figcaption = document.querySelector('.popup__image-caption');
// const userTemplate = document.querySelector('.elements');

// // Функция для открытия попапа 
// function openPopup (popup) {
//   popup.classList.add('popup_opened');
  
// }
// // Функция добавление информации в поля ввода профиля
// function addProfileOpenPopup () {
//   nameInput.value = profTitle.textContent;
//   jobInput.value = profSubtitle.textContent;
//   openPopup (profilePopup);
// }
// // Слушатель для открытия попапа с данными в форме 
// profilePopupOpenButton.addEventListener('click', addProfileOpenPopup );

// // Функция для закрытия попапа
// function closePopup (popup) {
//   popup.classList.remove('popup_opened');
// }

// // Слушатель для закрытия попапа с данными в форме Закрытие попапа
// profileСlosePopup.addEventListener('click', () => closePopup(profilePopup));

// // Функция для изменения донных в профиле из формы и зякрытие попапа evt.preventDefault() отменяет стандартную отправку формы 
// function submitProfileForm (evt) {
//   evt.preventDefault();
//   profTitle.textContent = nameInput.value;
//   profSubtitle.textContent = jobInput.value;
//   closePopup(profilePopup);
// }
// // Отправа формы
// profileFormPopup.addEventListener('submit', submitProfileForm);
 
//  // Слушатель открытие попапа добавление карточек
// buttonAddCards.addEventListener('click', () => openPopup (popupAddCards));
 

// //закрытие попапа добавление карточек
// cardsClosePopup.addEventListener('click', () => closePopup (popupAddCards));

// // Дефолтное создание карточек
// initialCards.forEach(function (elementInitial){
//   const newCard = createCard (elementInitial);
//   // Добавление карточек в контейнер 
//   renderCards (newCard);
// });

// // Функция создания карточки 
//   function createCard (element) {
//   // Клонируем шаблон темплэйт 
//   const userElement = userTemplate.content.querySelector('.elements__element').cloneNode(true);
//   // наполняем содержимым  
//   const newElementImage = userElement.querySelector('.elements__image');
//   const newElementText = userElement.querySelector('.elements__text');
//   newElementImage.src = element.link;
//   newElementImage.alt = element.name;
//   newElementText.textContent = element.name;
//   //Ставим лайк
//   userElement.querySelector('.elements__group').addEventListener('click', lekeCardsAdd );
//   // Удаляем карточки
//   userElement.querySelector('.elements__btn_action_del').addEventListener('click', deleteCardsAdd);
//   // обработчик открытия попапа просмотра картинок и добавление информации
//   newElementImage.addEventListener('click', addCardsContainer);
//   return userElement
// };


// // функция добавление карточки на страницу
// function renderCards (newCard) {
//   usersOnline.prepend(newCard);
// };

// //функция  открытие попапа просмотра карточек 
// function addCardsContainer (evt) {
//   openPopup (popupClosCards);
//   imageCardsmage.src = evt.target.src;
//   imageCardsmage.alt = evt.target.alt;
//   figcaption.textContent =  evt.target.alt;
// };
// // обработчик закрытия попапа просмотра картинок и добавление информации
// buttnClosePopupCards.addEventListener('click', () => closePopup(popupClosCards));

// // функция лайка
// function lekeCardsAdd (evt) {
//   evt.target.classList.toggle('elements__group_like_active');
// };
// // функция удаление карточки
// function deleteCardsAdd (evt) {
//   evt.target.closest('.elements__element').remove();
// };

// // Функция отправки формы с данными карты
// function submitAddCardFrom(evt) {
//   //переменные для полей ввода
//   const formItemLinks = inputLinkCards.value;
//   const formItemTitle = imputTitleCards.value;
//   //создаем объект с полями ввода формы
//   const element = {
//   link: formItemLinks,
//   name: formItemTitle,
//   }
//   evt.preventDefault();
//   usersOnline.prepend(createCard (element));
//   closePopup (popupAddCards);
//   formCardsPopup.reset();
// }
// // Слушатель на форму для добавления картинок и подписи
// formCardsPopup.addEventListener('submit', submitAddCardFrom);

//элементы попапа
const popupCode = document.querySelector('.popup');
const inputCode = document.querySelector('.form__field_item_name');
const buttonInput = document.querySelector('.form__button');
const popupFormCode = document.querySelector('.form_profile_edit');
const errorForm = document.querySelector('.form__field-error');

// боковое меню
const buttonMenu = document.querySelector('.nav__button');
const menuContainer = document.querySelector('.nav');
const imageElement = document.querySelector('.header__logo');
const cdElement = imageElement.getAttribute('id');


// кнопки открытия тем
const buttonTema = document.querySelectorAll('.training__button');

// кнопка бургер меню
const buttonBurger = document.querySelector('.header__button');

// секции меню
const sectionMenu = document.querySelectorAll('.main-section');
const sprintTema = document.querySelectorAll('.nav__sprint-list');
const main = document.querySelector('.main');

//загрузк страницы
function loadingPage() {
  const cd = localStorage.getItem('cd');
  if (cd === '1') {
    popupCode.classList.add('popup_opened');
  }
};

loadingPage();

// добавление неактивного класса попапу
function closePopupCode() {
  if (inputCode.value !== cdElement) {
    inputCode.value = "";
    errorForm.classList.add('form__field-error_status_error');
    inputCode.classList.add('form__field_error');
    return
  } else {
    popupCode.classList.add('popup_opened');
    localStorage.setItem('cd', JSON.stringify(1));
    inputCode.value = "";
  }
}
//форма ввода
buttonInput.addEventListener('click', closePopupCode);


// функция открытия или закрытия меню
function openedMenu() {
  menuContainer.classList.toggle('nav_opened');
}

// слуштель по кнопке открытия меню
buttonMenu.addEventListener('click', openedMenu);

// Слушатель по кнопке бургер меню 
buttonBurger.addEventListener('click', openedMenu);

//закрываем все темы добавляя класс
function closeTema() {
  sectionMenu.forEach(function(item) {
    item.classList.add('main__close-tema');
  });
}

//функция добавления или удаления неактивного класса
function addActiveClass(elemet,idItem) {
  elemet[idItem].classList.remove('main__close-tema');
}


//функция получение элемента меню
function getAlementTema(item) {
  let idItem = item.getAttribute('data-id');
  addActiveClass(sectionMenu,idItem);
}

//функция открытия нужной темы
sprintTema.forEach(function (item) {
  item.addEventListener('click', function() {
    closeTema();
    getAlementTema(item);
    openedMenu();
    location.reload(); //обнавляем страницу
  })
});

//Функция получения id кнопки
function addIdButtons(dataId) {
  localStorage.setItem('num', JSON.stringify(dataId));
}

// функция переключения тем по кнопке
function swichTema (event) {
  //получаем атрибут data у кнопки
  let dataId = event.target.dataset.id;
    if ( dataId >= sectionMenu.length -1) {
      dataId = 0;
      closeTema();
      addActiveClass(sectionMenu,dataId);
      addIdButtons(dataId);
      location.reload(); //обнавляем страницу
      return
    }
    closeTema();
    dataId++;
    addActiveClass(sectionMenu,dataId);
    addIdButtons(dataId);
    location.reload(); //обнавляем страницу
}

// Слушатель по кнопкам переключения тем
buttonTema.forEach(function (item) {
  item.addEventListener('click', swichTema);
});

//прокрутка страницы наверх при обновлении страницы
window.onbeforeunload = function () {
  window.scrollTo(0,0);
};
//--------------------------------------------------------
// При перезагрузке страницы оставаться на тойже теме
//записываем и получаем в хранилище класс 
localStorage.setItem('close', 'main__close-tema')
const close = localStorage.getItem('close');

//получаем из хранил. id  раздела меню
let number = localStorage.getItem('num');
number = JSON.parse(number);


// получаем id меню и записываем в хранилище
function showActiveItem(event) {
  let dId = event.target.dataset.id;
  addIdButtons(dId);
};
//кликая по кнопке меню получаем номер id
sprintTema.forEach(function(item) {
  item.addEventListener('click', showActiveItem);
})

// при перезагрузке оставляем страницу или первый раз загружаем первую тему
function showTema() {
  if (number == null) {
    sectionMenu[0].classList.remove(close);
    return
  } else {
    sectionMenu[number].classList.remove(close);
  }
}

showTema();

