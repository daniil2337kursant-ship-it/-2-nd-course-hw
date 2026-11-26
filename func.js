// //Задание 1
// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(min(8, 4)); 
// console.log(min(6, 6));

// //Задание 2
// function check(number) {
//     if (number % 2 === 0) {
//         return "Число четное";
//     } else {
//         return "Число нечетное";
//     }
// }
// console.log(check(4)); 
// console.log(check(5)); 

// //Задание 3
// function square(number) {
//     console.log(number * number);
// }
// square(5);
// square(10);

// function squareReturn(number) {
//     return number * number;
// }
//     let result = squareReturn(5);
//     console.log(result);
//     console.log(squareReturn(10));

//     //Задание 4
//     function correctAge(age) {
//         if (age < 0) {
//             return 'Вы ввели неправильное значение';
//         } else if (age <= 12) {
//             return 'Привет, друг!';
//         } else {
//             return 'Добро пожаловать!';
//         }
//     }
//     alert(correctAge(prompt('Сколько вам лет?')));

//     //Задание 5
//     function multiply(a, b) {
//         a = Number(a);
//         b = Number(b);
//         if (isNaN(a) || isNaN(b)) {
//             return 'Одно или оба значения не являются числом';
//         } else {
//             return a * b;
//         }
//     }
//     console.log(multiply(5, 10));
//     console.log(multiply(5, 'ljuyl'));

//     //Задание 6
//     function cube() {
//         let n = prompt('Введите число');
//         n = Number(n);
//         if (isNaN(n)) {
//             return 'Переданный параметр не является числом';
//         } else {
//             return `${n} в кубе равняется ${n * n * n}`;
//         }
//     }
//     alert(cube());

//     for (let i = 0; i <= 10; i++) {
//         console.log(`${i} в кубе равняется ${i * i * i}`);
//     }

//     //Задание 7
//     const circle1 = {
//         radius: 5,
//         getArea: function() {
//             return 3.14 * this.radius * this.radius;
//         },
//         getPerimeter: function() {
//             return 2 * 3.14 * this.radius;
//         }
//     };

//     const circle2 = {
//         radius: 10,
//         getArea: function() {
//             return 3.14 * this.radius * this.radius;
//         },
//         getPerimeter: function() {
//             return 2 * 3.14 * this.radius;
//         }
//     };

//     console.log(circle1.getArea());
//     console.log(circle1.getPerimeter());
//     console.log(circle2.getArea());
//     console.log(circle2.getPerimeter());

  
const game = document.querySelector('#game-five_link');

const playButton = game.querySelector('.mini-game__button');

