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
      config.width / 2,
      config.height / 2,
      'player'
    );
    this.player.setScale(0.7);
    this.player.play('player.anim');


    //added star physics
    this.star = this.physics.add.sprite(randomX, randomY, 'star');
    var randomX = Phaser.Math.Between(0, config.width);
    this.star.x = randomX;
    var randomY = Phaser.Math.Between(0, config.height);
    this.star.y = randomY;
    this.star.setScale(0.7);
    this.star.setCollideWorldBounds(true);

    this.clone2 = this.physics.add.group();
    //this.clone2.enableBody = true;
   // this.clone2.collideWorldBounds = true;
    //this.clone2.physicsBodyType = Phaser.Physics.ARCADE;

    //this.clone1.enablebody(true, true);
    //this.clone1.setBounce(1);
    //this.clone.setVelocity(80, 20);
    //this.clone.CollideWorldBounds(true);
    //var clone = new Clone(this);
    //var clone = new Clone(this);
    //clone.x = randomX;
    //clone.y = randomY;
    //this.clone.setScale(0.8);
    //clone1.disableBody(true, true);
    // clone.setActive(false).setVisible(false);

    //add game play sound
    this.gameSound = this.sound.add('gamemusic');
    this.gameSound.play();

    //create the score label and score counter.
    this.score = 0;
    this.scoreText = this.add.text(16, 16, 'score: 0', {
      fontSize: '16px',
      fontFamily: 'arial black',
      fill: '#ffff',
    });

    this.physics.add.overlap(
      this.player,
      this.star,
      this.starPickup,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.clone2,
      this.cloneCollision,
      null,
      this
    );



    //input keys
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.physics.world.setBoundsCollision(true);
    this.player.setCollideWorldBounds(true);
    //this.clone1.setcollideWorldBounds(true);

    //var maxObjects = 1;
    //for (var i = 0; i <= maxObjects; i++) {
    //var clone = new Clone(this);
    //clone.setRandomPosition(0, 0, game.config.width, game.config.height);
    //}
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
    this.createClone();
  }

  createClone() {
    var clone = new Clone(this);
    this.clone2.setVelocity(80, 20);
    //this.clone2.setBounce(1);

    //this.clone1.body.setBounce(0.9);
    //this.clone1.enable(true);
  }

  cloneCollision(player, clone1) {
    var explosion = new Explosion(this, player.x, player.y);
    this.clonepickupSound = this.sound.add('collide');
    this.clonepickupSound.play();
    this.player.destroy;
    this.player.disableBody(true, true);
    this.player.visible = false;
    this.add.text(config.width/2, config.height/2, "GameOver");
  }
  //this.makeClonePos(clone);
  //this.clone = new Clone(this);
  //this.clone.disableBody(true, true);
  //this.clone.visible = false;

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

  //movePlayer(player, speed) {
  //player += speed;
  //if (player > config.height) {
  //this.resetPlayerPos(player);
  //}
  //}

  resetStarPos() {
    var randomX = Phaser.Math.Between(0, config.width);
    this.star.x = randomX;
    var randomY = Phaser.Math.Between(0, config.height);
    this.star.y = randomY;
    this.star.enableBody(true, randomX, randomY);
    this.star.setCollideWorldBounds(true);
    this.star.visible = true;
  }


  //destroyPlayer(player, clone) {
  //player.setTexture('Explosion');
  //player.play('explode');
  //}
}
//to do
//explosion when there is a colision with enemies
//enemies move in the most recent pathway of the player
