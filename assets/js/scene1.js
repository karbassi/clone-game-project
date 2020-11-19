class Scene1 extends Phaser.Scene {
  constructor() {
    super('bootGame');
  }
  preload() {
    this.load.image("player", "assets/img/main character.png");
  }

  create() {
    this.add.text(20, 20, 'Loading game...');
    this.scene.start('playGame');
  }
}
