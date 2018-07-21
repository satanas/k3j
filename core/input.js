const KeyboardActionMapping = {
  'ENTER': 13,
  'KEY_A': 65,
  'LEFT': 37,
  'RIGHT': 39,
  'UP': 38,
  'DOWN': 40,
};

class Input {
  constructor() {
    this.pressed = {};
    this.events = {};
    this._keyDownHandler = null;
    this._keyUpHandler = null;
  }

  static build(targetElement) {
    var input = new Input();
    input.addEventListeners(targetElement);
    input.bind(Object.values(KeyboardActionMapping));
    return input;
  }

  keyUp(e) {
    if (e.keyCode in this.pressed) {
      e.preventDefault();
      this.events[e.keyCode] = -1;
      this.pressed[e.keyCode] = 1;
    }
  }

  keyDown(e) {
    if (e.keyCode in this.pressed) {
      e.preventDefault();
      this.events[e.keyCode] = 1;
      this.pressed[e.keyCode] = 0;
    }
  }

  addEventListeners(targetElement) {
    this._keyDownHandler = this.keyDown.bind(this);
    targetElement.addEventListener('keydown', this._keyDownHandler);

    this._keyUpHandler = this.keyUp.bind(this);
    targetElement.addEventListener('keyup', this._keyUpHandler);
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
