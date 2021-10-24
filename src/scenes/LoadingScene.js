import Phaser from 'phaser'
import {BALL_KEY, BRICK_KEY, PADDLE_KEY} from "../common/constants";



export default class LoadingScene extends Phaser.Scene {

    constructor() {
        super('loading-scene')
        this.ball = undefined;
        this.paddle = undefined;
        this.bricks = undefined;
        this.newBrick = undefined;
        this.brickInfo = undefined;
    }

    preload() {
        this.load.image(BALL_KEY, 'images/ball.png');
        this.load.image(PADDLE_KEY, 'images/paddle.png');
        this.load.image(BRICK_KEY, 'images/brick.png');
    }

    create() {
        this.initBall();
        this.initPaddle();
        this.initBricks();
        this.initPhysicsWorld();
    }

    update(time, delta) {
        this.movePaddle();
        this.isGameOver();
    }

    initPhysicsWorld() {
        this.physics.world.setBoundsCollision(true,true,true,false);
        this.physics.add.collider(this.ball, this.paddle);
        this.physics.add.collider(this.ball, this.bricks, this.ballHitBrick);
    }

    initBall() {
        this.ball = this.physics.add.sprite(5, 300, BALL_KEY);
        this.ball.body.velocity.set(200, -200);
        this.ball.body
            .setCollideWorldBounds(true)
            .setBounce(1)
    }

    initPaddle() {
        let {width, height} = this.sys.game.canvas;
        this.paddle = this.physics.add.sprite(width * 0.5, height - 5, PADDLE_KEY);
        this.paddle.body
            .setImmovable(true)

    }

    initBricks(){
        this.bricks = this.physics.add.group({
            key: BRICK_KEY,
            quantity: 21,
            gridAlign:{
                x:60,
                y:50,
                width: 7,
                height: 3,
                position: Phaser.Display.Align.CENTER,
                cellWidth: 60,
                cellHeight: 30
            },
            immovable: true
        });
        // this.bricks.setImmovable(true);
    }


    movePaddle() {
        let cursors = this.input.keyboard.createCursorKeys();
        this.paddle.body.setVelocityX(0);
        if (cursors.left.isDown) {
            this.paddle.body.setVelocityX(-350);
        } else if (cursors.right.isDown) {
            this.paddle.body.setVelocityX(350);
        }
    }

    ballHitBrick (ball, brick){
        brick.destroy();
    };

    isGameOver() {
        let {width, height} = this.sys.game.canvas;
        let isWon = this.bricks.countActive() === 0;
        let isLost = this.ball.body.y > height;
        if(isWon){
            this.scene.restart();
            alert("Stage Clear!");
        }
        if (isLost) {
            this.scene.restart();
            alert("Game Over!");
        }
    }
}
