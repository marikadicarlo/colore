// Generate random numbers and console log to check
function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

// Outputs a number between 0 and 255 inclusive
// console.log(randomInteger(255));

// Create three random integers between 0 and 255
// There values will represent the red, green, and blue components of our colors

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}

for (i = 0; i < 5; i++) {
    console.log(randomRgbColor());
}