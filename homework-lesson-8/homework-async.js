// Task 1
function getPromise(number) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (5000 - 1000) + 1000);
        console.log(`Promise ${number} delay: ${delay} ms`);
        setTimeout(() => {
            resolve(number);
        }, delay);
    });
}

Promise.race([getPromise(1), getPromise(2), getPromise(3)])
.then((result) => (
    console.log(`Fastest promise result: ${result}`)
))

// Task 2
function getNum(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * (5 - 1 + 1) + 1));
        }, 3000);
    })
}

async function getSquaredNumber() {
    const number = await getNum();
    const square = number ** 2;
    console.log(`Generated number ${number}`);
    console.log(`Square: ${square}`)
}

getSquaredNumber();

// Task 3
function getNum1to5(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * (5 - 1 + 1) + 1));
        }, 3000);
    })
}

function getNum6to10(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * (10 - 6 + 1) + 6));
        }, 5000);
    })
}

async function getSum() {
    const rand1to5 = await getNum1to5();
    const rand6to10 = await getNum6to10();
    const sum = rand1to5 + rand6to10;
    console.log(`First number: ${rand1to5}`);
    console.log(`Second number: ${rand6to10}`);
    console.log(`Sum: ${sum}`);
}

getSum();