console.log('%cЗадание 4','padding: 20px 0 0 0; font-weight: bold;');
var string = 'В некиим царстве, в некиим государстве жил-был богатый купец, именитый человек';
// Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
if(string.indexOf('богатый купец') > 0) {
    console.log('%cбогатый купец','color: green;');
}
else console.log('%cНе найдено','color: red;');