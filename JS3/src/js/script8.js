console.log('%cЗадание 8', 'padding: 20px 0 0 0; font-weight: bold;');
// var massive = [12, false, 'Текст', 4, 2, -5, 0];
// console.log(massive);
// massive.reverse();
// console.log(massive);

var massiveForReverse = [12, false, 'Текст', 4, 2, -5, 0];
var box = [];
var b = massiveForReverse.length;
for (var i = 0; i < b/2; i++) {
    box = massiveForReverse[i];
    massiveForReverse[i] = massiveForReverse[b - i - 1];
    massiveForReverse[b - i - 1] = box;
}
console.log(massiveForReverse);
