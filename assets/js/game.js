// this definition is to set the controls in the game
const gameSettings = {
  playerSpeed: 200,
};

const config = {
  // ScaleMode: Phaser.Scale.AUTO,
  type: Phaser.Auto,
  // game canvas size is Iphone SE size
  width: 320,
  height: 568,
  // this background color is the color of the game.
  // though I use a background, I still considered including
  // this colored background
  backgroundColor: 0x920140,
  scene: [Scene1, Scene2],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
};

// calling game control functions
const game = new Phaser.Game(config);
