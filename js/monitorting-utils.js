/* Набор полезных утилит конкретно для этого сайта */
/* Зависимость: escape(utils.js), getQueryString(utils.js) */
void function() {
  var escape = utils.escape;

  // Возвращает разметку атрибута, если значение не пусто
  function attr(name, value) {
    return value
      ? name + '="' + value + '"'
      : '';
  }

  // Возвращает разметку одной ячейки таблицы
  function getTableDataMarkup(content, customClass, href) {
    return '<td ' + attr('class', customClass) + ' ' + attr('title', content) + '>' +
        (href ? '<a href="#server' + utils.getQueryString(href) + '">' : '')
          + content + 
        (href ? '</a>' : '') +
      '</td>';
  }

  window.mUtils = {
    // Возвращает разметку ряда таблицы
    createRowMarkup: function(server) {
      var hrefData = {
        ip: server.ip,
        port: server.port,
        game: utils.getHash()
      };
      return '<tr>' +
        getTableDataMarkup(escape(server.name), 'name', hrefData) +
        getTableDataMarkup(escape(server.map), 'map') +
        getTableDataMarkup(
          (server.players + server.bots.length) + '/' + server.maxPlayers,
          'slots'
        ) +
        getTableDataMarkup(escape(server.ip + ':' + server.port), 'scoket') +
      '</tr>'
    }
  };
}();