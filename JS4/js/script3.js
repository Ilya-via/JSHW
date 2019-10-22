console.log('%cЗадание 3', 'padding: 20px 0 0 0; font-weight: bold;');
var email = prompt('Введите Вашу почту', email);
var changer;
var counter45 = 0;
var counter46 = 0;
var counter64 = 0;
var counter95 = 0;
var length = email.length;
var lastDotNumber;

for (var i = 0; i < length; i++) {
    if (letter(email[i])) {
        changer = 0;
        continue;
    }
    else if (sym64(email[i], changer, counter64, i, length)) {
        changer = 1;
        counter64++;
    }
    else if (sym45(email[i], changer, counter45, i, length)) {
        changer = 1;
        counter45++;
    }
    else if (sym95(email[i], changer, counter95, i, length)) {
        changer = 1;
        counter95++;
    }
    else if (sym46(email[i], changer, counter46, i, length)) {
        changer = 1;
        counter46++;
    }
    else if (dotSearch(email, length) + 11 ) {
        alert('Нах');
    }
    else {
        alert('Введена неверная почта');
        break;
    }
}

function letter(value) {
    if (value.charCodeAt() >= 97 && value.charCodeAt() <=122 || value.charCodeAt() >= 65 && value.charCodeAt() <= 90 || value.charCodeAt() >= 48 && value.charCodeAt() <= 57) {
        return true;
    }
    else return false;
}

function sym64(value, changer, counter64, i, length) {
    if (value.charCodeAt() === 64 && changer === 0 && counter64 < 2 && i > 1 && i < length - 1) {
        return true;
    }
    else return false;
}

function sym45(value, changer, counter45, i, length) {
    if (value.charCodeAt() === 45 && changer === 0 && counter45 < 2 && i > 0 && i < length - 1) {
        return true;
    }
    else return false;
}

function sym95(value, changer, counter95, i, length) {
    if (value.charCodeAt() === 95 && changer === 0 && counter95 < 2 && i > 0 && i < length - 1) {
        return true;
    }
    else return false;
}

function sym46(value, changer, counter46, i, length) {
    if (value.charCodeAt() === 46 && changer === 0 && counter46 < 2 && i > 0 && i < length - 1) {
        return true;
    }
    else return false;
}

function dotSearch(email, length) {
    for (var i = 0; i < length; i++) {
        if (email[i].charCodeAt() === 46) {
            lastDotNumber = i;
        }
    }
    return lastDotNumber;
}
