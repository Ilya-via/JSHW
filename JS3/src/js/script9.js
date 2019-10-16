console.log('%cЗадание 9', 'padding: 20px 0 0 0; font-weight: bold;');
var arr = [1, '', 2, '', 3, '', '', 5, '', ''];
var count = 0;
var b = arr.length;
for (var i = 0; i < b; i++) {
    if (arr[i] == '') {
        count++;
    }
}
console.log(count);