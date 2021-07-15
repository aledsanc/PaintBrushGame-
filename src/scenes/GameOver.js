class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOverScene");
    }

    init() {

    }
    preload() {
        this.load.image('gameOver', './assets/GameOver.png');
    }
    create() {
        this.background = this.add.image(game.config.width/2, game.config.height/2, 'gameOver');        

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start('playScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start('menuScene');
        }
    }
}

