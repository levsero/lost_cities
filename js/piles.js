(function () {
  if (typeof Cities === "undefined") {
    window.Cities = {};
  }

  Piles = Cities.Pile = function () {
    this.pile = [];
  }

  Piles.prototype.addCard = function (card) {
    this.pile.push(card);
  }

  Piles.prototype.canPlayCard = function (card) {
    if (this.pile.length == 0 ||
          card.value > this.pile[this.pile.length - 1].value) {
      return true;
    }
    return false;
  }

  Piles.prototype.render = function () {
    string = "";
    for (var i = 0; i < this.pile.length; i++ ){
      string += (this.pile[i].value + " ");
    }
    return string.trim();
  };
})();
