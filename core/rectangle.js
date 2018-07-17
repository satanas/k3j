class Rectangle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.bounds = new Bounds(this);
  }

  update() {
    this.bounds.update();
  }

  center() {
    return new Vector(this.x + (this.w / 2), this.y + (this.h / 2));
  }

  // Returns a new rect, offset by offsetX and offsetY
  static offset(rect, offsetX, offsetY) {
    return new Rect(rect.x - offsetX, rect.y - offsetY, rect.w, rect.h);
  }

  // TODO
  // fromGrid

  // TODO
  // toGrid
}

class Bounds {
  constructor(rect) {
    this.rect = rect;
  }

  update() {
    this.bottom = this.rect.y + this.rect.h;
    this.top = this.rect.y;
    this.left = this.rect.x;
    this.right = this.rect.x + this.rect.w;
  }
}
