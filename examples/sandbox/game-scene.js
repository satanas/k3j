class GameScene extends Scene {
  constructor(k3j) {
    super(k3j);
    this.player = new Player(k3j);
    this.k3j.groups.enemies = new Group();
    this.k3j.groups.enemies.add(new Enemy(k3j));
  }

  update() {
    this.k3j.camera.clear();

    // Update stuff
    this.k3j.groups.enemies.update();
    this.player.update(this.deltaTime);

    // Render stuff
    this.k3j.camera.render(this.k3j.groups.enemies);
    this.k3j.camera.render(this.player);
  }
}