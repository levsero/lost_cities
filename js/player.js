(function () {
  if (typeof Cities === "undefined") {
    window.Cities = {};
  }

  Player = Cities.Player = function (deck) {
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
    if (this.piles[card.colorIdx].canPlayCard(card)) {
      this.piles[card.colorIdx].playCard(card);
      this.hand.splice(idx, 1);
    }
  }

  Player.prototype.render = function () {
    $el = $("<ul>");
    for (var i = 0; i < this.hand.length; i++) {
      $el.append("<li>" + this.hand[i].color + " " +
        this.hand[i].value + "</li>");
    }
    return $el;
  }
})();
