# JSHW
### **Решение типовых задач по JS для повышения уровня знаний и навыков.**
<br>
<br>

<h2>JS5</h2>
<b>Предлагается ввести один из 4-х GET паремтров, после чего на экран выводиться соответствующий popUp.</b>
<br>
<ul>
    <li>?alert=form-error – показывается сообщение об ошибке отправки формы (тип error);</li>
    <li>?alert=hello – сообщение об успешной отправки формы (тип alert);</li>
    <li>?alert=form-sent – «Добро пожаловать на сайт!» (тип msg)</li>
    <li>?alert=msg-sent – «Вам письмо!» (тип alert)</li>
</ul>
<br>

<h2>JS6</h2>
<b>Плавное скрытие элементов страницы.</b>
<br>
<ul>
    <li>Через setTimeout значение opacity изменяетя от 0 до 1.</li>
    <li>После этого удаляется свойство display: none у блока, имеющего .hidden.</li>
</ul>
<br>

<h2>JS7</h2>
<ul>
    <li>С сайта jsonplacehlider.typicode.com/posts загружается информация, которая формируется в блок новостей со своим заголовком и, собственно, новостями.</li>
    <li>Добавлен Progress Bar.</li>
    <li>Использован Bootstrap.</li>
</ul>
<br>
<br>

<h2>JS8</h2>
<b>Простая форма на Bootstrap с валидацией</b>
<br>
<br>
<br>

<h2>JS9</h2>
            <div>
            <b>Дан список, в которой хранятся исследователи и топонимы (имена мест) где они бывали. <br> Список имеет
                следующий формат:</b>
            <pre>
[
    [explorer1, toponym1, toponym2, ...],
    [explorer2, toponym2, toponym3, ...],
    [explorer3, toponym4, toponym1, ...],
    ...
]</pre>
        </div>
        <b>Надо развернуть этот список, таким образом, чтобы на первом месте оказался топоним, а на остальных
            исследователи.</b>

<h3>Формат ввода</h3>       
  <pre>
 [
    ["Mallory", "Everest", "Mont Blanc", "Pillar Rock"],
    ["Mawson", "South Pole", "New Hebrides"],
    ["Hillary", "Everest", "South Pole"]
 ]</pre>

<h3>Формат вывода</h3>
   <pre>
[
    ["Everest", "Hillary", "Mallory"],
    ["South Pole", "Hillary", "Mawson"],
    ["Mont Blanc", "Mallory"],
    ["Pillar Rock", "Mallory"],
    ["New Hebrides", "Mawson"]
]
</pre>
