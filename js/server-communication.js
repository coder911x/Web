/**** Тут всё, что касается коммуникации клиента с сервером  ****/
void function(ns) {
  var router = ns.router;

  ns.socket = events('wss://game-monitoring-server.herokuapp.com', {
    connection: function() {
      return ['getGamesList'];
    },
    recieveGameList: function(gamesList) {
      console.log(gamesList);
    },
    recieveGameData: function(servers) {
      console.log(servers);
    },
    error(message) {
      console.log(message);
    }
  });

  // Первичная маршрутизация
  router();
  // Обрабатываем изменение машрута
  window.onhashchange = router;
  
}(monitoringNamespace);