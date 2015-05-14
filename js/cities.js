(function () {
  if (typeof Cities === "undefined") {
    window.Cities = {};
  }

  Cities.COLORS = ['b','g','w','y','p']

  Cities.Game = function () {
    this.deck = new Cities.Deck();
    this.player1 = new Cities.Player(this.deck);
    this.player2 = new Cities.Player(this.deck);
  }

})();
