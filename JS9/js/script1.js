var massive = [
    ["Mallory", "Everest", "Mont Blanc", "Pillar Rock"],
    ["Mawson", "South Pole", "New Hebrides"],
    ["Hillary", "Everest", "South Pole"]
];



var resultStr = [];
var massiveHeight = massive.length; // число explorer-ов


// Добавление toponym-ов в массив без проверки на копии
for (let a = 0; a < massive.length; a++) {
    for (let i = 1; i < massive[a].length; i++) {
        resultStr.push(massive[a][i]); // massive[a][b] - выбранный toponym
    }
}


function arrayUnique(arr) {
    return arr.filter((e, i, a) => a.indexOf(e) == i)
}

// Осортированные toponym-ы в одном массиве: "каждый является строкой".
var result = (arrayUnique(resultStr));


// Осортированные toponym-ы лежащие: "каждый в отдельном массиве".
var finalMassive = [];
for (let i = 0; i < result.length; i++) {
    finalMassive.push([result[i]]);
}

// Проверка на копии
for (let i = 0; i < massive.length; i++) { // Внутри 3-х строк
    for (let a = 0; a < result.length; a++) {
        for (let b = 1; b < massive[i].length; b++) {
            if (result[a] == massive[i][b]) {

                // massive[i]        Для строки
                // massive[i][b]     Для значений строки
                // result[a]         выбираю toponym-строку
                // finalMassive[1]   выбираю toponym-массив
                // massive[i][0]     explorer

                if (i == 0) { finalMassive[a].push(massive[0][0]) }
                if (i == 1) { finalMassive[a].push(massive[1][0]) }
                if (i == 2) { finalMassive[a].push(massive[2][0]) }

            }
        }
    }
}
console.info(massive);
console.info(finalMassive);