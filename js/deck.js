(function () {
  if (typeof Cities === "undefined") {
    window.Cities = {};
  }

  Deck = Cities.Deck = function () {
    this.deck = Deck.createDeck();
  };

  Deck.prototype.draw = function () {
    return this.deck.pop();
  }

  Deck.createDeck = function () {
    var cards = [];
    for (var i = 0; i < Cities.COLORS.length; i++) {
      for (var j = 0; j < 10; j++) {
        cards.push(new Cities.Card(Cities.COLORS[i], j, i));
      }
    }
    return shuffle(cards);
  }

  Cities.Card = function (color, value, colorIdx) {
    this.color = color;
    this.value = value;
    this.colorIdx = colorIdx;
  }

  function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };
})();
