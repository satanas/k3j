class Camera {
  constructor(width, height, worldWidth, worldHeight) {
    this.width = width;
    this.height = height;
    this.offsetX = 0;
    this.offsetY = 0;
    this.target = 0;

    this.setWorldSize(worldWidth, worldHeight);
  }

  // Set world size
  setWorldSize(w, h) {
    this.worldWidth = w;
    this.worldHeight = h;
  }

  // Set target. This target will be followed by the Camera
  setTarget(t) {
    this.target = t;
  }

  // Transform point coordinates
  transformVector(v) {
    return new Vector(v.x - this.offsetX, v.y - this.offsetY);
  }

  // Indicates if the object is inside the viewport.
  // Used to avoid rendering objects outside the view
  inView(obj) {
    let r = Rect.offset(obj, this.offsetX, this.offsetY);
    return ((r.bounds.right >= 0 && r.bounds.right <= this.width) || (r.x >= 0 && r.x <= this.width)) &&
           ((r.bounds.bottom >= 0 && r.bounds.bottom <= this.height) || (r.y >= 0 && r.y <= this.height));
  }

  update() {
    if (!this.target) return;

    let tx = 0,
        ty = 0,
        midWidth = this.width / 2,
        midHeight = this.height / 2;

    // Update offset according the target.

    // If world width is smaller than viewport width, then tx = target.x so offset x is zero
    if (this.worldWidth <= this.width) {
      tx = this.target.x;
    // If target.x is before the middle of the viewport, offset x is zero
    } else if (this.target.x <= midWidth) {
      tx = this.target.x;
    // If target x is after the middle of the viewport and still not in the end of the world,
    // offset x is the middle viewport
    } else if ((this.target.x > midWidth) && (this.target.x + midWidth <= this.worldWidth)) {
      tx = midWidth;
    // If target x is after the middle of the viewport and reached the end of the world,
    // offset x is the difference between the world width and the target.x
    } else if ((this.target.x > midWidth) && (this.target.x + midWidth > this.worldWidth)) {
      tx = this.width - (this.worldWidth - this.target.x);
    }

    if (this.worldHeight <= this.height) {
      ty = this.target.y;
    } else if (this.target.y <= midHeight) {
      ty = this.target.y;
    } else if ((this.target.y > midHeight) && (this.target.y + midHeight <= this.worldHeight)) {
      ty = midHeight;
    } else if ((this.target.y > midHeight) && (this.target.y + midHeight > this.worldHeight)) {
      ty = this.height - (this.worldHeight - this.target.y);
    }

    this.offsetX = this.target.x - tx;
    this.offsetY = this.target.y - ty;
  }

  render(obj) {
    if (!obj) return;
    if (!(obj instanceof Array)) obj = [obj];

    obj.forEach((o) => {
      if (this.inView(o)) {
        o.render(Rect.offset(o, this.offsetX, this.offsetY));
      }
    });
  }
}
