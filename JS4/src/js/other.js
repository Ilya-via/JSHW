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


// Accordion
$(document).ready(function () {
    $(".set > a").on("click", function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass("active");
            $(this).siblings('.content').slideUp(200);
          



        } else {
                       $(".set > a").removeClass("active");
            $(this).addClass("active");
            
           
            $('.content').slideUp(200);
            $(this).siblings('.content').slideDown(200);
        }
    });
});