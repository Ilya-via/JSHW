var form = document.querySelector('.contactForm');
var requireInpunts = document.querySelectorAll('.require'); // Выводит псевдомассив


form.addEventListener('submit', function (event) {
    event.preventDefault()
    removeAlerts();
    
    if (checkInputs() && checkEmails()) { // если обе функции true - debugger выполниться только в этом случае или позже вставленная функция отправки формы на бэк.
debugger
    }
});

function checkInputs() {
    var emptyInpunts = 0;
    for (var i = 0; i < requireInpunts.length; i++) { // перебираем input-ы
        if (!requireInpunts[i].value) {
            emptyInpunts++;
            var errorMessage = document.createElement('span'); //создали span
            errorMessage.classList.add('help-block'); // Добавили в span класс .help-block
            errorMessage.innerHTML = 'Введите текст';
            requireInpunts[i].classList.add('errorMessage');
            requireInpunts[i].parentElement.insertBefore(errorMessage, null); //добавить span с ошибкой после input в родительском div-e 
        }
    }
    if (emptyInpunts === 0) {
        return true;
    } else {
        return false;
    }
}

function checkEmails() { // Ищем дубляжи email
    var email = document.querySelector('#email');
    var confirmEmail = document.querySelector('#ConfirmEmail');
    if (email.value === confirmEmail.value) {
        return true
    } else if (email.value && confirmEmail.value) { //  оно взлетит если email и confirmEmail не пустые
        var errorMessage = document.createElement('span'); //создали span
        errorMessage.classList.add('help-block'); // Добавили в span класс .help-block
        errorMessage.innerHTML = 'Емейлы не совпадают'; // Добавили в span 'keke'
        email.classList.add('errorMessage');
        confirmEmail.classList.add('errorMessage');
        email.parentElement.insertBefore(errorMessage, null); //добавить span с ошибкой после input в родительском div-e

        return false
    }
}

function removeAlerts() { // УДаляем сообщения 
    var alerts = document.querySelectorAll('.help-block'); // Находим все input-ы с ошибками
    for (var i = 0; i < alerts.length; i++) {
        alerts[i].remove();
    }
    for (var i = 0; i < requireInpunts.length; i++) {
        requireInpunts[i].classList.remove('errorMessage');
    }
}