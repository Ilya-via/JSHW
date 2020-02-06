document.write('<h1>Задание 5</h1>' + '<style> h1 {padding: 15px 15px 7px; font-size: 26px;} </style>');
var massive = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
for (var i = 0; i < massive.length; i++) {
    if (i == 5 || i == 6) {
        document.write('<b><span>' + massive[i] + '&#32;<span></b>');
    }
    else {
        document.write('<span>' + massive[i] + '</span>' + '  ');
    }
}