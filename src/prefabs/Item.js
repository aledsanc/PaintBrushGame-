class Thing extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        //scene.physics.add.existing(this);
        //scene.events.on('update', this.update, this);
        //this.plat = plat;
        //this.scene = scene;
    }

    update() {
        //this.x = this.plat.x;
        this.x -= 4;
        if(this.x <= 0 - this.width) {
            this.reset();
        }
    }

    reset() {
        this.x = game.config.width;
        this.y = 392 - (16 * (Math.floor(Math.random() * 6))); 
    }
}