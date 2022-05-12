const container = document.querySelector('#container');
const SIZE = 8;

container.style.display = 'grid';
container.style.gridTemplateRows = `repeat(${SIZE}, 1fr)`;
container.style.gridTemplateColumns = `repeat(${SIZE}, 1fr)`;
container.style.width = '500px';
container.style.height = '500px';

for (let i = 0; i < SIZE * SIZE; i++) {
    let grid = document.createElement('div');
    grid.classList.add('grid');
    grid.style.backgroundColor = 'purple';
    grid.style.border = '1px solid beige';
    container.appendChild(grid);
}

