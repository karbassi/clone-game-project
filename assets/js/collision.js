class Collision extends Phaser.GameObjects.Sprite{
constructor (scene, x, y){
 super(scene, x, y, "collision");
  scene.add.existing(this);
      this.play("collide");
    }
}
