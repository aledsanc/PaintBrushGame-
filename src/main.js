/* Hello this is Alex and Alexis, we created a game called paint my way. This game uses code from our previous game which is an endless runner call Pixel Runner. 
With the help of the TA we were able to add new features  as well as polish and create new code to adjust it to the theme. We have left comment in areas where we reused code 
as well as where we created new code with the TA. 
*/
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play, GameOver, Help, Credit]
}

let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keySPACE, keyR, keyJump, keyH;


//change bg, sounds, and ui elements