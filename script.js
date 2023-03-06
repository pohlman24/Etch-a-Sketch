const container = document.querySelector('#container');
const RED = '#F65058FF';
const YELLOW = '#FBDE44FF';

let randomMode = false;
let borderOn = true;
window.grid_size = 16;

// makes the default 16x16 Grid
createGrid(16);

function createGrid(gridSize){
  for(i = 0; i< gridSize*gridSize; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('grid');
    gridDiv.id = 'id' + i
    container.appendChild(gridDiv);
    //adds hover feature
    let cell = gridDiv.id
    document.getElementById(cell).addEventListener('mouseover', () => {
      (!randomMode? document.getElementById(cell).style.backgroundColor = RED : document.getElementById(cell).style.backgroundColor = randomColor());
    });
  }
}

function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ')';
} 

// Part of function new_grid-- function to get ride of current grid on screen
  function destroyGrid() {
    for(i = 0; i< window.grid_size * window.grid_size; i++) {
      let cell = 'id' + i;
      let cellid = document.getElementById(cell);
      cellid.remove();
    }
  }

// !---------------------Button Section--------------------------------!

// function for new grid button
function newGridBtn() {
  destroyGrid();
  let root = document.documentElement;
  window.grid_size = parseInt(prompt('What Grid Size?', 16));
  root.style.setProperty('--grid_row', window.grid_size); // using variable--grid_row in css for the grid-template-row
  root.style.setProperty('--grid_col', window.grid_size); // using variable--grid_col in css for the grid-template-column
  //puts new grid on screen
  createGrid(window.grid_size);
}

// function to either remove or add the border
function borderBtn(){
  (borderOn ? borderOn = false : borderOn = true);
  for(n = 0; n< window.grid_size * window.grid_size; n ++) {
    let cell = 'id' + n;
    let cellid = document.getElementById(cell);
    (borderOn ? cellid.style.border = '1px solid gray' :  cellid.style.border = '0');
  }
}

// function for clear button
function clearBtn() {
  for(i = 0; i < window.grid_size * window.grid_size; i++) {
    let cell = 'id' + i
    document.getElementById(cell).style.backgroundColor = YELLOW;
  }
}

function randomBrushBtn(){
  randomMode = true;
}
function redBrushBtn(){
  randomMode = false;
}

// event listeners for buttons
document.getElementById('new_grid').addEventListener("click", newGridBtn);
document.getElementById('clear').addEventListener("click", clearBtn);
document.getElementById('border').addEventListener('click', borderBtn);
document.getElementById('random_brush').addEventListener('click', randomBrushBtn);
document.getElementById('red_brush').addEventListener('click', redBrushBtn);