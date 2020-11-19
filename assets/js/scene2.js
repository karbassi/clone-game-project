class Scene2 extends Phaser.Scene {
  constructor() {
    super('playGame');
  }

  create() {
    this.player = this.add.image(
      config.width / 3 - 50,
      config.height / 1.3,
      'player');
    this.player.setScale(0.02);

    this.add.text(20, 20, 'clone', { font: '25px Arial', fill: 'white' });
  }
}
