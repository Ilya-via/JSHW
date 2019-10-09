console.log('%cЗадание 3','padding: 20px 0 0 0; font-weight: bold;');
var string = 'abcde';
// Метод charAt() возвращает указанный символ из строки. Целое число от 0 до длины строки минус 1.
var first = string.charAt(0);
if (first == 'a') {
    console.log('%cда','color: green;');
}
else console.log('%cнет','color: red;');