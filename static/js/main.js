"use strict";

var ads = [{
  name: "Нина Петровна",
  time: "Час назад",
  message: "Не могу выйти из дома, прошу помочь. Мне нужно купить 2 кг гречки и 150 рулонов туалетной бумаги, а также погулять с собакой.",
  address: "Москва, м. Октбярьское поле, ул. Маршала Бирюзова, д.23",
  phone: "+7 (901) 123-45-67"
}, {
  name: "Лариса Ивановна",
  time: "Сегодня",
  message: "Лично я в карантине прекрасно себя чувствую. А у Лары везде моторчики, она тетрис не может собрать, ей всё слишком медленно. Она с утра читает новости, потом бегает по квартире с криком «Мы все умрём». Я пробовал бегать и кричать вместе с ней. Она сказала, это никакая не поддержка.",
  address: "Москва, м. Войковская, ул. Советская, д.1",
  phone: "+7 (901) 123-45-67"
}, {
  name: "Владимир Владимирович",
  time: "Вчера",
  message: "Мне ничего не нужно, не приезжайте, пожалуйста.",
  address: "Москва, Тверской, Красная площадь, 1",
  phone: "+7 (901) 123-45-67"
}, {
  name: "Нина Петровна",
  time: "Час назад",
  message: "Не могу выйти из дома, прошу помочь. Мне нужно купить 2 кг гречки и 150 рулонов туалетной бумаги, а также погулять с собакой.",
  address: "Москва, м. Октбярьское поле, ул. Маршала Бирюзова, д.23",
  phone: "+7 (901) 123-45-67"
}, {
  name: "Лариса Ивановна",
  time: "Сегодня",
  message: "Лично я в карантине прекрасно себя чувствую. А у Лары везде моторчики, она тетрис не может собрать, ей всё слишком медленно. Она с утра читает новости, потом бегает по квартире с криком «Мы все умрём». Я пробовал бегать и кричать вместе с ней. Она сказала, это никакая не поддержка.",
  address: "Москва, м. Войковская, ул. Советская, д.1",
  phone: "+7 (901) 123-45-67"
}, {
  name: "Владимир Владимирович",
  time: "Вчера",
  message: "Мне ничего не нужно, не приезжайте, пожалуйста.",
  address: "Москва, Тверской, Красная площадь, 1",
  phone: "+7 (901) 123-45-67"
}];
$(document).ready(function () {
  svg4everybody({});

  function getSelect() {
    var select = function select() {
      var selectCurrent = document.querySelectorAll('.select__header'),
          selectItem = document.querySelectorAll('.select__item');
      console.log(selectCurrent);
      selectCurrent.forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.currentTarget.parentElement.classList.toggle('is-open');
        });
      });
      selectItem.forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.currentTarget.closest('.select').querySelector('.select__current').innerHTML = e.currentTarget.innerHTML;
          e.currentTarget.closest('.select').classList.remove('is-open');
        });
      });
    };

    select();
  }

  function getAdverts() {
    var template = document.querySelector('template').content;
    var fragment = document.createDocumentFragment();
    var containerAdvert = document.querySelector('.advert__box');

    function getAdvert(array) {
      var advertItem = template.cloneNode(true);
      advertItem.querySelector('.advert__name').textContent = array.name;
      advertItem.querySelector('.advert__time').textContent = array.time;
      advertItem.querySelector('.advert__text').textContent = array.message;
      advertItem.querySelector('.advert__location').textContent = array.address;
      advertItem.querySelector('.advert__phone').textContent = array.phone;
      advertItem.querySelector('.advert__phone').href = 'tel:' + array.phone;
      return advertItem;
    }

    for (var i = 0; i < ads.length; i++) {
      fragment.appendChild(getAdvert(ads[i]));
    }

    containerAdvert.appendChild(fragment);
  }

  getSelect();
  getAdverts();
}); // Полифилы
// forEach IE 11

if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');

  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
} // closest IE 11


(function () {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;else node = node.parentElement;
      }

      return null;
    };
  }
})(); // matches IE 11


(function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
  }
})(); //Array.form IE 11


if (!Array.from) {
  Array.from = function (object) {
    'use strict';

    return [].slice.call(object);
  };
}