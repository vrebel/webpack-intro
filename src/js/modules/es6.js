var elem;
function sayHello(){
    elem  = document.createElement('div');
    elem.innerText = 'Hello from es6!!!';
    elem.className += 'message';
    document.body.prepend(elem);
}

function cube(x){
    elem.innerText += `\n cube of ${x} is: ${x*x*x}`;
}

function square(x){
    elem.innerText += `\n square of ${x} is: ${x*x}`;
}

sayHello();

export {cube,square}