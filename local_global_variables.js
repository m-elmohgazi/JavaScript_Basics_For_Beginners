const color='red';//global variable
function start(){
    const  message='hi';//local variable
    console.log(message);
    const color='blue';//local varible with same name of the global variable
    console.log(color);
}

function stop(){
    const message='by';
}
console.log(color);
start();