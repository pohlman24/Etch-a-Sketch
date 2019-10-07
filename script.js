const container = document.querySelector('#container');
const gridDiv = document.createElement('div');
let hide_current_div = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; //list to get ride of current grid
let z = 0;  //
window.grid_size = 16;

//makes the default 16x16 Grid
for(i = 0; i< 256; i++) {
  const gridDiv = document.createElement('div');
  gridDiv.classList.add('grid');
  gridDiv.id = 'id' + hide_current_div[z] + i
  container.appendChild(gridDiv);
}
// color changer as hover
for(n = 0; n< 256; n ++) {
  let cell = 'id' + hide_current_div[z] + n
  document.getElementById(cell).addEventListener('mouseover', function (){
    document.getElementById(cell).style.backgroundColor = '#F65058FF'; //color red
  })
}
// function for clear button
function clear() {
  for(n = 0; n < window.grid_size * window.grid_size; n ++) {
    let cell = 'id' + hide_current_div[z] + n
    document.getElementById(cell).style.backgroundColor = '#FBDE44FF'; // color yellow
  }
}
function new_grid() {
  let root = document.documentElement;
  window.grid_size = parseInt(prompt('What Grid Size?'));
  let grid_size = window.grid_size
  console.log('old z ' + z);
  hide();
  z = z + 1;
  console.log('new z ' + z);
  root.style.setProperty('--grid_row', grid_size);
  root.style.setProperty('--grid_col', grid_size);
    //puts new grid on screen
  for(t = 0; t < grid_size * grid_size ; t++) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('grid');
    gridDiv.id = 'id' + hide_current_div[z] + t;
    container.appendChild(gridDiv);
      //adds hover feature
    let cell = gridDiv.id
    document.getElementById(cell).addEventListener('mouseover', function (){
      document.getElementById(cell).style.backgroundColor = '#F65058FF'; //color red
    })
}
// --------------------------------part of function new_grid----------------------------------- function to get ride of current grid on screen
  function hide() {
    if (z == 0){
      for(n = 0; n< 256; n ++) {
      let cell = 'id' + hide_current_div[z] + n;
      document.getElementById(cell).style.display = 'none';
      }
    }else {
      for(n = 0; n< window.grid_size * window.grid_size; n ++) {
      let cell = 'id' + hide_current_div[z] + n;
      console.log(hide_current_div[z])
      document.getElementById(cell).style.display = 'none';
      }
    }
  }
}

// event listeners for buttons
  document.getElementById('new_grid').addEventListener("click", function(){
    new_grid()
  });
  document.getElementById('clear').addEventListener("click", clear);

// right now when you try to go from a new grid to a bigger new grid it doesnt work
// but you can go from a bigger one to smaller one, but the contaienr gets messed up at bottom
