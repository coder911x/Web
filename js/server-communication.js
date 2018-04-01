/**** Тут всё, что касается коммуникации клиента с сервером  ****/
void function(ns) {
  var
    router = ns.router,
    getTime = utils.getTime,
    escape = utils.escape; // CD

  ns.socket = events(ns.serverURL, {
    connection: function() {
      if (DEBUG)
        console.log('[' + getTime() + '] Open conntection');
    },
    close: function() {
      if (DEBUG)
        console.log('[' + getTime() + '] Close conntection');
      ns.socket.reconnect();
    },
    ping: function() {
      if (DEBUG)
        console.log('[' + getTime() + '] Recieved a ping');
    },
    recieveGameData: function(servers) {
      console.log(servers);
      var markup = '';
      servers.forEach(function(server) {
        if (!server.online) return;
        markup += mUtils.createRowMarkup(server);
      });
      $('.servers-list').html(markup);
    },
    error: function(message) {
      console.log('[Error]\n', message, '\n[END]');
    }
  });

  // Первичная маршрутизация
  router();
  // Обрабатываем изменение машрута
  window.onhashchange = router;
  
}(monitoringNamespace);