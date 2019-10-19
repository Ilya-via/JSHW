console.log('%cЗадание 2', 'padding: 20px 0 0 0; font-weight: bold;');
function isInteger(num) {
    return (num ^ 0) === num;
}

function triangleHeigt() {
    var triangleHeight;
    if ((isInteger(triangleHeight = +prompt('Введите высоту треугольника', ''))) == true) {

        var i = 0, j = 0;
        var space = "",
            check = "";

        while (i < triangleHeight) {
            space = "";
            check = "";
            for (j = 0; j < triangleHeight - i; j++) space += " ";
            for (j = 0; j < 2 * i + 1; j++) check += "*";
            console.log(space + check);
            i++;
        }
    }

    // else if (triangleHeight = 0) {
    //     alert('Введите натуральное число', '');
    //     triangleHeigt()
    // }
    else {
        alert('Введите натуральное число', '');
        triangleHeigt()
    }
}
triangleHeigt()

