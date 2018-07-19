class Scene {
  reset() {
    this.exitFlag = false;
    this.startTime = 0;
    this.goTo = null;
    this.deltaTime = 0;
  }

  start() {
    this.reset();
    this.setup();
    this.loop();
  }

  // TODO: Implement fadeOut method

  loop() {
    // Calculate elapsed time
    this.deltaTime = (this.startTime !== 0) ? now() - this.startTime : 0;

    // Update Scene
    this.update();

    this.startTime = now();

    if (!this.exitFlag) {
      raf(this.loop.bind(this));
    } else {
      return;
    }
  }

  exit() {
    this.exitFlag = true;
  }

  // To be override by child class
  setup() {
  }

  // To be override by child class
  update() {
  }
}
