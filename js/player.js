(function () {
  if (typeof Cities === "undefined") {
    window.Cities = {};
  }

  Player = Cities.Player = function (game, deck) {
    this.game = game;
    this.deck = deck;
    this.hand = [];
    this.piles = [];
    this.drawCards();
    this.initPiles();
  };

  Player.prototype.initPiles = function () {
    for(var i = 0; i < Cities.COLORS.length; i++) {
      this.piles.push(new Cities.Pile());
    }
  }

  Player.prototype.drawCards = function () {
    while (this.hand.length < 7) {
      this.hand.push(this.deck.draw());
    }
  }

  Player.prototype.playCard = function (idx) {
    var card = this.hand[idx]
    if (!this.piles[card.colorIdx].canPlayCard(card)) {
      return false
    }
    this.piles[card.colorIdx].addCard(card);
    this.hand.splice(idx, 1);
    return true
  }

  Player.prototype.discardCard = function (idx) {
    var card = this.hand[idx];
    this.game.discardCard(card);
    this.hand.splice(idx, 1);
  }

  Player.prototype.render = function ($el) {
    $el.html("Hand:")
    for (var i = 0; i < this.hand.length; i++) {
      $el.append('<li class="' + this.hand[i].color + '"> ' +
        this.hand[i].value + "</li>");
    }
    return $el;
  }

  Player.prototype.renderPiles = function ($el) {
    $el.html("Piles:");
    for (var i = 0; i < this.piles.length; i++) {
      $el.append('<li class="' + Cities.COLORS[i] + '"> ' +
        this.piles[i].render());
    }
    return $el.html();
  }
})();
