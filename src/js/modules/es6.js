var elem;
function sayHello(){
    elem  = document.createElement('div');
    elem.innerText = 'Hello from es6!!!';
    elem.className += 'message';
    document.body.prepend(elem);
}

function cube(x){
    elem.innerText += `
     cube of ${x} is: ${x*x*x}`;
}

function square(x){
    elem.innerText += `
    square of ${x} is: ${x*x}`;
}

sayHello();

export {cube,square}