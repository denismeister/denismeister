"use strict";
var x = prompt('Веедите число.', '');
var n = 0;

while (n <= 1) {
    n = prompt('Введите целую степень, большую 1', '');
}

function exp(x, n) {
    var res = x;

    for (var i = 1; i < n; i++) {
        res *= x;
    }
    return res;
}

console.log(exp(x, n));
alert("Результат: " + [exp(x, n)]);