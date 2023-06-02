// function declaration
function walk() {
   console.log('function declaration walk.');
}

walk();

//named function expression
let run = function myWalk() {
   console.log('named function expression');
   let person = { name: 'ali', age: 22 };
   return person;
}
let move = run;
//console.log(run.person.age);
let x = { name: 'ali', age: 22 };
console.log(x.name);
