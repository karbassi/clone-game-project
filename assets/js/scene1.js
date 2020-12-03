class Scene1 extends Phaser.Scene {
  constructor() {
    super('bootGame');
  }

  preload() {
    this.load.image('background', 'assets/img/background.png');
    //this.load.image('star', 'assets/img/wild card star.png');

   this.load.spritesheet('player', 'assets/spritesheets/player.png', {
      frameWidth:65,
      frameHeight: 68,
    });
    this.load.spritesheet('star', 'assets/spritesheets/star.png', {
      frameWidth: 67,
      frameHeight: 68,
    })
    this.load.spritesheet('clone', 'assets/spritesheets/clone.png', {
      frameWidth: 65,
      frameHeight: 68,
    })

    this.load.spritesheet("collision", "assets/spritesheets/collision.png",{
      frameWidth: 67,
      frameHeight: 67,
    })
    this.load.spritesheet("explosion", "assets/spritesheets/explosion.png",{
      frameWidth: 67,
      frameHeight: 67,
    })

    this.load.bitmapFont("gameFont", "assets/img/font/font.png", "assets/img/font/font.fnt");
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
    this.anims.create({
      key: 'clone.anim',
      frames: this.anims.generateFrameNumbers('clone'),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'collide',
      frames: this.anims.generateFrameNumbers('collision'),
      frameRate: 15,
      repeat: 0,
      hideOnComplete: true
    });
    this.anims.create({
      key: 'explode',
      frames: this.anims.generateFrameNumbers('explosion'),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true
    });


  }
}
