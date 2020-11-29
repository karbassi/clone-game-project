class Scene1 extends Phaser.Scene {
  constructor() {
    super('bootGame');
  }

  preload() {
    this.load.image('background', 'assets/img/background.png');
    this.load.spritesheet('player', 'assets/spritesheets/player.png', {
      frameWidth:16,
      frameHeight: 16,
    });
    this.load.spritesheet('ship', 'assets/spritesheets/ship.png', {
      frameWidth: 16,
      frameHeight: 16,
    });
  }
  create() {
    this.add.text(20, 20, 'clone');
    this.scene.start('playGame');

    this.anims.create({
      key: 'player.anim',
      frames: this.anims.generateFrameNumbers('player'),
      frameRate: 5,
      repeat: -1,
    });
    //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  }
}
