// Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
// Функция должна привязать переданные аргументы к функции F и вернуть получившуюся функцию
//

function sum (a, b) {
    return a * b;
}

var bindedSum = sum.bind({
    sum: 10
});



var newSum = bindedSum(sum, 2, 4);


console.log(newSum);


// var newSum = bindFunction(sum, 2, 4);
//
// console.log(newSum());



