function messageVisible() {
    // Находим элемент в DOM
    var elem = document.querySelector("#message");

    //Выведем классы в массив
    var massiveClass = elem.classList;

    // Проверяем есть ли класс (true или false)
    var existenceClass = massiveClass.contains("hidden");
    if (existenceClass == true) {
        massiveClass.remove("hidden");
    }

    setTimeout(function () {
        massiveClass.remove("opacityNone");
    }, 50);
}


function messageUnvisible() {
    var elem = document.querySelector("#message");
    var massiveClass = elem.classList;
    massiveClass.add("opacityNone");
    elem.addEventListener("transitionend", addHiddenClass(), false);
}
function addHiddenClass() {
    setTimeout(function () {
        var elem = document.querySelector("#message");
        var massiveClass = elem.classList;
        massiveClass.add("hidden");
    }, 1100);
}

// Animated scroll
var eventObj = {
    appended: ""
};
$(window).scroll(function () {
    var scroll = $(document).scrollTop();
    if (scroll > 1) {
        if (eventObj.appended == "") {
            eventObj.appended = false;
        }
        if (!eventObj.appended) {
            $('.btn-scrollUp').removeClass('invisible');
            setTimeout(function () {
                $('.btn-scrollUp').removeClass("opacityNone");
                eventObj.appended = true;
            }, 50);
        }

    } else if (eventObj.appended) {
        $('.btn-scrollUp').addClass("opacityNone");
        setTimeout(function () {
            $('.btn-scrollUp').addClass("invisible");
            eventObj.appended = false;
        }, 250);
    }
});

$(document).ready(function () {
    $('.btn-scrollUp').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 150)
    });
});

function selectionScrollButton() {
    scaleTransform('.btn-scrollUp');
}
function noselectionScrollButton() {
    unscaleTransform('.btn-scrollUp');
}
function scaleTransform(value) {
    $(value).css("-o-transform", 'scale(1.2, 1.2)');
    $(value).css("-ms-transform", 'scale(1.2, 1.2)');
    $(value).css("-moz-transform", 'scale(1.2, 1.2)');
    $(value).css("-webkit-transform", 'scale(1.2, 1.2)');
    $(value).css("transform", 'scale(1.2, 1.2)');
    $(value).css("boxShadow", 'inset 0 0 10px 4px rgba(0, 0, 0, 0.822)');
}
function unscaleTransform(value) {
    $(value).css("-o-transform", 'scale(1.0, 1.0)');
    $(value).css("-ms-transform", 'scale(1.0, 1.0)');
    $(value).css("-moz-transform", 'scale(1.0, 1.0)');
    $(value).css("-webkit-transform", 'scale(1.0, 1.0)');
    $(value).css("transform", 'scale(1.0, 1.0)');
    $(value).css("boxShadow", '0 0 0 0 rgba(0, 0, 0, 0)');
}