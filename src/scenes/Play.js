class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image('menu', './assets/MenuScreen.png');
        this.load.image('bg', './assets/bg.png');
        this.load.image('plat', './assets/plat.png');
        this.load.image('item', './assets/TempColor.png');
        this.load.spritesheet('running', './assets/Running.png', {frameWidth: 19, frameHeight: 19, startFrame: 0, endFrame: 7});
        this.load.image('enemy', './assets/enemy.png');
    }

    create() {
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'bg').setOrigin(0,0);

        //this.add.rectangle(0, borderUISize + borderPadding, 
            //game.config.width, 
            //borderUISize * 2, 0x00FF00).setOrigin(0,0);
        
        
        this.pl1 = new Player(this, game.config.width / 2, game.config.height / 2, 'running', 0).setOrigin(0, 0);
        const playerAnimation = this.anims.create({
            key: 'running1',
            frames: this.anims.generateFrameNumbers('running'),
            frameRate: 12
        });
        this.pl1.play({ key: 'running1', repeat: -1 });

       // this creates the plats in a linear fashision 
        this.plats = new Array(3000); 
        for (let i = 0; i < 3000; i++){
            this.plats[i] = new Plat(this, 32 * i, 392, 'plat', 0).setOrigin(0, 0);
        }
       
        this.item = new Thing(this, 470, 370, 'item', 0).setOrigin(0, 0);
        this.enemy = new enemy(this, 430, 330, 'enemy', 0).setOrigin(0, 0);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyJump = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);


        this.p1Score = 0;

        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5, bottom: 5
            },
            fixedWidth: 100
        }
        this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.p1Score, scoreConfig);

        this.gameOver = false; 

        
    }

    update() {
        this.starfield.tilePositionX -= 4;
        this.item.update();
        this.enemy.update();
        /*change this update function to be entirely 
        "if the collision between the mc and item happens, then this.pl1Score++"        
        */
        if(this.checkCollision(this.mc, this.item)) {
            this.item.reset();
            this.p1Score++;
            this.scoreLeft.text = this.p1Score;
            console.log(this.p1Score);
        }
        //credit scene not working
        if(this.p1Score >= 3){
            this.scene.start("creditScene");
        }
        if(this.checkCollisionEnemy(this.mc, this.enemy)) {
            this.enemy.reset();
            this.p1Score--;
            this.scoreLeft.text = this.p1Score;
            console.log(this.p1Score);
        }
        //credit scene not working
        if(this.p1Score >= 3){
            this.scene.start("creditScene");
        }
        if(this.p1Score < 0){
            this.scene.start("gameOverScene");
        }

        
        if(true) {
            this.pl1.update();
            for(let i = 0; i < 1000; i++){
                this.plats[i].update();
                
                if(this.plats[i].x == this.pl1.x){
                    this.pl1.evaluateFloor(0, this.plats[i].y);
                }
                if(this.plats[i].x == this.pl1.x + 16){
                    this.pl1.evaluateFloor(1, this.plats[i].y);
                }
             
            }
        }
        if(this.pl1.y > game.config.height){
            this.scene.start("gameOverScene");
    }
}

        //the player can pick up the item at any height
        checkCollision(pl1, item) {
            if(this.pl1.x < this.item.x + this.item.width &&
               this.pl1.x + this.pl1.width > this.item.x &&
               this.pl1.y < this.item.y + this.item.height &&
               this.pl1.height + this.pl1.y > this.item.y) {
                return true;
            }
            return false;
        }
        checkCollisionEnemy(pl1, enemy) {
            if(this.pl1.x < this.enemy.x + this.enemy.width &&
               this.pl1.x + this.pl1.width > this.enemy.x &&
               this.pl1.y < this.enemy.y + this.enemy.height &&
               this.pl1.height + this.pl1.y > this.enemy.y) {
                return true;
            }
            return false;
        }
}