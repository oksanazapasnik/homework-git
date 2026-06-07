// Task 1
const numbers = [1, 2, 3, 4, 5, 6];
const reversedNumbers = numbers.toReversed();
console.log(reversedNumbers);
// Исходный массив может использоваться в других частях программы, поэтому его изменение может привести к багам


// Task 2 
const numbers2 = [3, 67, 15, 89, 24, 7, 101, 36];

// Way 1
let max = numbers2[0];
let min = numbers2[0];
for (i=1; i < numbers2.length; i++) {
    if (max < numbers2[i]){
        max = numbers2[i];
    } 
    if (min > numbers2[i]) {
        min = numbers2[i];
    }
}
console.log ('Max number:', max);
console.log ('Min number:', min);

// Way 2
console.log('Max number:', Math.max(...numbers2));
console.log('Min number:', Math.min(...numbers2));


// Task 3
const startIndex = 3;
const length = 7;

const fib = [0,1];
for (i=2; i < startIndex + length; i++) {
    fib.push(fib[i-2] + fib[i-1]);
}
console.log(fib.slice(startIndex, startIndex + length));


// Task 4
const secret = 3487;
const guess = 3794;

const secretStr = secret.toString();
const guessStr = guess.toString();

const secretArray = secretStr.split("");
const guesstArray = guessStr.split("");

let countSameValPos = 0; 
for(i=0; i<4; i++){
    if (secretArray[i] === guesstArray[i]) 
        countSameValPos++;
}
console.log('Same position:', countSameValPos)

let countSameVal = 0;
for(i=0; i<4; i++){
    if (secretArray.includes(guesstArray[i]) && secretArray[i] !== guesstArray[i])
        countSameVal++;
}
console.log('Same value but different position:', countSameVal);


// Task 5
const users = [
  { name: "Alex", age: 25, city: "Warsaw" },
  { name: "Maria", age: 32, city: "Gdansk" },
  { name: "John", age: 19, city: "Berlin" },
  { name: "Oleg", age: 41, city: "Warsaw" },
  { name: "Anna", age: 25, city: "Krakow" }
];

const sortAgeAsc = users.toSorted((a, b) => a.age - b.age);
console.log('Users sorted by age ascending', sortAgeAsc);

const sortAgeDes = users.toSorted((a, b) => b.age - a.age);
console.log('Users sorted by age descending', sortAgeDes);

const sortName = users.toSorted((a, b) => {
 if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});
console.log('Users sorted by name', sortName);

const namesArr = users.map(user => user.name);
console.log('User names', namesArr);

const older25 = users.filter(user => user.age>25);
console.log('Users older than 25', older25);

const firstWarsaw = users.find(user => user.city === 'Warsaw');
console.log('First user from Warsaw', firstWarsaw);

// Task 6
const products = [
  { id: 1, title: "Phone", price: 1200, category: "electronics" },
  { id: 2, title: "Laptop", price: 2500, category: "electronics" },
  { id: 3, title: "Book", price: 40, category: "books" },
  { id: 4, title: "Phone", price: 1200, category: "electronics" },
  { id: 5, title: "Pen", price: 5, category: "stationery" },
  { id: 6, title: "Book", price: 40, category: "books" }
];


const productsWithoutCopies = products.filter((product, index, array) => {
  return index === array.findIndex(item =>
    item.title === product.title &&
    item.price === product.price
  );
});
console.log('Unique Products', productsWithoutCopies);


const productNames = products.map((p) => p.title);
console.log('Product Names', productNames);


let uniqueCategories = products.filter((product, index, array) => {
  return index === array.findIndex(item =>
    item.category === product.category
  );
})
uniqueCategories = uniqueCategories.map((p) => p.category);
console.log('Unique Categories', uniqueCategories);


let totalCostUnique = 0;
productsWithoutCopies.forEach((item) => {
  totalCostUnique += item.price;
});
console.log('Total cost of unique products', totalCostUnique);


const categoriesObj = {};
productsWithoutCopies.forEach((item) => {
    if (categoriesObj[item.category]){
        categoriesObj[item.category]++;
    }
    else {
        categoriesObj[item.category] = 1;
    }
});
console.log('Object', categoriesObj);

console.log(Object.keys(products[1]));
console.log(Object.values(products[1]));
console.log(Object.entries(products[1]));