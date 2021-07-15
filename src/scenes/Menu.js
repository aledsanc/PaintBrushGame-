class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
        let song;
        let allsound;
    }

    init() {

    }
    preload() {
        
        this.load.image('menu', './assets/MenuScreen.png');
        this.load.audio('sfx_bgm', './assets/bgm.wav');
    }
    create(){    
        
        var allsound = this.sound.getAll();
        if((allsound[0]) == null){
            this.song = this.sound.add('sfx_bgm',{volume: 0.5, loop: true});
        }
        allsound = null; 
        this.background = this.add.image(game.config.width/2, game.config.height/2, 'menu');        
        
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyH = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
    }
    update() {
        var allsound = this.sound.getAll();
        if(allsound[0].isPlaying == false){
            this.song.play();
        }
        allsound = null;
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start('playScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyH)){
            this.scene.start('helpScene');
        }
    }
}

