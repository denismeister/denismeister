var arr = [''];
var i = 0;

do {
    arr[i] = prompt("Заполните таблицу именами", '');
    i++;
} while (i < 5);

console.log(arr);

var name = prompt('Введите имя для проверки', '');

var signedIn = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === name) {
        signedIn = true;
    }
}

if (signedIn === true) {
    alert([name] + ', вы успешно вошли');
} else {
    alert('Ваше имя не найдено');
}