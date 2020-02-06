console.log('%cЗадание 2', 'padding: 20px 0 0 0; font-weight: bold;');
var error = "error";
var alert = "alert";
var msg = "msg";
var msgSent = "msgSent";
var address = window.location.search;

switch (address) {
    case '?alert=form-error': message(error); break;
    case '?alert=hello': message(alert); break;
    case '?alert=form-sent': message(msg); break;
    case '?alert=msg-sent': message(msgSent); break;
    default: console.log("Get параметр не задан!");
}

function message(item) {
    
    function deleteMessage() {
        setTimeout(function () {
            document.body.removeChild(messageContainer);
        }, 5000);
    }

    var messageContainer;
    if (item == "error") {
        messageContainer = document.createElement("div");
        messageContainer.style.cssText = "display: block; position: fixed; background-color: #ffc1ca; right: 50px; top: 50px; width: 300px;  height: 50px; margin-left: -150px; padding-top: 30px; right: 22px;box-shadow: 0 0 10px rgba(0,0,0,0.5); text-align: center; color:#cc0000; font-weight: bold; font-size: 18px;border-radius: 10px;";
        messageContainer.innerHTML = 'Сообщение об ошибке';
        // добавляем только что созданый элемент в дерево DOM
        document.body.appendChild(messageContainer);
        deleteMessage()
        return
    }
    if (item == "alert") {
        messageContainer = document.createElement("div");
        messageContainer.style.cssText = "display: block; position: fixed; background-color: #e2e2e2; right: 50px; top: 50px; width: 300px;  height: 50px; margin-left: -150px; padding-top: 30px; right: 22px;box-shadow: 0 0 10px rgba(0,0,0,0.5); text-align: center; color:#0066fd; font-size: 18px; border-radius: 10px;";
        messageContainer.innerHTML = 'Добро пожаловать на сайт!';
        document.body.appendChild(messageContainer);
        deleteMessage()
        return
    }
    if (item == "msg") {
        messageContainer = document.createElement("div");
        messageContainer.style.cssText = "display: block; position: fixed; background-color: #d4feca; right: 50px; top: 50px; width: 300px;  height: 50px; margin-left: -150px; padding-top: 30px; right: 22px;box-shadow: 0 0 10px rgba(0,0,0,0.5); text-align: center; color:#006600; font-weight: bold; font-size: 18px;border-radius: 10px;";
        messageContainer.innerHTML = 'Ваше сообщение отправлено!';
        document.body.appendChild(messageContainer);
        deleteMessage()
        return
    }
    if (item == "msgSent") {
        messageContainer = document.createElement("div");
        messageContainer.style.cssText = "display: block; position: fixed; background-color: #d4feca; right: 50px; top: 50px; width: 300px;  height: 50px; margin-left: -150px; padding-top: 30px; right: 22px;box-shadow: 0 0 10px rgba(0,0,0,0.5); text-align: center; color:#006600; font-weight: bold; font-size: 18px;border-radius: 10px;";
        messageContainer.innerHTML = 'Вам письмо!';
        document.body.appendChild(messageContainer);
        deleteMessage()
        return
    }
}