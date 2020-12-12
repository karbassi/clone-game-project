class Scene2 extends Phaser.Scene {
  constructor() {
    super('playGame');
  }

  create() {
    //this.background = this.add.tile.sprite(
    // 0,
    // 0,
    //  config.width,
    // config.height,
    //  'background'
    // );
    // this.background.setOrigin(0, 0);

    this.player = this.physics.add.sprite(
      config.width / 2,
      config.height / 2,
      'player'
    );

    this.player.setSize(20, 20);
    this.player.setScale(0.7);
    this.player.play('player.anim');

    //add star physics
    this.star = this.physics.add.sprite(randomX, randomY, 'star');
    var randomX = Phaser.Math.Between(0, config.width);
    this.star.x = randomX;
    var randomY = Phaser.Math.Between(0, config.height);
    this.star.y = randomY;
    this.star.setScale(0.7);
    this.star.setSize(30, 30);
    this.star.setCollideWorldBounds(true);

    //add clone instances
    this.clones = this.add.group();
    var clone = this.clones;

    //add game play sound
    // this.gameSound = this.sound.add('gamemusic');
    //this.gameSound.play();

    //create the score label and score counter.
    this.score = 0;
    this.scoreText = this.add.text(16, 16, 'score: 0', {
      fontSize: '16px',
      fontFamily: 'arial',
      fill: '#ffff',
    });

    //create lives


    //create win star function
    this.physics.add.overlap(
      this.player,
      this.star,
      this.starPickup,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.clones,
      this.cloneCollision,
      null,
      this
    );

    //input keys
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.physics.world.setBoundsCollision(true);
    this.player.setCollideWorldBounds(true);
    //this.clone1.setcollideWorldBounds(true);
  }

  starPickup(player, star) {
    var collision = new Collision(this, star.x, star.y);
    this.resetStarPos(star);
    //add starpickupsound
    this.starpickupSound = this.sound.add('starpickup');
    this.starpickupSound.play();
    //add score counter
    this.score += 1;
    this.scoreText.setText('score: ' + this.score);
    this.clone = new Clone(this);
  }

  cloneCollision(player, clones) {
    var explosion = new Explosion(this, this.player.x, this.player.y);
    this.clonepickupSound = this.sound.add('collide');
    this.clonepickupSound.play();
    this.physics.pause();
    this.player.disableBody(true, true);
    this.player.destroy;
    this.add.text(config.width / 2, config.height / 2, 'GameOver');
    }


  update() {
    //this.movePlayer(this.player, 0);
    this.movePlayerManager();
  }

  movePlayerManager() {
    this.player.setVelocity(0);

    if (this.cursorKeys.left.isDown) {
      this.player.setVelocityX(-gameSettings.playerSpeed);
    } else if (this.cursorKeys.right.isDown) {
      this.player.setVelocityX(gameSettings.playerSpeed);
    }

    if (this.cursorKeys.up.isDown) {
      this.player.setVelocityY(-gameSettings.playerSpeed);
    } else if (this.cursorKeys.down.isDown) {
      this.player.setVelocityY(gameSettings.playerSpeed);
    }
  }

  resetStarPos() {
    var randomX = Phaser.Math.Between(0, config.width);
    this.star.x = randomX;
    var randomY = Phaser.Math.Between(0, config.height);
    this.star.y = randomY;
    this.star.enableBody(true, randomX, randomY);
    this.star.setCollideWorldBounds(true);
    this.star.visible = true;
  }
}

//enemies move in the most recent pathway of the player
