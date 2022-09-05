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

// for (i= 0; i <5; i++) {
//     console.log(randomHexColor());
// }

// function randomHslColor() {
//     let h = positiveInteger(360);
//     let s = positiveInteger(100);
//     let l = positiveInteger(100);

//     return [h,s,l];
// }

// for (i=0; i < 5; i++) {
//     console.log(randomHslColor());
// }

function changeColor() {
    let hex = randomHexColor();
    document.getElementById('color').value = hex;
    document.getElementById('text').innerHTML = hex;
  }
  
  function clickHandler(event) {
    changeColor();
    event.preventDefault();
  }
  
  document.addEventListener('click', clickHandler);
  
  changeColor();