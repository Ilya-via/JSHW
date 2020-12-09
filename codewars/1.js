
//  ------------ TASK 1 ------------
// Завершите метод / функцию, чтобы он преобразовывал слова, разделенные тире / подчеркиванием, в верблюжий регистр. Первое слово в выводе должно быть написано с заглавной буквы, только если исходное слово было с заглавной буквы (известное как верхний регистр верблюда, также часто называемый регистром Паскаля).
// toCamelCase("the-stealth-warrior") returns --->  "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") returns --->  "TheStealthWarrior"

function toCamelCase(str) {
    let results = [];
    if (typeof str === 'string') {
        for (let i = 0; i < str.length; i++) {
            if (str[i] == '-') {
                results.push(i);
            }
            if (str[i] == '_') {
                results.push(i);
            }
        }
        let final1 = '', final2 = '', aa;
        final1 = str.substring(0, results[0]);

        for (let k = 0; k < results.length; k++) {
            aa = str.substring(results[k] + 1, results[k + 1])
            final2 = final2 + (aa).charAt(0).toUpperCase() + aa.slice(1);
        }
        return final1 + final2
    } else {
        alert('Введите строку для преобразования');
    }
}

function toCamelCase(str) {
    var regExp = /[-_]\w/ig;
    return str.replace(regExp, function (match) {
        return match.charAt(1).toUpperCase();
    });
}
//  ------------ END ---------------


//  ------------ TASK 2 ------------
// Реализовать функцию различия, которая вычитает один массив из другого и возвращает результат. Функция должна удалить все значения из массива a, которые присутствуют в массиве b.
arrayDiff([1, 2, 2, 45, 54, 2, 3, 45, 'ff', 'ff', 45], ['ff', 2, 45, 'ff', 546, 87, 546, 99, 21, 21, 2, -2, -2, 99, 0, 88, 0]);
function arrayDiff(a, b) {
    return a.filter(e => !b.includes(e));
}
//  ------------ END ---------------


//  ------------ TASK 3 ------------
// Ваша цель - вернуть таблицу умножения для числа, которое всегда является целым числом от 1 до 10.
multiTable(5);
function multiTable(number) {
    let b = '', c = '\n';
    for (i = 1; i < 11; i++) {
        if (i == 10) { c = '' }
        b += `${i} * ${number} = ${i * number}${c}`;
    }
    return b;
}
//  ------------ END ---------------


//  ------------ TASK 4 ------------
// Вам будет предоставлен массив уникальных элементов, и ваша задача состоит в том, чтобы переставить значения так, чтобы за первым максимальным значением следовало первое минимальное значение, за которым следовало второе максимальное значение, затем второе минимальное значение и т. д.
solve([40, 1, 5, 200, 324, 234, 55, 2, 76, 0, 54, -5, 77, -20]);
function solve(arr) {
    arr.sort((a, b) => (b - a));
    for (let i = arr.length - 1, k = 1, c = 1; c <= Math.round(arr.length / 2); k = k + 2, c++) {
        arr.splice(k, 0, arr[i]);
        arr.pop()
    }
    return arr
};
//  ------------ END ---------------


//  ------------ TASK 5 ------------
// Ваша задача - написать функцию с именем valid_spacing () или validSpacing (), которая проверяет, имеет ли строка допустимый интервал. Функция должна возвращать True или False.
// Для этого задания допустимый интервал - это один пробел между словами, без начальных или конечных пробелов.
validSpacing('Hello  world')
function validSpacing(s) {
    if (!(s.includes(' '))) {
        return true
    }
    if (s[0] === ' ' || s[`${s.length - 1}`] === ' ') {
        return false
    }
    for (let i = 0, k; i < s.length - 1; i++) {
        if (s[i] === ' ') {
            if (s[i] === s[`${i + 1}`]) {
                return false
            } else return true
        }
    }
}
function validSpacing(s) {
    return s.trim() == s && !s.includes("  ");
}
//  ------------ END ---------------


//  ------------ TASK 6 ------------
// Элемент в массиве является доминирующим, если он больше, чем все элементы справа от него. Вам будет предоставлен массив, и ваша задача - вернуть список всех доминирующих элементов.
solve([67, 54, 27, 85, 66, 88, 31, 24, 49])
function solve(arr) {
    return arr.filter(function (item, index, array) {
        for (i = index + 1; i < array.length; i++) {
            if (item <= array[i]) { return false }
            if (i == array.length - 1) { return true }
        }
        if (index === array.length - 1) { return item }
    });
};
function solve(a) {
    return a.filter((x, i) => a.slice(i + 1).every(z => z < x))
};
//  ------------ END ---------------


//  ------------ TASK 7 ------------
// Задача про цифровой корень
// Сумма цифр числа n имеет такой же остаток при делении на 9, как и число n (доказано).
function digital_root(n) {
    return (n - 1) % 9 + 1;
}
//  ------------ END ---------------


// Метод случайной сортировки
shuffle([1, 2, 2, 45, 54, 2, 3, 45, 'ff', 'ff', 45]);
function shuffle(arr) {
    var j, temp;
    for (var i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}