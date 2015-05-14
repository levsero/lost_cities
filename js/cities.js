(function () {
  if (typeof Cities === "undefined") {
    window.Cities = {};
  }

  Cities.COLORS = ['b','g','w','y','p']

  Game = Cities.Game = function () {
    this.deck = new Cities.Deck();
    this.player1 = new Cities.Player(this, this.deck);
    this.player2 = new Cities.Player(this, this.deck);
    this.discardPiles = [];
    this.initDiscardPiles();
  };

  Game.prototype.initDiscardPiles = function () {
    for(var i = 0; i < Cities.COLORS.length; i++) {
      this.discardPiles.push(new Cities.Pile());
    }
  };

  Game.prototype.discardCard = function (card) {
    this.discardPiles[card.colorIdx].addCard(card);
  };

  Game.prototype.renderDiscardPiles = function ($el) {
    $el.empty();
    for (var i = 0; i < this.discardPiles.length; i++) {
      $el.append("<li>" + Cities.COLORS[i] + " " +
        this.discardPiles[i].render());
    }
    return $el;
  };

  Game.prototype.render = function ($el) {
    var $p1 = $el.find("#player1-hand");
    var $p2 = $el.find("#player2-hand");
    var $p1Piles = $el.find("#player1-piles");
    var $p2Piles = $el.find("#player2-piles");
    var $discardPiles = $el.find("#discard-piles");

    var $cards = $el.find("#cards");
    $cards.empty();
    $p1.empty();
    $p2.empty();
    this.player1.render($p1);
    this.player2.render($p2);
    this.renderDiscardPiles($discardPiles);
    $p1Piles.html(this.player1.renderPiles($p1Piles));
    $p2Piles.html(this.player2.renderPiles($p2Piles));
    $cards.append("Cards Remaining " + this.deck.deck.length)
  }
})();
