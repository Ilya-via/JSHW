var btn = document.querySelector("#getNews");
var progressBar = document.querySelector(".progress");
var progressBarEl = document.querySelector(".progress-bar");

btn.addEventListener('click', getNews);

function getNews() {
    btn.setAttribute('disabled', true);
    initProgressBar();
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(function (json) {
            createNews(json)
        })
}

function createNews(news) {
    setTimeout(function () {
        var itemsBlock = document.querySelector(".items");
        for (var i = 0; i < news.length; i++) {
            var title = news[i].title;
            var body = news[i].body;
            var el = document.createElement('div');
            el.innerHTML = '<div class="panel panel-default">' + '<div class="panel-heading">' + title + '</div>' + '<div class="panel-body">' + body + '</div>' + '</div>';
            itemsBlock.appendChild(el);
        }
    }, 2900)

    setTimeout(function () {
        btn.removeAttribute('disabled');
    }, 3000)
}

function initProgressBar() {
    progressBar.classList.remove('hidden');
    var width = 0;
    function makeBigger() {
        width = width + 10;
        progressBarEl.style.width = width + '%';
        if (width !== 100) {
            setTimeout(makeBigger, 300)
        }
    }
    makeBigger()
}