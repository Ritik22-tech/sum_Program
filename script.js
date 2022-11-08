function add(){
  let a = parseInt(document.getElementById('num1').value);
  let b = parseInt(document.getElementById('num2').value);
  document.getElementById('sum').innerHTML = a+b;
}
function sub(){
  let a = parseInt(document.getElementById('num1').value);
  let b = parseInt(document.getElementById('num2').value);
  document.getElementById('sum').innerHTML = a-b;
}
function mul(){
  let a = parseInt(document.getElementById('num1').value);
  let b = parseInt(document.getElementById('num2').value);
  document.getElementById('sum').innerHTML = a*b;
}

function Done()
{
  let array = parseInt(document.getElementById('arrSize').value)
  for (let a = 0; a < array; a++) {
    document.getElementById('work').innerHTML = `<input type="text" id="arr[a]"/>`;
    continue;
  }
}

// let buddy = prompt("Enter Your age : ")
// buddy = Number.parseInt(buddy)

// function Survey(){
//   let sur = prompt("Please Drive Properly\n Please Enter 1 For Yes\n Please Enter 2 For No")
//   sur = Number.parseInt(sur)
//   if(sur ==1){
//     console.log("Output is shown to the user to be Drive")
//     alert("You can Drive")
//   }
//   else{
//     console.log("Output is Shown to the user You cannot be Drive")
//     alert("Please tick the Ok to the Drive")
//   }
// }

// if(buddy > 18 && buddy < 60){
//   Survey()
// }
// else if(buddy > 60){
//   console.log("Output is shown to the user to be Drive")
//   alert("You can Drive But Drive Safely")
// }
// else{
//   console.log("Output is Shown to the user to cannot Drive")
//   alert("You Can not Be Drive")
// }

const fruits = ['Strawberry', 'Mango'];

// Create a copy using spread syntax.
const fruitsCopy = [...fruits];
// ["Strawberry", "Mango"]
console.log(fruitsCopy)

// Create a copy using the from() method.
const fruitsCopy2 = Array.from(fruitsCopy);
console.log(fruitsCopy2)
// ["Strawberry", "Mango"]
