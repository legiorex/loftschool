/*
var args = [].slice.call(arguments);
const args = Array.from(arguments);
const args = [...arguments];
 */


/*
function bindFunction(fn) {
    var bindArgs = [].slice.call(arguments, 1);

    return function F() {
        return fn.apply(null, bindArgs);
    };
}
*/

function sum() {
    var number = 0;
    for (var i = 1; i < arguments.length; i++){
        number = number + arguments[i];
    }

    return number;

}

function bindFunction(fn, ...rest) {

    console.log('Is fn: ');
    console.log(fn);

    return fn.bind(null, ...rest);
    console.log(fn);

    // newSum is not a function
    // return function() {
    //     return fn.apply(null, ...rest);
    // }


    // var bindArgs = [].slice.call(arguments, 1);
    // return function F() {
    //     var fnArgs = [].slice.call(arguments);
    //     return fn.apply(null, bindArgs.concat(fnArgs));
    // };

}

var newSum = bindFunction(sum, 2, 4, 5, 6);

// console.log(sum.apply(null, [5, 10]) === sum(5, 10));

console.log(newSum());