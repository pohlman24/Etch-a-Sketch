const container = document.querySelector('#container');
const gridDiv = document.createElement('div');

//makes the default 16x16 Grid
for(i = 0; i< 256; i++) {
  const gridDiv = document.createElement('div');
  gridDiv.classList.add('grid');
  gridDiv.id = 'id' + i
  container.appendChild(gridDiv);
}
// color changer as hover
for(n = 0; n< 256; n ++) {
  let reece = 'id' + n
  document.getElementById(reece).addEventListener('mouseover', function (){
    document.getElementById(reece).style.backgroundColor = '#F65058FF'; //color red
  })
}
// function for clear button
function clear(n) {
  for(n = 0; n< 256; n ++) {
    let cell = 'id' + n
    document.getElementById(cell).style.backgroundColor = '#FBDE44FF'; // color yellow
}
}

// Code for new grid
function new_grid() {
  let root = document.documentElement;
  let grid_size = parseInt(prompt('What Grid Size?'));
  hide();
  root.style.setProperty('--grid_row', grid_size);
  root.style.setProperty('--grid_col', grid_size);
    //puts new grid on screen
  for(t = 0; t < grid_size * grid_size ; t++) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('grid');
    gridDiv.id = 'idd' + t
    container.appendChild(gridDiv);
      //adds hover feature
    let cell = 'idd' + t
    document.getElementById(cell).addEventListener('mouseover', function (){
      document.getElementById(cell).style.backgroundColor = '#F65058FF'; //color red
    })
}
// --------------------------------part of function new_grid----------------------------------- function to get ride of current grid on screen
  function hide() {
    for(n = 0; n< 256; n ++) {
    let cell = 'id' + n;
    document.getElementById(cell).style.display = 'none';
    }
  }
}
// event listeners for buttons
  document.getElementById('new_grid').addEventListener("click", new_grid);
  document.getElementById('clear').addEventListener("click", clear);
