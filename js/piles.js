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

  Piles.prototype.canPlayCard = function (num) {
    if (this.pile.length == 0 || num > this.pile[this.pile.length]) {
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
