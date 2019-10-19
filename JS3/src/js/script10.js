console.log('%cЗадание 10', 'padding: 20px 0 0 0; font-weight: bold;');
var massiveForSumm = [1, -8, 0, 13, 76, 8, 7, 0, 22, 0, 2, -2, 2];
console.log(massiveForSumm);
var b = massiveForSumm.length;
var firstValue = massiveForSumm.indexOf(0, 0);
var lastValue = massiveForSumm.lastIndexOf(0, b - 1);

var s = 0;
for (var i = firstValue; i <= lastValue; i++) {
    for (var j = massiveForSumm[i]; i <= lastValue; i++) {
        s += j;
        break;
    }
}
console.log('%cСумма элементов между первым и последним нулём в массиве =','color: green; font-weight: bold;' , s);