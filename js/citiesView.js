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
      $target = $(event.currentTarget)
      if ($target.parent().attr("id") === "player2-hand") {
        that.game.player2.playCard($target.index())
        that.game.player2.drawCards();
      } else if ($target.parent().attr("id") === "player1-hand") {
        that.game.player1.playCard($target.index())
        that.game.player1.drawCards();
      }
      that.render();
    })
  };

  View.prototype.render = function () {
    this.game.render(this.$el);
  };

})();
