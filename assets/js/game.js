//this definition is to set the controls in the game
var gameSettings = {
  playerSpeed: 200,
};

//this definition of the background is to make it the size of mobile.
var config = {
  ScaleMode: Phaser.Scale.FIT,
  renderer: Phaser.Auto,
  width: 414,
  height: 736,
  //this background color is the color of the game
  backgroundColor: 0xd9ded7,
  scene: [Scene1, Scene2],

  //i am including physics here but I suppose this will be different
  //in the tutorial it suggests arcade but i can imagine it might require
  //something else.
  physics: {
    default: 'arcade',
    arcaade: {
      debug: false,
    }
  }
};

var game = new Phaser.Game(config);
