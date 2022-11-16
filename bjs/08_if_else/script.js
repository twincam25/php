let minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
if (isNaN(minValue) || minValue == -999) {
   minValue = -999;
}
minValue = (minValue < -999) ? -999 : minValue;

let maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
if (isNaN(maxValue) || maxValue == 999) {
    maxValue = 999;
}
maxValue = (maxValue > 999 || maxValue < minValue) ? 999 : maxValue;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
let answerPhraseFail = [
    "Вы загадали неправильное число!\n\u{1F914}",
    "Я сдаюсь..\n\u{1F92F}",
    "Что-то не выходит..\n\u{1F612}"
];
let answerPhraseWin = [
    "Я всегда угадываю\n\u{1F60E}",
    "Постарайтесь получше\n\u{1F60F}",
    "Я ожидал от вас большего\n\u{1F611}"
];


const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.querySelector('#btnRetry').addEventListener('click', () => {
    location.reload();
});


document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            answerFail = answerPhraseFail [ Math.round( Math.random() * 2)];
            answerField.innerText = answerFail;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})


document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue >= maxValue - 1) {
            answerFail = answerPhraseFail [ Math.round( Math.random() * 2)];
            answerField.innerText = answerFail;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
});


document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        answerWin = answerPhraseWin [ Math.round( Math.random() * 2)];
        answerField.innerText = answerWin;
        gameRun = false;
    }
})

