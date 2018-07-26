class Scene {
  constructor(k3j) {
    this.k3j = k3j;
  }

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
    this.deltaTime = (this.startTime !== 0) ? Date.now() - this.startTime : 0;

    // Update Scene
    this.update();

    this.startTime = Date.now();

    if (!this.exitFlag) {
      this.k3j.raf(this.loop.bind(this));
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
