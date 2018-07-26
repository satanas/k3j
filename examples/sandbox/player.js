class Player extends Sprite {
  constructor(k3j) {
    super(100, 100, 64, 64);
    this.k3j = k3j;
    this.speed = 0.25;
    this.anim = new Animator(['#0f0', '#fff'], 100);
  }

  update(dt) {
    let dx = 0, dy = 0;
    // Move left-right
    if (this.k3j.input.isPressed(KeyboardMapping.LEFT)) {
      dx = -this.speed * dt;
    } else if (this.k3j.input.isPressed(KeyboardMapping.RIGHT)) {
      dx = this.speed * dt;
    }

    // Move up-down
    if (this.k3j.input.isPressed(KeyboardMapping.UP)) {
      dy = -this.speed * dt;
    } else if (this.k3j.input.isPressed(KeyboardMapping.DOWN)) {
      dy = this.speed * dt;
    }

    // Mouse down
    if (this.k3j.input.isLeftClick()) {
      console.log('hahaha;');
    }
    this.x += dx;
    this.y += dy;
    this.color = '#f00';

    // TODO: How to call this automagically?
    this.bounds.update(this);

    // Check collisions
    this.k3j.collision.betweenGroup(this, this.k3j.groups.enemies, (player, enemy) => {
      this.anim.update(dt);
      this.color = this.anim.get();
    });
  }

  render(rect) {
    this.k3j.ctx.save();
    this.k3j.ctx.fillStyle = this.color;
    this.k3j.ctx.fillRect(rect.x, rect.y, this.w, this.h);
    this.k3j.ctx.restore();
  }
}
