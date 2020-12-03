class Collision extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'explosion');
    scene.add.existing(this);
    this.play('explode');
  }
}
