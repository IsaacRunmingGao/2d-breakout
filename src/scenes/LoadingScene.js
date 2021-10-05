import Phaser from 'phaser'

export default class LoadingScene extends Phaser.Scene
{
  constructor()
  {
    super('loading-scene')
  }

  preload()
  {
    this.load.image('ball', 'images/ball.png');
  }

  create()
  {
    this.add.sprite(50, 50, 'ball');
  }
}