console.log('%cЗадание 1', 'padding: 20px 0 0 0; font-weight: bold;');
var StarLine = '*';
var space = ' ';
var userName, userSurname, userPatronymic, userGroup;

switchName();
switchSurname();
switchPatronymic();
switchGroup();

makeText()

function switchName() {
    userName = prompt('Введите Ваше имя', userName);
    itStringNullName(userName)
}
function itStringNullName(item) {
    if (item == 0 || item === null) {
        alert('Введите корректное значение', '');
        switchName()
    }
}

function switchSurname() {
    userSurname = prompt('Введите Вашу фамилию', userSurname);
    itStringNullSurname(userSurname)
}
function itStringNullSurname(item) {
    if (item == 0 || item === null) {
        alert('Введите корректное значение', '');
        switchSurname()
    }
}

function switchPatronymic() {
    userPatronymic = prompt('Введите Ваше отчество', userPatronymic);
    itStringNullPatronymic(userPatronymic)
}
function itStringNullPatronymic(item) {
    if (item == 0 || item === null) {
        alert('Введите корректное значение', '');
        switchPatronymic()
    }
}

function switchGroup() {
    userGroup = +prompt('Введите номер Вашей группы', userGroup);
    itNumb(userGroup)
}
function itNumb(userGroup) {
    if (userGroup == 0 || !Number.isInteger(userGroup) || userGroup < 0) {
        alert('Введите натуральное число', '');
        switchGroup()
    }
}

function makeText() {
    var secondLine = ('Домашняя работа: "Функции"');
    var length = secondLine.length,
        maxLength = length;
    var thirdLine = ('Выполнил: студент гр.' + userGroup);
    length = thirdLine.length;
    if (length > maxLength) {
        maxLength = length;
    }

    var fourthLine = (`${userSurname} ${space}${userName} ${space} ${userPatronymic}`);
    length = fourthLine.length;
    if (length > maxLength) {
        maxLength = length;
    }
    console.log(StarLine.repeat(maxLength + 5));
    console.log(`* ${secondLine} ${space.repeat(maxLength - secondLine.length)} *`);
    console.log(`* ${thirdLine} ${space.repeat(maxLength - thirdLine.length)} *`);
    console.log(`* ${fourthLine} ${space.repeat(maxLength - fourthLine.length)} *`);
    console.log(StarLine.repeat(maxLength + 5));
}