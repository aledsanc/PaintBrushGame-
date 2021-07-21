class Credit extends Phaser.Scene {
    constructor() {
        super("creditScene");
    }

    init() {

    }
    preload() {
        this.load.image('credit', './assets/Credit.png');
    }
    create() {
        this.background = this.add.image(game.config.width/2, game.config.height/2, 'credit');        

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start('menuScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start('menuScene');
        }
    }
}

