class Scene1 extends Phaser.Scene {
  constructor() {
    super('bootGame');
  }
  preload() {
    this.load.image("player", "assets/img/main character.png");
    this.load.image("star1", "assets/img/generic star.png");

  }

  create() {
    this.add.text(20, 20, 'Loading game...');
    this.scene.start('playGame');
  }
}
