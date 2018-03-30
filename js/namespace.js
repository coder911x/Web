var monitoringNamespace = {
  // Список поддерживаемых игр
  games: [
    "Counter-Strike: Source",
    "Counter-Strike 1.6",
    "Garry`s Mod",
    "Half-Life 1 Deathmatch",
    "Counter-Strike: Condition Zero",
    "Counter-Strike: Global Offensive"
  ],
  // Маршрутизирующая функция
  router: null,
  // Обновление таблицы серверов
  updateServersInfo: null,
  // Сокет для общения с сервером
  socket: null
};