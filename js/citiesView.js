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

    $('.player').bind("taphold", "li", function(event){
      event.preventDefault();
      $target = $(event.target);
      that.discardCard($target)
    });
  };

  View.prototype.discardCard($target) {
    if ($target.parent().attr("id") === "player2-hand" &&
          that.game.turn === 2) {
      that.game.player2.discardCard($target.index())
      that.game.player2.drawCards();
      that.game.endTurn();
    } else if ($target.parent().attr("id") === "player1-hand" &&
          that.game.turn === 1) {
      that.game.player1.discardCard($target.index())
      that.game.player1.drawCards();
      that.game.endTurn();
    }
    this.render();
  };

  View.prototype.render = function () {
    this.game.render(this.$el);
  };

})();
