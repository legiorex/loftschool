function sum (a, b) {
        return a * b;
    };



var wraper = function (func) {
    for (var i = 1; i < arguments.length; i++){

        console.log ('var: ' + arguments[i]);
    }



    return function () {
        return func.apply (context, arguments);


    };
}
var result = wraper(sum, 5, 10);
console.log( result() );

