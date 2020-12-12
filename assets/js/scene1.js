// this scene is used to load up all game assets

class Scene1 extends Phaser.Scene {
  constructor() {
    super('bootGame');
  }

  preload() {
    // load game background
    this.load.image('background', 'assets/img/background.png');

    // load game play assets
    this.load.image('star2', 'assets/img/wild card star.png');
    this.load.spritesheet('player', 'assets/spritesheets/player01.png', {
      frameWidth: 65,
      frameHeight: 68,
    });
    this.load.spritesheet('star', 'assets/spritesheets/star.png', {
      frameWidth: 67,
      frameHeight: 68,
    });
    this.load.spritesheet('clone1', 'assets/spritesheets/clone01.png', {
      frameWidth: 65,
      frameHeight: 68,
    });

    // load sprite animation for picking up a star
    this.load.spritesheet('collision', 'assets/spritesheets/collision.png', {
      frameWidth: 67,
      frameHeight: 67,
    });

    // load sprite animation for player collision with clone
    this.load.spritesheet('explosion', 'assets/spritesheets/explosion.png', {
      frameWidth: 67,
      frameHeight: 67,
    });

    // load audio files
    // load audio files for entire game play
    this.load.audio('gamemusic', 'assets/sounds/gameplay.mp3');

    // load audio files for star pick up for points.
    this.load.audio('starpickup', 'assets/sounds/starpickup.wav');

    // load audio files for clone collision for points
    this.load.audio('collide', 'assets/sounds/collision.mp3');
  }

  create() {
    this.scene.start('playGame');

    // create animations for player
    this.anims.create({
      key: 'player.anim',
      frames: this.anims.generateFrameNumbers('player'),
      frameRate: 3,
      repeat: -1,
    });

    // create animation for clone.(is not used in current game play)
    this.anims.create({
      key: 'clone.anim',
      frames: this.anims.generateFrameNumbers('clone2'),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: 'clone1.anim',
      frames: this.anims.generateFrameNumbers('clone1'),
      frameRate: 5,
      repeat: -1,
    });

    // create collision animation for player star pick up
    this.anims.create({
      key: 'collide',
      frames: this.anims.generateFrameNumbers('collision'),
      frameRate: 15,
      repeat: 0,
      hideOnComplete: true,
    });

    // create explosion animation for player collision with clone
    this.anims.create({
      key: 'explode',
      frames: this.anims.generateFrameNumbers('explosion'),
      frameRate: 10,
      repeat: 0,
      hideOnComplete: true,
    });
  }
}
