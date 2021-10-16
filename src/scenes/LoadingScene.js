import Phaser from 'phaser'

const BALL_KEY = 'ball'
const PADDLE_KEY = 'paddle'

export default class LoadingScene extends Phaser.Scene {
    constructor() {
        super('loading-scene')
        this.ball = undefined;
        this.paddle = undefined;
    }

    preload() {
        this.load.image(BALL_KEY, 'images/ball.png');
        this.load.image(PADDLE_KEY, 'images/paddle.png');
    }

    create() {
        let {width, height} = this.sys.game.canvas;

        this.ball = this.physics.add.sprite(50, 50, BALL_KEY);
        this.paddle = this.physics.add.sprite(width * 0.5, height - 5, PADDLE_KEY);

        this.ball.body.velocity.set(250, 250);
        this.ball.body.collideWorldBounds = true;
        this.ball.body.bounce.set(1);
        this.physics.add.collider(this.ball, this.paddle)
        this.physics.world.checkCollision.down = false;
        this.paddle.body.immovable = true;
    }

    update(time, delta) {

        let cursors = this.input.keyboard.createCursorKeys();
        this.paddle.body.setVelocityX(0);

        if (cursors.left.isDown) {
            this.paddle.body.setVelocityX(-350);
        } else if (cursors.right.isDown) {
            this.paddle.body.setVelocityX(350);
        }
    }
}
