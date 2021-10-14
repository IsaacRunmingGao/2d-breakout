import Phaser from 'phaser'

import LoadingScene from './scenes/LoadingScene'

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
    physics: {
        default: 'arcade',
        arcade: {
            // gravity: { y: 300 }
        }
    },
    scene: [LoadingScene]
};


export default new Phaser.Game(gameConfig)


//const preload = () => {
//game.load.image('ball', 'img/ball.png');
//}

//const create = () => {
//  const ball = game.add.sprite(50, 50, 'ball');
//}

//const update = () => {
//}


