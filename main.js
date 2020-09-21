
let squaresOnAxis = 64;
let squaresTotal = Math.pow(squaresOnAxis,2);
let container = document.querySelector('#container');
let tiles = document.getElementsByClassName('tile');
var x;
var y;
var z;
var bgColor;
let store;

function createGrid() {
    squaresTotal = Math.pow(squaresOnAxis,2);
    for (i=0;i<squaresTotal;i++) {
        let square = document.createElement('div');
        square.className = 'tile';
        document.getElementById('container').appendChild(square);
    }
    container.style.setProperty('grid-template-columns', `repeat(${squaresOnAxis}, 10px)`);
    container.style.setProperty('width', `${squaresOnAxis*10}px`)

    pencil();

}
createGrid();

//now can we set the grid-template-columns here too.. using a user defined input..

function pencil() {
let arr = Array.from(tiles);
arr.forEach(function(element) {
    element.addEventListener('mouseover', function (event) {
        random_bg_color()
        if (event.target.style.backgroundColor=='') {
            event.target.style.backgroundColor = `${bgColor}`;
        } else {
        console.log(event.target.style.backgroundColor)
        store = darken_bg(event.target.style.backgroundColor);
        console.log(store);
        event.target.style.backgroundColor = `${store}`;
        }
    })
})
};
pencil()

let resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', btnFuncs);

function btnFuncs() {
    wipeGrid();
    setGrid();
    createGrid();
};

function wipeGrid() {
    container.innerHTML="";
};

function setGrid() {
    let promptTemp = prompt('How many tiles high would you like your grid?', 16);
    let num = parseInt(promptTemp);
    if (typeof num!='number') {
        promptTemp = prompt('Could you please enter a number.')
    }

    squaresOnAxis=promptTemp;
}

function random_bg_color() {
    x = Math.floor(Math.random() * 256);
    y = Math.floor(Math.random() * 256);
    z = Math.floor(Math.random() * 256);
    bgColor = "rgb(" + x + "," + y + "," + z + "," + 0.1 + ")";
}

let regex = /0.1/
let regex2 = /0.2/
let regex3 = /0.3/
let regex4 = /0.4/
let regex5 = /0.5/
let regex6 = /0.6/
let regex7 = /0.7/
let regex8 = /0.8/
let regex9 = /0.9/
let regex10 = /1/
let regexaFinder = /\)/
function darken_bg(string) {
    if (regex.test(string)) {
        return string.replace(regex, '0.2');
    } else if (regex2.test(string)) {
        return string.replace(regex2, '0.3');
    } else if (regex3.test(string)) {
        return string.replace(regex3, '0.4');
    } else if (regex4.test(string)) {
        return string.replace(regex4, '0.5');
    } else if (regex5.test(string)) {
        return string.replace(regex5, '0.6');
    } else if (regex6.test(string)) {
        return string.replace(regex6, '0.7');
    } else if (regex7.test(string)) {
        return string.replace(regex7, '0.8');
    } else if (regex8.test(string)) {
        return string.replace(regex8, '0.9');
    } else if (regex9.test(string)) {
        return string.replace(regex9, '1');
    }
}