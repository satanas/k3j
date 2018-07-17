class Sprite extends Rectangle {
  constructor(x, y, w, h) {
    super(x, y, w, h);
    this.alive = true;
  }

  render(rect) {
    throw "Not Implemented";
  }
}
