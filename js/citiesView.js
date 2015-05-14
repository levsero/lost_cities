(function () {
  if (typeof Cities === "undefined") {
    window.Cities = {};
  }

  View = Cities.GameView = function ($el) {
    this.$el = $el;
    this.game = new Cities.Game();
    this.render();
  };

  View.prototype.render = function () {
    this.game.render(this.$el);
  };

})();
