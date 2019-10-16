document.write('<h1>Задание 11</h1>'+'<style> h1 {padding: 15px 0 0 0; font-size: 26px;} </style>');
var value = prompt('Введите высоту треугольника', value);
var a = 1;
var b = value;
var arr = [a][b];
for (var i = 0; i < b; i++) {
    for (var j = 0; j < b - i; j++) {
        document.write('<br/>');
    }
    for (var j = b - 2 * i; j <= b; j++) {
        document.write('^');
    }           
}


