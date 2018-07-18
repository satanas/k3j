class Scene {
  constructor() {
    reset();
  }

  reset() {
    this.exitFlag = false;
    this.startTime = 0;
    this.goTo = null;
    $.time.delta = 0;
  }

  start() {
    this.reset();
    this.init();
    this.loop();
  }

  // TODO: Implement fadeOut method

  loop() {
    // Calculate elapsed time
    $.time.delta = (this.startTime !== 0) ? now() - this.startTime : 0;

    // Update Scene
    this.update();

    this.startTime = now();

    if (!this.exitFlag) {
      $.raf(this.loop.bind(this));
    } else {
      return;
    }
  }

  exit() {
    this.exitFlag = true;
  }
}
