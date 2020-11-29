class Scene2 extends Phaser.Scene {
  constructor() {
    super('playGame');
  }

  create() {
    this.player = this.physics.add.sprite(
      config.width / 2 - 8,
      config.height - 64,
      'player'
    );
    this.player.setScale(2);

    this.player.play('player.anim');
    this.player.setInteractive();

    this.add.text(20, 20, 'clone', {
      font: '30px Arial',
      fill: 'white',
    });
    this.ship = this.physics.add.sprite(config.width / 2, config.height / 2, 'ship');

    //input keys
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.physics.world.setBoundsCollision();
    this.player.setCollideWorldBounds(true);

    this.physics.add.overlap(
      this.player,
      this.ship,
      this.shipPickup,
      null,
      this
    );
  }

  shipPickup(player, ship) {
    ship.disableBody(true, true);
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
}

//movePlayer(player, speed) {
// player.y += speed;
//if (player.y > config.height) {
// this.resetPlayerPos(player);
//}
//}

//resetPlayerPos(ship) {
//player.y = 0;
// var randomX = phaser.Math.Between(0, config.width);
// player.y = randomX;
//}
