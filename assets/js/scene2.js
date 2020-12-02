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

    //create the score label and score counter.
    this.score = 0;
    this.scoreLabel = this.add.bitmapText(10, 10, 'gameFont', 'SCORE', 16);

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
    star.disableBody(true, true);
    //this.star.play('collide');
    this.score += 10;
    var collision = new Collision(this, star.x, star.y);
    this.resetStarPos(star);
  }

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



  resetStarPos() {
    var randomX = Phaser.Math.Between(0, config.width);
    this.star.x = randomX;
    var randomY = Phaser.Math.Between(0, config.height);
    this.star.y = randomY;
    this.star.enableBody(true, randomX, randomY);
    this.star.visible =true;
  }
}

//to do
//make star appear in random place after collision
//include enemies
//explosion when there is a colision with enemies
//enemies move in the most recent pathway of the player
