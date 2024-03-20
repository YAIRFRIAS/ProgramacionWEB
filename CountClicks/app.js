/*//number 
let x = 1;
      let y = 10;

      let c = x - y;

      //alert(c);


      // string
      let name = "hola"
      let name_2 = 'hola'
      let name_3 = `hola`

      // boleano
      let a = true && true || false;
      let b = !false;
      let min_number = 1 | 0;



      let button = document.getElementById("btn");

      console.log(button);
*/

const containerClicks = document.getElementById('containerClicks');
const btnIncrement = document.querySelector('.btn-primary');
const btnDecrement = document.querySelector('.btn-secundary');
const btnReset = document.querySelector('.btn-reset');

let counter = 0;
btnIncrement.onclick = function(){
      counter++;
      containerClicks.innerText = counter;
}
console.log(containerClicks);


btnDecrement.onclick = function(){
      counter--;
      containerClicks.innerText = counter;
}
console.log(containerClicks);


btnReset.onclick = () =>{
      counter = 0;
      containerClicks.innerText = counter;
}