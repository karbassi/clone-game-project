class Clone extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'clone');
    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    this.play('clone.anim');
    this.setScale(0.7);
    //this.body.setEnableBody(true);
    this.physicsBodyType = Phaser.Physics.ARCADE;
    this.setBounce =1;
    var randomX = Phaser.Math.Between(0, config.width);
    this.body.x = randomX;
    var randomY = Phaser.Math.Between(0, config.height);
    this.body.y = randomY;
    this.body.setVelocity(80, 20);
    this.body.setCollideWorldBounds(true);
    this.body.setBounce(1);

    scene.clone2.add(this);

  }
}
