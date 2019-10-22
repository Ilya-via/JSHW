console.log('%cЗадание 11', 'padding: 20px 0 0 0; font-weight: bold;');
function isInteger(num) {
    return (num ^ 0) === num;
}

function makeTriangle(num) {
  var i = 0, j = 0;
  var space = "",
      check = "";

  while (i < num) {
    space = "";
    check = "";
    for (j = 0; j < num - i; j++) space += " ";
    for (j = 0; j < 2 * i + 1; j++) check += "^";
    console.log(space + check);
    i++;
  }
}

function triangleHeigt() {
    var triangleHeight = +prompt('Введите высоту треугольника', '')
    if (!isInteger(triangleHeight) || triangleHeight == 0)  {
        alert('Введите натуральное число', '');
        triangleHeigt()
    } else {
       makeTriangle(triangleHeight)
    }
}
triangleHeigt()