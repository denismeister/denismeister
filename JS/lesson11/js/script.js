"use strict";
var arr = [];
var i = 0;

do {
    arr[i] = prompt("Заполните таблицу именами", '');
    i++;
} while (i < 5);

console.log(arr);

var name = prompt('Введите имя для проверки', '');

var signedIn = false;
for (i = 0; i < arr.length; i++) {
    if (arr[i] === name) {
        signedIn = true; { break; }
    }
}

if (signedIn) {
    alert([name] + ', вы успешно вошли');
} else {
    alert('Ваше имя не найдено');
}