const quiz = [
    {
        question: "Какого цвета небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

playButton.addEventListener('click', () => {

    let score = 0;

    quiz.forEach((item) => {

        let answer = prompt(
            item.question + "\n" + item.options.join("\n")
        );

        if (Number(answer) === item.correctAnswer) {
            score++;
        }

    });

    alert(`Игра завершена! Правильных ответов: ${score} из ${quiz.length}`);

});
//Доп задание 1

const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {

    console.log(arr[i]);

    if (arr[i] === 10) {
        break;
    }
}
//Доп задание 2
const arr2 = [1, 5, 4, 10, 0, 3];
console.log(arr2.indexOf(4));

//Доп задание 3
const arr3 = [1, 3, 5, 10, 20];

console.log(arr3.join(' '));

//Доп задание 4

const arr4 = [];

for (let i = 0; i < 3; i++) {

    arr4[i] = [];

    for (let j = 0; j < 3; j++) {
        arr4[i][j] = 1;
    }

}

console.log(arr4);

//Доп задание 5
const matrix = [1, 1, 1];

matrix.push(2, 2, 2);

console.log(matrix);

//Доп задание 6
const matrix1 = [9, 8, 7, 'a', 6, 5];

matrix1.sort();

const result = matrix1.filter(item => item !== 'a');

console.log(result);

//Доп задание 7
const numbers = [9, 8, 7, 6, 5];

const answer = Number(prompt('Угадай число'));

if (numbers.includes(answer)) {
    alert('Угадал!');
} else {
    alert('Не угадал!');
}

//Доп задание 8
const text = 'abcdef';

const second = text.split('').reverse().join('');

console.log(second);

//Доп задание 9
const multiArray = [[1, 2, 3], [4, 5, 6]];

const flatArrayTwo = [...multiArray[0], ...multiArray[1]];

console.log(flatArrayTwo);

//задание 10
const randomNumbers = [3, 7, 2, 9, 5, 1, 8];

for (let i = 0; i < randomNumbers.length - 1; i++) {
    console.log(randomNumbers[i] + randomNumbers[i + 1]);
}

//задание 11
function getSquares(numbersArray) {
    return numbersArray.map(number => number ** 2);
}

const squaresResult = getSquares([1, 11, 111, 3]);

console.log(squaresResult);

//задание 12
function getWordsLength(wordsArray) {
    return wordsArray.map(word => word.length);
}

const wordsLengthResult = getWordsLength(['Ну', 'Например', 'яблоко']);

console.log(wordsLengthResult);

//задание 13
function getNegativeNumbers(numbersList) {
    return numbersList.filter(number => number < 0);
}

const negativeResult = getNegativeNumbers([5, -3, 8, -10, 2, -7]);

console.log(negativeResult);

//задание 14
const randomNumbersList = [];

for (let i = 0; i < 10; i++) {
    randomNumbersList.push(Math.floor(Math.random() * 11));
}

const evenNumbersList = randomNumbersList.filter(number => number % 2 === 0);

console.log(randomNumbersList);
console.log(evenNumbersList);

//задание 15
const randomNumbersSix = [];

for (let i = 0; i < 6; i++) {
    randomNumbersSix.push(Math.floor(Math.random() * 10) + 1);
}

const sumNumbersSix = randomNumbersSix.reduce((sum, number) => sum + number, 0);

const averageNumbersSix = sumNumbersSix / randomNumbersSix.length;

console.log('Исходный массив:', randomNumbersSix);
console.log('Среднее арифметическое:', averageNumbersSix);




// Домашка по Math и Date


const gameOne = document.querySelector('#game-one_link');

const playButtonOne = gameOne.querySelector('.mini-game__button');

playButtonOne.addEventListener('click', () => {

    const randomNumber = Math.floor(Math.random() * 100) + 1;

    let answer;

    while (Number(answer) !== randomNumber) {

        answer = prompt("Угадай число от 1 до 100");

        if (answer === null) {
            alert("Игра отменена!");
            return;
        }

        if (Number(answer) < randomNumber) {
            alert("Загаданное число БОЛЬШЕ!");
        }
        else if (Number(answer) > randomNumber) {
            alert("Загаданное число МЕНЬШЕ!");
        }
        else {
            alert("Поздравляю! Ты угадал число!");
        }

    }

});



// Игра "Простая арифметика"

const gameTwo = document.querySelector('#game-two_link');

const playButtonTwo = gameTwo.querySelector('.mini-game__button');

playButtonTwo.addEventListener('click', () => {

    let scoreTwo = 0;

    const operationsTwo = ['+', '-', '*', '/'];

    for (let i = 0; i < operationsTwo.length; i++) {

        const numberOneTwo = Math.floor(Math.random() * 10) + 1;
        const numberTwoTwo = Math.floor(Math.random() * 10) + 1;

        const operationTwo = operationsTwo[i];

        let correctAnswerTwo;

        if (operationTwo === '+') {
            correctAnswerTwo = numberOneTwo + numberTwoTwo;
        }
        else if (operationTwo === '-') {
            correctAnswerTwo = numberOneTwo - numberTwoTwo;
        }
        else if (operationTwo === '*') {
            correctAnswerTwo = numberOneTwo * numberTwoTwo;
        }
        else {
            correctAnswerTwo = numberOneTwo / numberTwoTwo;
        }

        const answerTwo = prompt(
            `Сколько будет ${numberOneTwo} ${operationTwo} ${numberTwoTwo}?`
        );

        if (answerTwo === null) {
            alert('Игра отменена!');
            return;
        }

        if (Number(answerTwo) === correctAnswerTwo) {
            alert('Правильно! Молодец!');
            scoreTwo++;
        }
        else {
            alert(`Ошибка! Правильный ответ: ${correctAnswerTwo}`);
        }

    }

    alert(`Игра завершена! Твой результат: ${scoreTwo} из 4`);

});



// Игра "Переверни текст"

const gameThree = document.querySelector('#game-three_link');

const playButtonThree = gameThree.querySelector('.mini-game__button');

playButtonThree.addEventListener('click', () => {

    const textThree = prompt('Введи текст, который нужно перевернуть:');

    if (textThree === null) {
        alert('Игра отменена!');
        return;
    }

    const reversedTextThree = textThree.split('').reverse().join('');

    alert(`Перевернутый текст: ${reversedTextThree}`);

});


//Доп задание 1

const upperCaseTextFour = 'js'.toUpperCase();

console.log(upperCaseTextFour);

//Доп задание 2

function filterStringsFive(arrayFive, searchTextFive) {

    const resultFive = arrayFive.filter((itemFive) => {
        return itemFive.toLowerCase().startsWith(searchTextFive.toLowerCase());
    });

    return resultFive;
}

const wordsFive = ['JavaScript', 'Java', 'Python', 'JSON', 'JQuery'];

console.log(filterStringsFive(wordsFive, 'ja'));


//Доп задание 3
const numberSix = 32.58884;
console.log(Math.floor(numberSix));
console.log(Math.ceil(numberSix));
console.log(Math.round(numberSix));

//Доп задание 4

const numbersSeven = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...numbersSeven));
console.log(Math.max(...numbersSeven));

