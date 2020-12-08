class Scene2 extends Phaser.Scene {
  constructor() {
    super('playGame');
  }

  create() {
    this.background = this.add.tileSprite(
      0,
      0,
      config.width,
      config.height,
      'background'
    );
    this.background.setOrigin(0, 0);

    this.player = this.physics.add.sprite(
      config.width / 2 - 8,
      config.height - 64,
      'player'
    );
    this.player.setScale(0.8);
    this.player.play('player.anim');

    //this.player.setInteractive();

    this.star = this.physics.add.sprite(
      config.width / 2,
      config.height / 2,
      'star'
    );
    this.star.setScale(0.8);

    this.clone = this.physics.add.sprite(
      config.width / 2 + 100,
      config.height / 2,
      'clone'
    );
    this.clone.setScale(0.8);
    this.clone.disableBody(true, true);
    this.clone.play('clone.anim');

    //create the score label and score counter.
    this.score = 0;
    this.scoreText = this.add.text(16, 16, 'score: 0', {
      fontSize: '16px',
      fill: '#ffff',
    });

    this.physics.add.overlap(
      this.player,
      this.star,
      this.starPickup,
      null,
      this
    );

    //input keys
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.physics.world.setBoundsCollision();
    this.player.setCollideWorldBounds(true);
  }

  starPickup(player, star) {
    var collision = new Collision(this, star.x, star.y);
    this.resetStarPos(star);
    this.score += 1;
    this.scoreText.setText('score: ' + this.score);
    this.resetClonePos(this.clone);

  }

  //cloneCollision(player, clone) {
  //clone.disableBody(true, true);
  //var collision = new Explosion(this, star.x, star.y);
  t; //his.resetStarPos(player);
  // this.clone.enableBody(true, randomX, randomY);
  //this.clone.visible = true;
  // }

  update() {
    //this.movePlayer(this.player, 1);
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

  //movePlayer(player, speed) {
  //player.y += speed;
  //if (player.y > config.height) {
  //this.resetPlayerPos(player);
  //}
  //}
  resetClonePos() {
    var randomX = Phaser.Math.Between(0, config.width);
    this.clone.x = randomX;
    var randomY = Phaser.Math.Between(0, config.height);
    this.clone.y = randomY;
    this.clone.enableBody(true, randomX, randomY);
    this.clone.visible = true;
    this.clone.play('clone.anim');
  }

  resetStarPos() {
    var randomX = Phaser.Math.Between(0, config.width);
    this.star.x = randomX;
    var randomY = Phaser.Math.Between(0, config.height);
    this.star.y = randomY;
    this.star.enableBody(true, randomX, randomY);
    this.star.visible = true;
  }
}

//to do

//include enemies
//explosion when there is a colision with enemies
//enemies move in the most recent pathway of the player
