// define canvas and its context
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// define canvas dimensions
canvas.width = 600; // default: 300
canvas.height = 600; // default: 150

// define coordinate system center position x
const CENTER_X = canvas.width / 2; // original: 0

// define speed of animation in y-direction
// original: 1 / 750
const SPEED_Y = 1 / 2000;

// define minimal y-value of coordinate system center
// original: 0
const MIN_Y = 0.5 * canvas.height;

// define maximal y-value of coordinate system center
// original: canvas.height * (2 / 3)
const MAX_Y = 0.5 * canvas.height;

// define the number of drawn emojis
// original: 300
const EMOJI_COUNT = 300;

// choose the emoji to draw
// original: 🎉 resp. \uD83C\uDF89
const EMOJI = "🎭";

// draw loop function
function loop(time) {
    // the following is a clever way of clearing the canvas
    // and resetting its transformations
    canvas.height = canvas.height;

    // the center position oscillates between the chosen values
    const CENTER_Y =
        MIN_Y +
        0.5 * (Math.sin(time * SPEED_Y) + 1) * (MAX_Y - MIN_Y);

    // set the center position of the canvas context
    ctx.translate(CENTER_X, CENTER_Y);

    // make the Emoji bigger
    ctx.font = "18em Arial";

    // this for-loop draws several emojs
    for (let counter = 0; counter < EMOJI_COUNT; counter++) {
        // the variable q slowly cycles from 0 to 16 through time
        // with an offset determined by the counter
        const q = (3.6 * (counter + time / 850)) % 16;

        // set the opacity of the emoji
        // original: q / 65
        ctx.globalAlpha = q / 172;

        // rotate the emoji a bit (around the center above)
        // original: 0.2
        ctx.rotate(0.18);

        // set the position of the emoji
        const pos_x = q * 20; // original: q * 20
        const pos_y = q * 2; // original: q / 4

        // draw the emoji
        ctx.fillText(EMOJI, pos_x, pos_y);
    }

    // recursively call the loop function at ~60fps
    requestAnimationFrame(loop);
}

// execute the loop once
loop();
