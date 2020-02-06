var months = prompt('Введите номер месяца чтобы получить пору года', months);
var monthsNumb = Number(months);
var season = Number;
switch(monthsNumb) {
    case 1: season = "winter"; break;
    case 2: season = "winter"; break;
    case 3: season = "spring"; break;
    case 4: season = "spring"; break;
    case 5: season = "spring"; break;
    case 6: season = "summer"; break;
    case 7: season = "summer"; break;
    case 8: season = "summer"; break;
    case 9: season = "autumn"; break;
    case 10: season = "autumn"; break;
    case 11: season = "autumn"; break;
    case 12: season = "winter"; break;
    default: alert('Такого месяца нет.');
}
if (monthsNumb > 0 && monthsNumb < 13) {
    alert(season);
}