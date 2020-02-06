# JSHW
Решение типовых задач по JS для повышения уровня знаний и навыков.


<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
</head>

<body>
    <div class="container">
        <div>
            <h4>Дан список, в которой хранятся исследователи и топонимы (имена мест) где они бывали. <br> Список имеет
                следующий формат:</h4>
            <span> [ </span>
            <span>[explorer1, toponym1, toponym2, ...],</span>
            <span>[explorer2, toponym2, toponym3, ...],</span>
            <span>[explorer3, toponym4, toponym1, ...],</span>
            <span>...</span>
            <span> ]</span>
        </div>
            <h4>Надо развернуть этот список, таким образом, чтобы на первом месте оказался топоним, а на остальных
                исследователи.</h4>
        
            <h2>Формат ввода</h2>
            <span>[</span>
            <span>["Mallory", "Everest", "Mont Blanc", "Pillar Rock"],</span>
            <span>["Mawson", "South Pole", "New Hebrides"],</span>
            <span>["Hillary", "Everest", "South Pole"]</span>
            <span>]</span>
       

       
            <h2>Формат вывода</h2>
            <span>[</span>
            <span>["Everest", "Hillary", "Mallory"],</span>
            <span>["South Pole", "Hillary", "Mawson"],</span>
            <span>["Mont Blanc", "Mallory"],</span>
            <span>["Pillar Rock", "Mallory"],</span>
            <span>["New Hebrides", "Mawson"]</span>
            <span>]</span>

            
        

 </body>

</html>
