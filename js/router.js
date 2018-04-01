/**** Роутинг ****/
void function(ns) {
  var
    updateServersInfo = ns.updateServersInfo,
    games = ns.games;

  function router() {
    if (!location.hash)
      return location.hash = "#home";

    var route = utils.getHash();
    
    $('.menu a').removeClass('active');
    $('.menu a[href="#' + route + '"]').addClass('active');

    if (route == 'home') {
      views.show('home');
    } else if (games.indexOf(route) > -1) {
      ns.socket('getGameData', route);
      $('#game-select').val(route);
      views.show('servers');
    } else {
      views.show('404');
    }
  }

  /* Объект представлений (страниц) сайта */
  var views = {
    pages: ['home', 'servers', '404'],
    show: function(target) {
      $('.page-' + this.pages.join(', .page-')).addClass('hidden');
      $('.page-' + target).removeClass('hidden');
      ~['home', '404'].indexOf(target)
        ? $('.content-container').addClass('centeredContent')
        : $('.content-container').removeClass('centeredContent');
    }
  };

  ns.router = router;
}(monitoringNamespace);