//this definition is to set the controls in the game
var gameSettings = {
  playerSpeed: 200,
};

//this definition of the background is to make it the size of mobile.
var config = {
  ScaleMode: Phaser.Scale.FIT,
  type: Phaser.Auto,
  width: 414,
  height: 736,
  //this background color is the color of the game
  backgroundColor: 0xd9ded7,
  scene: [Scene1, Scene2],
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    }
  }
};

var game = new Phaser.Game(config);
