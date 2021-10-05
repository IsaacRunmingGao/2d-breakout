import Phaser from 'phaser'

const gameConfig = {
  title: '2D Breakout',
  type: Phaser.AUTO,
  backgroundColor: '#eee',
  width: 480,
  height: 320,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  autoFocus: true,
  // scene:[loadingScene]
};

const game = new Phaser.Game(gameConfig);

//Loader.LoaderPlugin
const preload = () => {
  game.load.image('ball', 'img/ball.png');
}

const create = () => {
  const ball = game.add.sprite(50, 50, 'ball');
}

const update = () => {
}


