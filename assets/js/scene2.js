class Scene2 extends Phaser.Scene {
  constructor() {
    super('playGame');
  }

  create() {
    //add player to the canvas of the game
    this.player = this.add.image(
      config.width / 3 - 50,
      config.height / 1.3,
      "player");
    this.player.setScale(0.02);
    //add the target star to the game canvas
    this.star1 = this.add.image(
      config.width/ 2,
      config.height/3,"star1"
    );
    this.star1.setScale(0.02);
    this.add.text(20, 20, 'clone', { font: '25px Arial', fill: 'white' });
  }
  movePlayer(player, speed) {
    player.y += speed;
    if(player.y > config.height){
      this.resetPlayerPos(player);
    }
  }
  resetPlayerPos(player){
    player.y =0;
    var randomX = Phaser.Math.Between(0, config.width);
    player.x = randomX;
  }
  update(){
    this.movePlayer(this.player, 1);
  }
}


