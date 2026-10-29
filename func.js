//Задание 1
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(min(8, 4)); 
console.log(min(6, 6));

//Задание 2
function check(number) {
    if (number % 2 === 0) {
        return "Число четное";
    } else {
        return "Число нечетное";
    }
}
console.log(check(4)); 
console.log(check(5)); 

//Задание 3
function square(number) {
    console.log(number * number);
}
square(5);
square(10);

function squareReturn(number) {
    return number * number;
}
    let result = squareReturn(5);
    console.log(result);
    console.log(squareReturn(10));

    //Задание 4
    function correctAge(age) {
        if (age < 0) {
            return 'Вы ввели неправильное значение';
        } else if (age <= 12) {
            return 'Привет, друг!';
        } else {
            return 'Добро пожаловать!';
        }
    }
    alert(correctAge(prompt('Сколько вам лет?')));

    //Задание 5
    function multiply(a, b) {
        a = Number(a);
        b = Number(b);
        if (isNaN(a) || isNaN(b)) {
            return 'Одно или оба значения не являются числом';
        } else {
            return a * b;
        }
    }
    console.log(multiply(5, 10));
    console.log(multiply(5, 'ljuyl'));

    //Задание 6
    function cube() {
        let n = prompt('Введите число');
        n = Number(n);
        if (isNaN(n)) {
            return 'Переданный параметр не является числом';
        } else {
            return `${n} в кубе равняется ${n * n * n}`;
        }
    }
    alert(cube());

    for (let i = 0; i <= 10; i++) {
        console.log(`${i} в кубе равняется ${i * i * i}`);
    }

    //Задание 7
    const circle1 = {
        radius: 5,
        getArea: function() {
            return 3.14 * this.radius * this.radius;
        },
        getPerimeter: function() {
            return 2 * 3.14 * this.radius;
        }
    };

    const circle2 = {
        radius: 10,
        getArea: function() {
            return 3.14 * this.radius * this.radius;
        },
        getPerimeter: function() {
            return 2 * 3.14 * this.radius;
        }
    };

    console.log(circle1.getArea());
    console.log(circle1.getPerimeter());
    console.log(circle2.getArea());
    console.log(circle2.getPerimeter());

  
