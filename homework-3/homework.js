// Task 1
const name = 'Aksana';
let age = 18;
let isStudent = false;
let city;
let salary = null;

console.log(name);
console.log(age);
console.log(isStudent);
console.log(city);
console.log(salary);

// Task 2
console.log(typeof name); // вернулся тип string
console.log(typeof age); // вернулся тип number
console.log(typeof isStudent); // вернулся тип boolean
console.log(typeof city); // вернулся тип underfined
console.log(typeof salary); // вернулся тип object из-за исторического бага, который был общепринят, чтобы не сломать старый код

// Task 3
let x;
let y = null;
console.log(x);
console.log(y);
console.log(typeof x);
console.log(typeof y);
/* underfined - переменная объявлена, но значение не еще присвоено. 
null - специально указано, что значения нет.*/ 

// Task 4
let var1 = '';
let var2 = 0;
let var3 = null;
let var4;
let var5 = 'test string';
let var6 = 15;

console.log(Boolean(var1)); // пустая строка - false
console.log(Boolean(var2)); // 0 - false
console.log(Boolean(var3)); // null - false
console.log(Boolean(var4)); // undefined - false
console.log(Boolean(var5)); // непустая строка - true
console.log(Boolean(var6)); // положительное число - true

// Task 5
let numInteger = 12;
let numFloat = 135.5;
let strNumber = '333';
let strText = 'Hello World!';

console.log(typeof numInteger);
console.log(typeof numFloat);
console.log(typeof strNumber);
console.log(typeof strText);

console.log(typeof Number(strNumber));
console.log(typeof parseInt(strText));

console.log(Number(strNumber));
console.log(parseInt(strText)); // Строка содержит только текст, он не может быть преобразован в число, поэтому выводит значение NaN

// Task 6
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
/* Поскольку числа в JavaScript хранятся в двоичном формате, некоторые десятичные дроби невозможно представить
точно и они округляются. Из-за этого результат вычислений 0.1+0.2 содержит погрешность.*/

// Task 7
let str1 = '   JavaScript test automation   ';
console.log(str1.length);
console.log(str1.trim());
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.includes('test'));
console.log(str1.indexOf('test'));
console.log(`I learn ${str1}`)