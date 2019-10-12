console.log('%cЗадание 2', 'padding: 20px 0 0 0; font-weight: bold;');
var massive = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (var i = 0; i < massive.length; i++) {
    if (massive[i] > -2) continue;
    if (massive[i] < -9) continue;
    console.log(massive[i]);
}