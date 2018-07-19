class Input {
  constructor() {
    this.pressed = {};
    this.events = {};

    D.body.addEventListener('keydown', (e) => {
      if (e.keyCode in this.pressed) {
        e.preventDefault();
        this.events[e.keyCode] = -1;
        this.pressed[e.keyCode] = 1;
      }
    });

    D.body.addEventListener('keyup', (e) => {
      if (e.keyCode in this.pressed) {
        e.preventDefault();
        this.events[e.keyCode] = 1;
        this.pressed[e.keyCode] = 0;
      }
    });
  }

  isPressed(c) {
    if (c instanceof Array) {
      for(let i = 0; i < c.length; i++) {
        if (!!this.pressed[c[i]]) return true;
      }
      return false;
    } else {
      return !!this.pressed[c];
    }
  }

  bind(keys) {
    keys.forEach((k) => {
      this.pressed[k] = 0;
      this.events[k] = 0;
    });
  }

  // TODO: Unbind
}
