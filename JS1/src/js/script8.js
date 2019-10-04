console.log('%cЗадание 8','padding: 20px 0 0 0; font-weight: bold;');

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

