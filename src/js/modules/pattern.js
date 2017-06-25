var pattern = (function () {
    'use strict';
    var elem;

    function sayHello(){
        elem = document.createElement('div');
        elem.innerText = 'Hello from module pattern!';
        document.body.prepend(elem);
    }
    function _square(x){
        elem.innerText += `\n square of ${x} is ${x*x}`;
    }
    function _cube(x){
        elem.innerText += `\n cube of ${x} is ${x*x*x}`;
    }

    sayHello();

    return {
        cube: _cube,
        square: _square
    }
}());