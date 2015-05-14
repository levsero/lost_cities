(function () {
  if (typeof Cities === "undefined") {
    window.Cities = {};
  }

  Piles = Cities.Pile = function () {
    this.pile = [];
  }

  Piles.prototype.playCard = function (card) {
    this.pile.push(card.value);
  }

  Piles.prototype.canPlayCard = function (num) {
    if (this.pile.length == 0 || num > this.pile[this.pile.length]) {
      return true;
    }
    return false;
  }
})();
