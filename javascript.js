const body = document.querySelector('body');
const container = document.querySelector('#container');
const button = document.createElement('button');
const gridSize = 8;

body.prepend(button);
button.textContent = 'Change Size';
button.addEventListener('click', changeSize);

container.style.display = 'grid';
container.style.width = '500px';
container.style.height = '500px';

function generateGrid(gridSize) {
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.backgroundColor = 'purple';
        grid.style.border = '1px solid beige';
        grid.addEventListener('mouseenter', () => {
            changeColor(grid);
        });
        container.appendChild(grid);
    }
}

function changeColor(grid) {
    grid.style.backgroundColor = 'red';
}

function changeSize() {
    let userInput = prompt('Select size of grid. Max 64.');
    let n = parseInt(userInput);
    if (isNaN(n)) {
        alert('Please enter a number.');
    }
    else if (n > 64 || n < 0) {
        alert('Please enter a number between 0 and 64.');
    }
    else {
        generateGrid(n);
    }
}

function removeGrid() {
    const myNode = document.getElementById('container');
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
}

generateGrid(gridSize);