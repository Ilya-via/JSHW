console.log('%cЗадание 4', 'padding: 20px 0 0 0; font-weight: bold;');
var massive = ['10', '20', '30', '50', '235', '3000'];
var d = massive.length;
for (var i = 0; i < d; i++) {
    str = massive[i] + "";
    if (str[0] === '1' || str[0] === '2' || str[0] === '5') {
        console.log(massive[i]);
    }
}