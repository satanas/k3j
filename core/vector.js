/**
 * A class to represent a 2D vector.
 **/
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // TODO: configure grid size
  toGrid() {
    return new Vector(floor(this.x / GRID_SIZE), floor(this.y, GRID_SIZE));
  }
}
