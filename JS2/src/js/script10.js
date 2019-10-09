var months = prompt('Введите номер месяца', months);
var monthsNumb = Number(months);
var season = Number;
switch(monthsNumb) {
    case 1: season = 1; break;
    case 2: season = 1; break;
    case 3: season = 2; break;
    case 4: season = 2; break;
    case 5: season = 2; break;
    case 6: season = 3; break;
    case 7: season = 3; break;
    case 8: season = 3; break;
    case 9: season = 4; break;
    case 10: season = 4; break;
    case 11: season = 4; break;
    case 12: season = 1; break;
    default: alert('Такого месяца нет.');
}
if (monthsNumb > 0 && monthsNumb < 13) {
    alert(season);
}