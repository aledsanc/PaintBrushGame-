class Plat extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
    }

    update() {
        /// here is where we make the platforms move 
        this.x -= 4;
        if(this.x <= 0 - this.width) {
            this.reset();
        }
    }

   
    reset() {
        /// here is where we make the one big plat under the players 
        this.x = game.config.width;
        this.y = game.config.height;
        
    }
} 