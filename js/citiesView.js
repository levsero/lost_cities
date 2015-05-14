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
      if ($target.parent().attr("id") === "player2-hand" &&
            that.game.turn === 2) {
        if(that.game.player2.playCard($target.index())){
          that.game.endTurn();
          that.game.player1.drawCards();
        }
        that.game.player2.drawCards();
      } else if ($target.parent().attr("id") === "player1-hand"  &&
            that.game.turn === 1) {
        if (that.game.player1.playCard($target.index())) {
          that.game.endTurn();
          that.game.player1.drawCards();
        }
      }
      that.render();
    })

    $('.player').bind("contextmenu", "li", function(event){
      event.preventDefault();
      $target = $(event.target);
      that.discardCard($target)
    });

    // TODO this is not working
    $('.player').bind("taphold", function(event){
      event.preventDefault();
      $target = $(event.target);
      that.discardCard($target)
    });
  };

  View.prototype.discardCard = function ($target) {
    if ($target.parent().attr("id") === "player2-hand" &&
    this.game.turn === 2) {
      this.game.player2.discardCard($target.index())
      this.game.player2.drawCards();
      this.game.endTurn();
    } else if ($target.parent().attr("id") === "player1-hand" &&
    this.game.turn === 1) {
      this.game.player1.discardCard($target.index())
      this.game.player1.drawCards();
      this.game.endTurn();
    }
    this.render();
  };

  View.prototype.render = function () {
    this.game.render(this.$el);
  };
})();
