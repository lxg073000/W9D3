class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {
    $("li").on("click", "id=0,0", Game.prototype.playMove)
  }

  makeMove($square) {

  }

  setupBoard() {
    const $div = $("<div>");
    const $ul = $("<ul>");
    const $newLi = $("<li>");
    const $newLi2 = $("<li>");
    const $newLi3 = $("<li>");
    const $newLi4 = $("<li>");
    const $newLi5 = $("<li>");
    const $newLi6 = $("<li>");
    const $newLi7 = $("<li>");
    const $newLi8 = $("<li>");
    const $newLi9 = $("<li>");

    
    // debugger;
    
    $div.append($ul);
    $ul.append($newLi);
    $ul.append($newLi2);
    $ul.append($newLi3);
    $ul.append($newLi4);
    $ul.append($newLi5);
    $ul.append($newLi6);
    $ul.append($newLi7);
    $ul.append($newLi8);
    $ul.append($newLi9);

    $newLi.attr("id", [0,0])
    $newLi2.attr("id", [0,1])
    $newLi3.attr("id", [0,2])
    $newLi4.attr("id", [1,0])
    $newLi5.attr("id", [1,1])
    $newLi6.attr("id", [1,2])
    $newLi7.attr("id", [2,0])
    $newLi8.attr("id", [2,1])
    $newLi9.attr("id", [2,2])
    // $("li").each(function(index) {
      //   console.log("hi")
      // });
      // $("li").each(() => {
        
        //   for (let i = 0; i < 3; i++) {
          //     for (let j = 0; j < 3; j++) {
            //       this.attr("id", [i, j]);
            //     }
            //   }
            // });
            this.$el.append($div);
            
          }
}

module.exports = View;
