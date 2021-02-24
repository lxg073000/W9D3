class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    const $div = $("<div>");
    const $ul = $("<ul>");
    const newLi = $("<li>");
    const newLi2 = $("<li>");
    const newLi3 = $("<li>");
    const newLi4 = $("<li>");
    const newLi5 = $("<li>");
    const newLi6 = $("<li>");
    const newLi7 = $("<li>");
    const newLi8 = $("<li>");
    const newLi9 = $("<li>");
    // debugger;
    newLi.append("words");
    $div.append($ul);
    $ul.append(newLi);
    $ul.append(newLi2);
    $ul.append(newLi3);
    $ul.append(newLi4);
    $ul.append(newLi5);
    $ul.append(newLi6);
    $ul.append(newLi7);
    $ul.append(newLi8);
    $ul.append(newLi9);
    this.$el.append($ul);
  }
}

module.exports = View;
