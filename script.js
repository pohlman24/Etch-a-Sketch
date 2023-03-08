const container = document.querySelector('#container');
const RED = '#F65058FF';
const YELLOW = '#FBDE44FF';
const LIGHT_GRAY = 'rgb(71, 87, 123)';
const NAVY = '#28334AFF';

let paintMode = false;
let redMode = true;
let randomMode = false;
let borderOn = true;
let colorTrack = false;
window.grid_size = 16;

// makes the default 16x16 Grid
createGrid(16);

function createGrid(gridSize){
  for(i = 0; i< gridSize*gridSize; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('grid');
    gridDiv.id = 'id' + i
    gridDiv.setAttribute('draggable', false); // needs to false or else user can press and hold a square and mess up the paintMode var
    container.appendChild(gridDiv);
    //adds hover feature
    let cell = gridDiv.id
    document.getElementById(cell).addEventListener('mouseenter', () => {
      if(paintMode){
        if(redMode){
          document.getElementById(cell).style.backgroundColor = RED;
        }
        else if(randomMode){
          document.getElementById(cell).style.backgroundColor = randomColor()
        }
        else if (eraserMode){
          document.getElementById(cell).style.backgroundColor = YELLOW;
        }
      }
    });
    // need this so that the init clicked square changes color too
    document.getElementById(cell).addEventListener('mousedown', () => {
      if(redMode){
        document.getElementById(cell).style.backgroundColor = RED;
      }
      else if(randomMode){
        document.getElementById(cell).style.backgroundColor = randomColor()
      }
      else if (eraserMode){
        document.getElementById(cell).style.backgroundColor = YELLOW;
      }
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

// used to change the toggle on/off background color of buttons
function setBackgroundColor(DOMelement){
  let random = document.getElementById('random_brush')
  let red = document.getElementById('red_brush')
  let eraser = document.getElementById('eraser')
  let buttonList = [random, red, eraser];

  for (let i=0; i<buttonList.length; i++){
    if(buttonList[i] == DOMelement){
      buttonList[i].style.backgroundColor = LIGHT_GRAY;
    }
    else {
      buttonList[i].style.backgroundColor = NAVY;
    }
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
  (!borderOn ? document.getElementById("border").style.backgroundColor = NAVY : document.getElementById("border").style.backgroundColor = LIGHT_GRAY)

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

function eraserBtn(){
  eraserMode = true;
  randomMode = false;
  redMode = false
  container.style.cursor = 'url("Assets/eraser-solid.svg") 5 15, auto';
  setBackgroundColor(document.getElementById('eraser'));
}

function randomBrushBtn(){
  randomMode = true;
  redMode = false;
  eraserMode = false;
  container.style.cursor = 'url("Assets/brush_FILL1_wght400_GRAD0_opsz24.png") 5 15, auto';
  setBackgroundColor(document.getElementById('random_brush'));
}
function redBrushBtn(){
  randomMode = false;
  redMode = true;
  eraserMode = false;
  container.style.cursor = 'url("Assets/brush_FILL1_wght400_GRAD0_opsz24.png") 5 15, auto';
  setBackgroundColor(document.getElementById('red_brush'));
}

function paintModeSwitch(){
  (!paintMode ? paintMode = true : paintMode = false);
}

// event listeners for buttons
document.getElementById('new_grid').addEventListener("click", newGridBtn);
document.getElementById('clear').addEventListener("click", clearBtn);
document.getElementById('border').addEventListener('click', borderBtn);
document.getElementById('random_brush').addEventListener('click', randomBrushBtn);
document.getElementById('red_brush').addEventListener('click', redBrushBtn);
document.getElementById('eraser').addEventListener('click', eraserBtn);
// these two are for checking if the user as clicked the screen -- used for click and drag to paint
document.documentElement.addEventListener('mousedown', paintModeSwitch);
document.documentElement.addEventListener('mouseup', paintModeSwitch)
