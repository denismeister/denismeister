var num = prompt('Веедите число.', '');
var exp = prompt('Веедите степень.', '');

var j = 1;
for (var i = 0; i < exp; i++) {
    j = j * num;
}

console.log(j);
alert("Результат: " + j);