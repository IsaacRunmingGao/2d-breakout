import Phaser from 'phaser'


export default class GameScene extends Phaser.Scene
{
  constructor()
  {
    super('game-scene')
  }

  preload()
  {
    this.load.image('ball', '/Users/gaorunming/Desktop/projects/2d-breakout/img/ball.png');
  }

  create()
  {
    this.add.sprite(50, 80, 'ball');
  }
}


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
  scene:[GameScene]
};


const game = new Phaser.Game(gameConfig);

//const preload = () => {
//game.load.image('ball', 'img/ball.png');
//}

//const create = () => {
//  const ball = game.add.sprite(50, 50, 'ball');
//}

//const update = () => {
//}