//Доп задание 5

function randomNumberEight() {
    const randomNumberEightValue = Math.floor(Math.random() * 10) + 1;

    console.log(randomNumberEightValue);
}

randomNumberEight();

//Доп задание 6

function createRandomArrayNine(numberNine) {

    const randomArrayNine = [];

    for (let i = 0; i < numberNine / 2; i++) {
        const randomValueNine = Math.floor(Math.random() * (numberNine + 1));

        randomArrayNine.push(randomValueNine);
    }

    return randomArrayNine;
}

console.log(createRandomArrayNine(10));

//Доп задание 7


function randomInRangeTen(minTen, maxTen) {

    const randomNumberTen = Math.floor(Math.random() * (maxTen - minTen + 1)) + minTen;

    return randomNumberTen;
}

console.log(randomInRangeTen(5, 20));

//Доп задание 8
const currentDateEleven = new Date();

console.log(currentDateEleven);

//Доп задание 9
const currentDateTwelve = new Date();

currentDateTwelve.setDate(currentDateTwelve.getDate() + 73);

console.log(currentDateTwelve);

//Доп задание 10

function formatDateThirteen(dateThirteen) {

    const monthsThirteen = [
        'января', 'февраля', 'марта', 'апреля',
        'мая', 'июня', 'июля', 'августа',
        'сентября', 'октября', 'ноября', 'декабря'
    ];

    const daysThirteen = [
        'воскресенье', 'понедельник', 'вторник',
        'среда', 'четверг', 'пятница', 'суббота'
    ];

    const dayThirteen = dateThirteen.getDate();
    const monthThirteen = monthsThirteen[dateThirteen.getMonth()];
    const yearThirteen = dateThirteen.getFullYear();
    const weekDayThirteen = daysThirteen[dateThirteen.getDay()];

    const hoursThirteen = String(dateThirteen.getHours()).padStart(2, '0');
    const minutesThirteen = String(dateThirteen.getMinutes()).padStart(2, '0');
    const secondsThirteen = String(dateThirteen.getSeconds()).padStart(2, '0');

    return `Дата: ${dayThirteen} ${monthThirteen} ${yearThirteen} — это ${weekDayThirteen}.
Время: ${hoursThirteen}:${minutesThirteen}:${secondsThirteen}`;
}

const currentDateThirteen = new Date();

console.log(formatDateThirteen(currentDateThirteen));



//Задания по домашке Callback, setTimeout, setInterval


const gameFour = document.querySelector('#game-four_link');

const playButtonFour = gameFour.querySelector('.mini-game__button');

playButtonFour.addEventListener('click', () => {

    const choicesFour = ['камень', 'ножницы', 'бумага'];

    const userChoiceFour = prompt('Выбери: камень, ножницы или бумага');

    if (userChoiceFour === null) {
        alert('Игра отменена!');
        return;
    }

    const computerIndexFour = Math.floor(Math.random() * choicesFour.length);

    const computerChoiceFour = choicesFour[computerIndexFour];

    if (!choicesFour.includes(userChoiceFour.toLowerCase())) {
        alert('Ты ввёл неправильный вариант!');
        return;
    }

    alert(`Твой выбор: ${userChoiceFour}\nВыбор компьютера: ${computerChoiceFour}`);

    if (userChoiceFour.toLowerCase() === computerChoiceFour) {
        alert('Ничья!');
    }
    else if (
        (userChoiceFour.toLowerCase() === 'камень' && computerChoiceFour === 'ножницы') ||
        (userChoiceFour.toLowerCase() === 'ножницы' && computerChoiceFour === 'бумага') ||
        (userChoiceFour.toLowerCase() === 'бумага' && computerChoiceFour === 'камень')
    ) {
        alert('Поздравляю! Ты победил!');
    }
    else {
        alert('Компьютер победил! Попробуй ещё раз.');
    }

});

//Доп задание 1

const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));



//Доп задание 2


function isPositiveSecond(numberSecond) {
    return numberSecond > 0;
}

function isMaleSecond(personSecond) {
    return personSecond.gender === 'male';
}

function filterSecond(arraySecond, ruleFunctionSecond) {

    const resultSecond = [];

    for (let i = 0; i < arraySecond.length; i++) {

        if (ruleFunctionSecond(arraySecond[i])) {
            resultSecond.push(arraySecond[i]);
        }

    }

    return resultSecond;
}

console.log(filterSecond([3, -4, 1, 9], isPositiveSecond));

const peopleSecond = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filterSecond(peopleSecond, isMaleSecond));

//Доп задание 3


const interval = setInterval(() => {
    console.log(new Date());
}, 3000);

setTimeout(() => {
    clearInterval(interval);
    console.log('30 секунд прошло');
}, 30000);

//Доп задание 4


function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});


//Доп задание 5

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'))

