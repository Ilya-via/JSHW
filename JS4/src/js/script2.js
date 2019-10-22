console.log('%cЗадание 2', 'padding: 20px 0 0 0; font-weight: bold;');
triangleHeigt()
function isInteger(num) {
    return (num ^ 0) === num;
}

function makeFirstTriangle(num) {
    var i = 0, j = 0;
    var space = "",
        check = "";

    while (i < num) {
        space = "";
        check = "";
        for (j = 0; j < num - i; j++) space += " ";
        for (j = 0; j < 2 * i + 1; j++) check += "*";
        console.log(space + check);
        i++;
    }
}

function triangleHeigt() {
    var triangleHeight = +prompt('Введите высоту треугольника', '')
    if (!isInteger(triangleHeight) || triangleHeight == 0 || triangleHeight < 0) {
        alert('Введите натуральное число', '');
        triangleHeigt()
    } else {
        makeFirstTriangle(triangleHeight)
        makeSecondTriangle(triangleHeight)
    }
}

function makeSecondTriangle(num) {
    var i = 0, j = 0;
    var space = "",
        check = "";

    while (i < num) {
        space = "";
        check = "";
        for (j = 0; j < i + 1; j++) space += " ";
        for (j = 0; j < 2*num-i*2-1; j++) check += "*";
        console.log(space + check);
        i++;
    }
}