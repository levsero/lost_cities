(function () {
  if (typeof Cities === "undefined") {
    window.Cities = {};
  }

  View = Cities.GameView = function ($el) {
    this.$el = $el;
    this.game = new Cities.Game();
    this.render();
    this.bindClicks();
  };

  View.prototype.bindClicks = function () {
    var that = this;
    $('.player').on("click", "li", function (event) {
      that.game.player2.playCard($(event.currentTarget).index())
      that.game.player2.drawCards();
      that.render();
    })
  };

  View.prototype.render = function () {
    this.game.render(this.$el);
  };

})();
