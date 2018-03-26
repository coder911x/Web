/* Ядро для работы с DOM */

var $ = function(selector) {
  return new ExtendDOM(document.querySelectorAll(selector));
}

function ExtendDOM(elements) {
  this.elements = elements;
}

// Фильтрует выборку по тексту
ExtendDOM.prototype.ifText = function(text) {
  var filtered = [];
  this.elements.forEach(function(element) {
    if (element.textContent == text)
      filtered.push(element)
  });
  return new ExtendDOM(filtered);
};

// Удаляет у всех элементов выборки класс
ExtendDOM.prototype.removeClass = function(name) {
  this.elements.forEach(function(element) {
    element.classList.remove(name);
  });
  return this;
};

// Добавляет ко всем элементам выборки класс
ExtendDOM.prototype.addClass = function(name) {console.log(this)
  this.elements.forEach(function(element) {
    element.classList.add(name);
  });
  return this;
};