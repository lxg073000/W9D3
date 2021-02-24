const View = require("./ttt-view");
const Game = require("../solution/game");

$(() => {
  const game = new Game();
  const $ele = $(".ttt");
  new View(game, $ele);
});
