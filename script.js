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
  console.log(window.grid_size);
  for(n = 0; n < window.grid_size * window.grid_size; n ++) {
    let cell = 'id' + hide_current_div[z] + n
    console.log(cell);
    document.getElementById(cell).style.backgroundColor = '#FBDE44FF'; // color yellow
  }
}

/*
function new_clear(numGrid) {
  for(n = 0; n< numGrid; n ++) {
    let cell = 'id' + hide_current_div[z] + n
    document.getElementById(cell).style.backgroundColor = '#FBDE44FF'; // color yellow
  }
}
*/
function new_grid(idNum) {
  let root = document.documentElement;
  window.grid_size = parseInt(prompt('What Grid Size?'));
  hide();
  z = z + 1;
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
  function hide() {    // idNum is the letter from the array currently on screen...... n is the number of each specfic grid
    for(n = 0; n< 256; n ++) {
    let cell = 'id' + hide_current_div[z] + n;
    console.log('hide ' + cell);
    document.getElementById(cell).style.display = 'none';
    }
  }
}
/*
function new_hide(idNum, numGrid) {
  x = x + 1;
  for(n = 0; n< numGrid; n ++) {
  let cell = 'id' + idNum + n;
  document.getElementById(cell).style.display = 'none';
  }
}
*/
/*
function clear_act(){
  if (z == 0){
    clear();
  }else {
    new_clear(window.value);
  }
}
*/

// event listeners for buttons


  document.getElementById('new_grid').addEventListener("click", function(){new_grid(hide_current_div[z])});
  document.getElementById('clear').addEventListener("click", clear);

  /*
need to make a new function for changing color and clear and hide for when after you click new grid one time.

so i can change the new_grid so that it takes a parameter of 'A' and then it clears the current grid and makes a new grid with the ID of 'id0'

then i will need a new new_grid function but used for everytime besides the frist time that will clear 'idA' and replace it with 'id1' and then use the ++ so that
   */
