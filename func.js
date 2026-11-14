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

  
const game = document.querySelector('#game-four_link');

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

console.log(arr.join(' '));

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