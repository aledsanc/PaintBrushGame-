class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.terminalV = -24; 
        this.vSpeed = 0;
        this.floorUnderBackHeight = 360; 
        this.floorUnderFrontHeight = 360; 
        /**
         * I have absolutely no idea what i did to make this function able
         * to be called outside this class, but it works.
         * This function calls instance functions that update the stored
         * floor heights.
         * @param {*} side 0 for back, 1 for front
         * @param {*} platBack naming this platback was leftover from when i was just testing this
         */ 
        this.evaluateFloor = function(side, platBack){
            if (side == 0){
                this.evaluateFloorUnderBack(platBack);
            }
            else if (side == 1){
                this.evaluateFloorUnderFront(platBack);
            }
        }       
    }

    evaluateFloorUnderBack(platBack){
        this.floorUnderBackHeight = platBack - 32;
    }
    evaluateFloorUnderFront(platFront){
        this.floorUnderFrontHeight = platFront - 32;
    }

    /**
     * This function handles flor collision.
     * @returns true if the player is grounded and false if they're airborne
     */
    checkFloor() {
        
        if(this.y == this.floorUnderBackHeight || this.y == this.floorUnderFrontHeight){
            return true;
        }
       
        else if(((this.y + (this.vSpeed / 4)) < this.floorUnderFrontHeight) && (this.y > this.floorUnderFrontHeight) && this.vSpeed < 0){
            this.y = this.floorUnderFrontHeight; 
            this.vSpeed = 0;
            return true;
        }
        
        else if(((this.y + (this.vSpeed / 4)) < this.floorUnderBackHeight) && (this.y > this.floorUnderBackHeight) && this.vSpeed < 0){
            this.y = this.floorUnderBackHeight; 
            return true;
        }
        else{
            return false;
        }
    }

    update() {
        if (!this.checkFloor()) {
            if(this.vSpeed < this.terminalV){
                this.vSpeed = this.terminalV;
            }
            if(keyJump.isDown){
                this.vSpeed -= 1; 
                this.terminalV = -18; 
            }
            else{
                this.vSpeed -= 3;
                this.terminalV = -24;
            }
        }
        else{
            this.vSpeed = 0;
            if(Phaser.Input.Keyboard.JustDown(keyJump)){
                this.vSpeed = 32;
            }
        }

        if(Phaser.Input.Keyboard.JustDown(keyJump)){
           //here
        }
        if(this.vSpeed > 0){
            this.texture = 'jump';
        }
        this.y -= (this.vSpeed / 4); 
    }

    reset() {

    }
}