/**
 * Collaborators: Alex Phun, Anna Perlow, Alexis Sanchez, Cameron Henritzy
 * Project Name: Pixel Runner
 * Date/Time completed: Jul 7 4:02 PM
 * 
 * Creative tilt:
 * I had big dreams for this game, most of which was in the level generation - 
 * my initial idea for this had the level generation choose from a set of 16
 * pre-built level chunks, each of which was 16 blocks long and had spikes
 * as well as large gaps without platforms.
 * The version of the level generation we have here was originally
 * implemented as a dummy level generation algorithm until I could figure
 * out a way to code my original idea. Eventually, after I coded
 * the floor height detection algorithm, I decided that I actually liked
 * the simplicity of the dummy algorithm and decided to keep it as-is
 * due to how well it worked with the physics system.
 * 
 * Most of the ideas for the visual style came from me as well, although
 * Cameron was the one who actually drew the assets for the menu screens
 * and player character. Early on, we all agreed on a very minimalistic
 * visual feel for the game - the protagonist and background, as well as
 * the original design for the platforms, all could be compressed to a bit
 * depth of one bit per pixel!
 * 
 * As for the gameplay, I styled the jump physics after Super Mario World,
 * which gives the player a lot of control over their jumps. One often-
 * overlooked mechanic in that game is that Mario's terminal velocity
 * will actually increase if the player lets go of the jump button.
 * I spent a lot of time fiddling with jump physics before settling on what
 * we have now.
 */

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play, GameOver, Help]
}

let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keySPACE, keyR, keyJump, keyH;
