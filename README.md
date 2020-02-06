# JSHW
Решение типовых задач по JS для повышения уровня знаний и навыков.


<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Test explorers</title>
 
</head>

<body>
    <div class="container">
        <div>
            <h4>Дан список, в которой хранятся исследователи и топонимы (имена мест) где они бывали. <br> Список имеет
                следующий формат:</h4>
            <p> [ </p>
            <p class="space">[explorer1, toponym1, toponym2, ...],</p>
            <p class="space">[explorer2, toponym2, toponym3, ...],</p>
            <p class="space">[explorer3, toponym4, toponym1, ...],</p>
            <p class="space">...</p>
            <p> ]</p>
        </div>
<h4>Надо развернуть этот список, таким образом, чтобы на первом месте оказался топоним, а на остальных
                исследователи.</h4>
        <div>
            <h2>Формат ввода</h2>
            <p>[</p>
            <p class="space">["Mallory", "Everest", "Mont Blanc", "Pillar Rock"],</p>
            <p class="space">["Mawson", "South Pole", "New Hebrides"],</p>
            <p class="space">["Hillary", "Everest", "South Pole"]</p>
            <p>]</p>
        </div>

        <div>
            <h2>Формат вывода</h2>
            <p>[</p>
            <p class="space">["Everest", "Hillary", "Mallory"],</p>
            <p class="space">["South Pole", "Hillary", "Mawson"],</p>
            <p class="space">["Mont Blanc", "Mallory"],</p>
            <p class="space">["Pillar Rock", "Mallory"],</p>
            <p class="space">["New Hebrides", "Mawson"]</p>
            <p>]</p>
        </div>

 </body>

</html>
