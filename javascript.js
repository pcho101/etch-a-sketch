const body = document.querySelector('body');
const container = document.querySelector('#container');
const slider = document.querySelector('#gridSize');
const color = document.querySelector('#color');
const rainbow = document.querySelector('#rainbow');
const grey = document.querySelector('#grey-scale');
const eraser = document.querySelector('#eraser');
const reset = document.querySelector('#reset');

let gridSize = 16;
let mode = 'color'; //color, rainbow, grey

slider.addEventListener('change', () => {
    gridSize = slider.value;
    removeGrid();
    generateGrid(gridSize);
});

reset.addEventListener('click', () => {
    removeGrid();
    generateGrid(gridSize);
});

color.addEventListener('click', () => mode = 'color');
rainbow.addEventListener('click', () => mode = 'rainbow');
grey.addEventListener('click', () => mode = 'grey');
eraser.addEventListener('click', () => mode = 'eraser');

container.style.display = 'grid';
container.style.width = '500px';
container.style.height = '500px';

function generateGrid(gridSize) {
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid');
        grid.addEventListener('mouseenter', paint);
        container.appendChild(grid);
    }
}

function paint() {
    if (mode == 'color') {
        this.style.backgroundColor = 'black';
    }
    else if (mode == 'rainbow') {
        changeColor(this);
    }
    else if (mode == 'grey'){
        greyScale(this);
    }
    else {
        this.style.backgroundColor = '';
    }
}

function changeColor(grid) {
    randColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
    grid.style.backgroundColor = randColor;
}

function greyScale(grid) {
    if (grid.style.backgroundColor) {
        let shade = Number(grid.style.backgroundColor.slice(-4,-1));
        if (shade < 1.0) {
            grid.style.backgroundColor = `rgba(0, 0, 0, ${shade + 0.1})`;
        }
    }
    else {
        grid.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    }
}

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

generateGrid(16);