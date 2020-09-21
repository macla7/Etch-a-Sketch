
let squaresOnAxis = 16;
let squaresTotal = Math.pow(squaresOnAxis,2);
let container = document.querySelector('#container');
let tiles = document.getElementsByClassName('tile');


function createGrid() {
    squaresTotal = Math.pow(squaresOnAxis,2);
    for (i=0;i<squaresTotal;i++) {
        let square = document.createElement('div');
        square.textContent = '.'
        square.className = 'tile';
        document.getElementById('container').appendChild(square);
    }
    container.style.setProperty('grid-template-columns', `repeat(${squaresOnAxis}, 1fr)`);

    pencil();

}
createGrid();

//now can we set the grid-template-columns here too.. using a user defined input..

function pencil() {
let arr = Array.from(tiles);
arr.forEach(function(element) {
    element.addEventListener('mouseover', function (event) {
        event.target.style.backgroundColor = 'orange';
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