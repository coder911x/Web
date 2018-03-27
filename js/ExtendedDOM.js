/* Ядро для работы с DOM */

var $ = function(selector) {
  return new ExtendedDOM(
    selector instanceof Node
      ? selector
      : document.querySelectorAll(selector)
  );
}

function ExtendedDOM(elements) {
  this.elements = elements;
}

// Фильтрует выборку по тексту
ExtendedDOM.prototype.ifText = function(text) {
  var filtered = [];
  this.elements.forEach(function(element) {
    if (element.textContent == text)
      filtered.push(element)
  });
  return new ExtendedDOM(filtered);
};

// Удаляет у всех элементов выборки класс
ExtendedDOM.prototype.removeClass = function(name) {
  this.elements.forEach(function(element) {
    element.classList.remove(name);
  });
  return this;
};

// Добавляет ко всем элементам выборки класс
ExtendedDOM.prototype.addClass = function(name) {
  this.elements.forEach(function(element) {
    element.classList.add(name);
  });
  return this;
};