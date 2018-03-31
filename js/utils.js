/***** Набор полезных утилит для фронта *****/

var utils = {
  // Возвращает хэш без #
  getHash: function() {
    return  decodeURI(location.hash.slice(1));
  },

  // Возвращает местное время в формате "день.месяц.год часы:минуты:секунды"
  getTime: function() {
    var now = new Date;
    return now.getDate().padStart(2, '0') + '.' + 
      now.getMonth().padStart(2, '0') +  '.' + 
      (now.getFullYear() % 100).padStart(2, '0') + ' ' + 
      now.getHours().padStart(2, '0') + ':' + 
      now.getMinutes().padStart(2, '0') + ':' + 
      now.getSeconds().padStart(2, '0');
  }
};

/***** Изменение прототипов *****/

// Повторение строки amount раз
if (!String.prototype.repeat) {
  String.prototype.repeat = function(amount) {
    var result = '';
    for (var i = 0; i < amount; i++)
      result += this;
    return result;
  };
}

// Добавление запонителей в начало строки, если она недостаточно длинная
if (!String.prototype.padStart) {
  String.prototype.padStart = function(targetLength, filler) {
    filler = filler || ' ';
    var amountSpaces = targetLength - this.length;
    if (amountSpaces < 1)
      return this;
    var spaces = '';
    for (var i = 0; i < amountSpaces; i++)
      spaces += filler;
    return spaces + this;
  };
}

// Аналог одноименного метода строк для чисел
if (!Number.prototype.padStart) {
  Number.prototype.padStart = function() {
    return String.prototype.padStart.apply(String(this), arguments);
  };
}