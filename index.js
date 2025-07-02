const dataArr = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 28 },
]

function filterByAge(dataArr, minAge) {
    return dataArr.filter(person => person.age >= minAge);
}
console.log(filterByAge(dataArr, 20))

filterByAge(dataArr, 30).forEach(person => {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
});


const data = [
    { name: "John", age: 30, city: "New York" },
    { name: "Jane", age: 25, city: "Los Angeles" },
    { name: "Mike", age: 32, city: "Chicago" },
    { name: "Sara", age: 28, city: "Miami" },
]

function createInfoUser(data) {
    const result = []
    const user = {
        id: 0,
        name: "",
        age: 0,
        city: "",
        info: ""
    }
    data.forEach(element => {
        const { name, age, city } = element;
        user.id++;
        user.name = name;
        user.age = age;
        if (age < 30) {
            user.info = "Young";
        } else {
            user.info = "Super profi";
        }
        user.city = city;
        result.push({ ...user });
    });
    return result;
}

console.log(createInfoUser(data));


// Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему. 

function range(min, max) {
    const result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}

console.log(range(10, 15)); // [5, 6, 7, 8, 9, 10]


// Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от большего числа к меньшему. 
function reverseRange(min, max) {

    const result = [];
    for (let i = max; i >= min; i--) {
        result.push(i);
    }
    return result;

}
console.log(reverseRange(10, 15)); // [15, 14, 13, 12, 11, 10]  

function reverseRange2(min, max) {
    const result = [];
    if (min < max) {
        result.push(max, min)
    }
    else {
        result.push(min, max)
    }

    return result;

}
console.log(reverseRange2(10, 15)); // [15, 14, 13, 12, 11, 10]



//В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте сумму чисел и выведите в консоль.

const list = [4, 7, 1, 8, 5, 2, 6, 3];

let sum = 0;
for (let i = 0; i < list.length; i++) {
    sum += list[i];
}
console.log("Сумма чисел в массиве:", sum);
//
//В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте разность суммы всех четных чисел и суммы всех нечетных
const list2 = [4, 7, 1, 8, 5, 2, 6, 3];
let evenSum = 0;
let oddSum = 0;
for (let i = 0; i < list2.length; i++) {
    if (list2[i] % 2 === 0) {
        evenSum += list2[i];
    } else {
        oddSum += list2[i];
    }
}
const difference = evenSum - oddSum;
console.log("Разность суммы четных и нечетных чисел:", difference);

list3 = [780, 1000, 500, 200, 300, 400, 600, 700, 800, 900];
let evenSum2 = 0;
let oddSum2 = 0;

list3.forEach(num => {
    if (num % 2 === 0) {
        evenSum2 += num;
    } else {
        oddSum2 += num;
    }
});
const difference2 = evenSum2 - oddSum2;
console.log("Разность суммы четных и нечетных чисел (используя forEach):", difference2);

//Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает объект со свойствами min, max, avg с соответствующими значениями по массиву.

const numbers = [4, 2, 8, 6, 5];

function calculateStats(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const avg = arr.reduce((sum, num) => sum + num, 0) / arr.length;

    return { min, max, avg };
}
console.log(calculateStats(numbers)); // { min: 2, max: 8, avg: 5 }


//В программе объявлена переменная word со строковым значением. Используя цикл, разверните слово.
const word = 'hello'
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString(word)); // 'olleh'

const arr = [1, 2, 3, 4, 5];
const val = 0;
const sumArr = arr.reduce((accumulator, currentValue) => accumulator + currentValue, val);
console.log(sumArr); // 15

const word2 = 'svitlana'
console.log(word2.split('').reverse().join('')); // 'analitvs'


//Используя цикл, выведите в консоль сумму чисел из диапазона значений от 0 до 50 кратные 5.
let sumMultiplesOfFive = 0;
for (let i = 0; i <= 50; i++) {
    if (i % 5 === 0) {
        sumMultiplesOfFive += i;
    }
}
console.log("Сумма чисел от 0 до 50, кратных 5:", sumMultiplesOfFive);


const products = [
    { id: 1, name: 'Apple', price: 200, discount: 10 },
    { id: 2, name: 'Banana', price: 100, discount: 5 },
    { id: 3, name: 'Cherry', price: 400, discount: 0 },
    { id: 4, name: 'Date', price: 700, discount: 15 },
    { id: 5, name: 'Elderberry', price: 500, discount: 20 }
];

// Написать цикл, который выводит только названия товаров


function printProductNames(products) {
    const productNames = [];
    const user = {
        name: "",
        price: 0,
        discount: 0
    }
    products.forEach(product => {
        const { name, price, discount } = product
        user.name = name;
        user.price = price;
        user.discount = discount;



        productNames.push(user.name);
        productNames.push(user.price);
        productNames.push(user.discount);


    });
    return productNames;
}

console.log(printProductNames(products)); // ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']



products.forEach(product => {
    const { name, price, discount } = product;
    if (price > 0) {
        let newPrice = price - ((price * discount) / 100)
        console.log(`you have a ${discount}% discaunt and you new price ${newPrice}`)

    } else {
        console.log(`we have not discount`)
    }

    // console.log(`Name: ${name}, Price: ${price}, Discount: ${discount}`);
});



//Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром (без учета скидки).                                


function helloUser(userName, userSurname) {
    const newUser = []
    if (userName) newUser.push(`${userName} ${userSurname}`)
    console.log(newUser.join(`\n`));

}
helloUser('Svitlana', 'Pristajchuk')
helloUser('Pristajchuk')

function getSum(x, y) {
    console.log(arguments)
    ar
    sum = 0
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i]

    }
    console.log(sum);
}
getSum(10, 30, 95)




