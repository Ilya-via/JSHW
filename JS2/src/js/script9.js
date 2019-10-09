var name = prompt('Ваше имя', name);
var login = prompt('Введите логин', login);
var pass = prompt('Ваш пароль', pass);
if (login === 'admin' && pass === 'nimda') {
    alert('Добро пожаловать,' + name + 'Вы успешно вошли на сайт.');
}
else alert('Введён неверный логин или пароль.');