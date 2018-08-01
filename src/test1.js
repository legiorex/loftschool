function isAllTrue(array, fn) {
    var a = 0; // переменные нужны для проверки массива
    var b = 0;

    if (( array == 0 ) || (array.length <= 0)) {
        throw new Error("empty array");
    } else if (typeof fn != 'function') {
        throw new Error("fn is not a function");
    } else {

        for (var i = 0; i < array.length; i++) {
            var c = fn(array[i]); // на каждой итерации вызываем fn и в качестве аргумента передаем элемент массива и результат сравнения записываем в с
            if (c == false) { // если результат сравнения false, то увеличиваем переменную b
                b++;
            } else if (c == true) { // если результат сравнения true
                a++; // то увеличиваем переменную a на каждой итерации и она становится равна длине массива
            }
            if (array.length == a) {
                return true; // если a равна длине массива, то true
            } else if (b > 0) {
                return false; // иначе false
            }
        }
    }
}

console.log(isAllTrue([1, 2, 3, 4, 5], n => n < 10));