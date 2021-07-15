class Help extends Phaser.Scene {
    constructor() {
        super("helpScene");
    }

    init() {

    }
    preload() {
        
        this.load.image('help', './assets/HelpScreen.png');
    }
    create() {
        this.background = this.add.image(game.config.width/2, game.config.height/2, 'help');        

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start('menuScene');
        }
    }
}