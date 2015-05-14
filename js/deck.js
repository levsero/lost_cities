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
    var colors = ['b','g','w','y','p']
    var cards = [];
    for (var i = 0; i < colors.length; i++) {
      for (var j = 0; j < 10; j++) {
        cards.push([colors[i], j]);
      }
    }
    return shuffle(cards);
  }

  function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

})();
