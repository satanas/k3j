class Enemy extends Sprite {
  constructor(k3j) {
    super(200, 200, 64, 64);
    this.k3j = k3j;
  }

  render(rect) {
    this.k3j.ctx.save();
    this.k3j.ctx.fillStyle = "#00F";
    this.k3j.ctx.fillRect(rect.x, rect.y, this.w, this.h);
    this.k3j.ctx.restore();
  }
}
