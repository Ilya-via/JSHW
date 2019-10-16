console.log('%cЗадание 8', 'padding: 20px 0 0 0; font-weight: bold;');
// var massive = [12, false, 'Текст', 4, 2, -5, 0];
// console.log(massive);
// massive.reverse();
// console.log(massive);

var arr = [12, false, 'Текст', 4, 2, -5, 0];
var box = [];
var b = arr.length;
for (var i = 0; i < b / 2; i++) {
    box = arr[i];
    arr[i] = arr[b - i - 1];
    arr[b - i - 1] = box;
}
console.log(arr);