//create a class for clone to use in game play

class Clone extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'clone1');
    scene.add.existing(this);
    scene.physics.world.setBoundsCollision(true);
    scene.physics.world.enableBody(this);
    //this.play('clone1.anim');
    this.setScale(0.7);
    //this.body.setEnableBody(true);
    this.physicsBodyType = Phaser.Physics.ARCADE;
    this.body.setSize(20, 20);
    var randomX = Phaser.Math.Between(0, config.width);
    this.body.x = randomX;
    var randomY = Phaser.Math.Between(0, config.height);
    this.body.y = randomY;
    this.body.setCollideWorldBounds(true);
    this.body.setVelocity(80, 20);
    this.body.setBounce(true);

    // add clone group to call in the collision function
    scene.clones.add(this);
  }
}
