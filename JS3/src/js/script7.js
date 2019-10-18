console.log('%cЗадание 7','padding: 20px 0 0 0; font-weight: bold;');
var value = 1;
var arr = [];
for (var i = 0; value != ''; i++) {
    value = prompt('Введите число');
    if (value != '') {
        arr.push(value);
    }
    else continue;
}
console.log(arr);