(function () {
  if (typeof Cities === "undefined") {
    window.Cities = {};
  }

  Cities.COLORS = ['b','g','w','y','p']

  Game = Cities.Game = function () {
    this.deck = new Cities.Deck();
    this.player1 = new Cities.Player(this.deck);
    this.player2 = new Cities.Player(this.deck);
  }

  Game.prototype.render = function ($el) {
    var $p1 = $el.find("#player1");
    var $p2 = $el.find("#player2");
    var $cards = $el.find("#cards");
    $p1.empty();
    $p2.empty();
    $p1.append(this.player1.render())
    $p2.append(this.player2.render())
    $cards.append("Cards Remaining " + this.deck.deck.length)
  }
})();
