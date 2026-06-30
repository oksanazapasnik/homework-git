// Task 1

function formatCurrency(arr) {
    return arr.map(item => {
        const number = Number(item);

        if (isNaN(number)) {
            return `Ошибка: "${item}" не является числом`;
        }

        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(number);
    });
}

console.log(formatCurrency(["1234", "1", "a234", "108.5"]));

// Task 2

function sortArray(arr) {
    return arr.filter(item => Boolean(item))
     .sort((a, b) => {
            if (a > b) return -1;
            if (a < b) return 1;
            return 0;
        });
}

console.log(sortArray([5, 0, false, 10, "", "qeerty", 3, null, 8, undefined, {}, NaN]));

// Task 3 

function groupByAge(arr) {
    return arr.reduce((acc, person) => {
        const { name, age } = person;

        if (!acc[age]) {
            acc[age] = [];
        }

        acc[age].push(name);

        return acc;
    }, {});
}

const people = [
    { name: "Ivan", age: 25 },
    { name: "Anna", age: 20 },
    { name: "Anton", age: 30 },
    { name: "Aksana", age: 17 },
    { name: "Petr", age: 25 },
    { name: "Olga", age: 25 },
    { name: "Sergey", age: 30 }
];

console.log(groupByAge(people));

// Task 4 

async function executePromises(functions) {
    const promises = functions.map(fn => fn());
    return await Promise.all(promises);
}

const function1 = () => 
    new Promise(resolve =>
        setTimeout(() => resolve("Первая функция"), 3000)
    );

const function2 = () =>
    new Promise(resolve =>
        setTimeout(() => resolve("Вторая функция"), 2000)
    );
const function3 = () =>
    new Promise(resolve =>
        setTimeout(() => resolve("Третья функция"), 1000)
    );

executePromises([function1, function2, function3])
    .then(result => console.log(result));

// Task 5

function multiplicationTable(n = 10) {

    if (n < 1) {
        console.log("Ошибка: число должно быть >= 1");
        return;
    }
    if (!Number.isInteger(n)) {
        console.log("Ошибка: число должно быть целым");
        return;
    }

    console.log("-".repeat(50));
    console.log("   x   | " + [...Array(n)].map((a, i) => i + 1).join(" "));
    console.log("-".repeat(50));

    let totalSum = 0;
    const columnSums = Array(n).fill(0);

    for (let i = 1; i <= n; i++) {
        let row = `${i.toString().padStart(4)} |`;
        let rowSum = 0;

        for (let j = 1; j <= n; j++) {
            let value = i * j;
            rowSum += value;
            columnSums[j - 1] += value;
            totalSum += value;

            row += value.toString().padStart(4);
        }

        console.log(row);
    }

    console.log("-".repeat(50));

    console.log(
        "Sum of Rows:",
        Array.from({ length: n }, (a, i) => (i + 1) * (n * (n + 1)) / 2).join(" ")
    );

    console.log("Sum of Columns:", columnSums.join(" "));
    console.log("Total Sum of Table:", totalSum);
}

multiplicationTable(15);

// Task 6

function firstPromise(n) {
    return Promise.resolve(n); 
}

function squaredPromise(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * num);
        }, 3000);
    });
}

firstPromise(5)
    .then((result) => {
        return squaredPromise(result);
    })
    .then((result) => {
        return squaredPromise(result);
    })
    .then((result) => {
        console.log(result);
    });