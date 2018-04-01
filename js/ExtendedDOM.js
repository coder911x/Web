/**
 * Ядро для работы с DOM
 * 
 * Зависимости:
 * > escape(utils.js) - экранирование HTML
 */ 
var $ = function(selector) {
  return new ExtendedDOM(
    selector instanceof Node
      ? [selector]
      : document.querySelectorAll(selector)
  );
}

function ExtendedDOM(elements) {
  this.elements = elements;
}

// Фильтрует выборку по тексту
ExtendedDOM.prototype.ifText = function(text) {
  var filtered = [];
  Array.prototype.forEach.call(this.elements, function(element) {
    if (element.textContent == text)
      filtered.push(element)
  });
  return new ExtendedDOM(filtered);
};

// Удаляет у всех элементов выборки класс
ExtendedDOM.prototype.removeClass = function(name) {
  Array.prototype.forEach.call(this.elements, function(element) {
    element.classList.remove(name);
  });
  return this;
};

// Добавляет ко всем элементам выборки класс
ExtendedDOM.prototype.addClass = function(name) {
  Array.prototype.forEach.call(this.elements, function(element) {
    element.classList.add(name);
  });
  return this;
};

/*
  Функция установки всем элементам выборки внутренней разметки,
  если передаётся 1 параметр. Если же аргументов нет, то возвращается
  разметка первого элемента выборки, если таковой имеется
*/
ExtendedDOM.prototype.html = function(markup) {
  if (markup === undefined)
    return this.elements[0]
      ? this.elements[0].innerHTML
      : undefined;
  Array.prototype.forEach.call(this.elements, function(element) {
    element.innerHTML = markup;
  });
  return this;
};

/*
  Функция установки всем элементам выборки внутреннего текста,
  если передаётся 1 параметр. Если же аргументов нет, то возвращается
  текстовое содержимое первого элемента выборки, если таковой имеется
*/
ExtendedDOM.prototype.text = function(text) {
  if (text === undefined)
    return this.elements[0]
      ? this.elements[0].textContent
      : undefined;
  Array.prototype.forEach.call(this.elements, function(element) {
    element.textContent = utils.escape(text);
  });
  return this;
};