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

function randomHexColor() {
    let [r,g,b] = randomRgbColor();

    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');

    return "#" + hr + hg + hb;
}

for (i= 0; i <5; i++) {
    console.log(randomHexColor());
}