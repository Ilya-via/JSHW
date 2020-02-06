var name = prompt('Ваше имя', name);
var login = prompt('Введите логин (admin)', login);
var pass = prompt('Ваш пароль (nimda)', pass);
if (login === 'admin' && pass === 'nimda') {
    alert('Добро пожаловать,' + name + ' Вы успешно вошли на сайт.');
}
else alert('Введён неверный логин или пароль.');