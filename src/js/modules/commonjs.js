var elem;

function sayHello() {
    elem = document.createElement('div');
    elem.innerText = 'Hello from commonJS!!';
    document.body.prepend(elem);
}

function square(x) {
    elem.innerText += `\n square of ${x} is ${x*x}`;
}

function cube(x) {
    elem.innerText += `\n cube of ${x} is ${x*x*x}`;
}

sayHello();

module.exports = {
    cube: cube,
    square: square
}