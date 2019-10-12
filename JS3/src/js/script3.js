console.log('%cЗадание 3', 'padding: 20px 0 0 0; font-weight: bold;');

// Заполнение массива
var arr = [];
for (var i = 22, j = 0; i < 57, j < 35; i++ , j++) {
    arr[j] = (i + 1);
}
console.log(arr);

var arr = [], i = 22, j = 0;
while (i++ < 57, j++ < 35) arr[j - 1] = i;
console.log(arr);

// Сумма
var a = 57, result = 0;
for (var i = 22; i <= a; i++) {
    result = 0;
    for (var j = 1; j <= i; j++) result += j;
}
console.log('Сумма чисел [23;57] = ' + result);