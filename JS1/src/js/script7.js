console.log('%cЗадание 8', 'padding: 20px 0 0 0; font-weight: bold;');

function f(x) {
    var y = a + 2 * (x - b) - 16;
    return y;
}
var x = 5,
    a = 8,
    b = 3;

do {
    x += 0.1;
    y = f(x);
    if (Math.abs(f(x)) < 0.1) {
        console.log("1) x = " + x.toFixed(5));
    }
} while (x < 8);


function g(x) {
    var y = b * (x + 15) - a - 6 * x;
    return y;
}
var x = -20.0;

do {
    x += 0.01;
    y = g(x);
    if (Math.abs(g(x)) < 0.01) {
        console.log("2) x = " + x.toFixed(5));
    }
} while (x < 20.0);


function z(x) {
    var y = x + 2 * x + a * x + b * x - 23772;
    return y;
}
var x = 1697,
    k = 8 / 14;
do {
    x += 0.001;
    y = z(x);
    if (Math.abs(z(x)) < 0.001) {
        console.log("3) x = ", (x + k).toFixed(6));
    }
} while (x < 1700);


console.log('%cЗадание 9', 'padding: 20px 0 0 0; font-weight: bold;');
console.log('Бывало, спит у ног собака,');
console.log('костер занявшийся гудит,');
console.log('и женщина из полумрака');
console.log('%cглазами зыбкими глядит.', 'padding: 0 0 30px 0;');
console.log('Потом под пихтою приляжет');
console.log('на куртку рыжую мою');
console.log('%cи мне, адумчивая, скажет:', 'padding: 0 0 30px 0;');
console.log('«А ну-ка, спой!..» - и я пою.');


console.log('%cЗадание 10', 'padding: 20px 0 0 0; font-weight: bold;');
var string_1 = ' индо земля зашаталась под ногами - и вырос',
    string_2 = ' и заревел он голосом диким...',
    string_3 = ' блеснула молния и ударил гром,',
    string_4 = ' а так какое - то чудище, страшное и мохнатое,',
    string_5 = ' как будто из - под земли, перед купцом:',
    string_6 = 'Он подошёл и сорвал аленький цветочек.',
    string_7 = ' зверь не зверь, человек не человек,',
    string_8 = ' В ту же минуту, безо всяких туч,';
var text = string_6 + string_8 + string_3 + string_1 + string_5 + string_7 + string_4 + string_2;
console.log(text);