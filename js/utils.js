/* Набор полезных утилит для фронта */

var utils = {
  // Возвращает хэш без #
  getHash: function() {
    return  decodeURI(location.hash.slice(1));
  }
};