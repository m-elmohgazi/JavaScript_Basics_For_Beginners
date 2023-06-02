// var => function-scoped
// ES6 (ES2015): let,const => block-scoped
// avoid using the var keyword.

function start(){
    for(let i=0; i < 5 ; i++)
        console.log(i);
    console.log(i);
}
 start();


var color ='red';// the var variable is a global variable and it attached to the window object
function sayHi(){
    console.log('Hi');
}// this is alos a globla function and it attached to the window object.
