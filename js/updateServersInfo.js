void function(ns) {
  /* Обновление таблицы серверов */
  function updateServersInfo() {
    var game = utils.getHash();
    ns.socket('getGameData', game);
  }

  ns.updateServersInfo = updateServersInfo;
}(monitoringNamespace);