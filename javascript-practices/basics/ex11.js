/*
< Array 메소드 >
*/

var colors = ['black', 'white', 'yellow'];
var fruits = ['apple', 'mango', 'banana'];

// concat
var a1 = fruits.concat(colors);
console.log(a1); // 결과 : (6) ['apple', 'mango', 'banana', 'black', 'white', 'yellow']

//pop, push : stack 지원
var color = colors.pop();
console.log(color); // 결과 : yellow
console.log(colors); // 결과 : (2) ['black', 'white']

colors.push('red');
console.log(colors); // 결과 : (3) ['black', 'white', 'red']

// join
var str = fruits.join(":");
console.log(str);

// reverse
console.log(fruits); // 결과 : (3) ['apple', 'mango', 'banana']
fruits.reverse();
console.log(fruits); // 결과 : (3) ['banana', 'mango', 'apple']

// shift : Removes the first element from an array and returns it
var numbers = [1000, 3000, 2000, 4000, 5000];
var number = numbers.shift();
console.log(number, numbers); // 결과 : 1000 (4) [3000, 2000, 4000, 5000]

// sort
numbers.sort();
console.log(numbers); // 결과 : (4) [2000, 3000, 4000, 5000]

// slice
var numbers = numbers.slice(1, 3);
console.log(numbers); // 결과 : (2) [3000, 4000]

// splice
// index부터 conut 개를 삭제 후 삭제된 요소를 반환
console.log(fruits); // 결과 : (3) ['banana', 'mango', 'apple']
var fruits2 = fruits.splice(0/* index*/, 2/* count*/); 
console.log(fruits2, fruits); // 결과 : (2) ['banana', 'mango'] (1) ['apple']

var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 3, 10);
console.log(a2, a1); // 결과 : (3) [1, 2, 3] (3) [0, 10, 4]

var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 1, 10);
console.log(a2, a1); // 결과 : (1) [1] (5) [0, 10, 2, 3, 4]

var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 0, 10);
console.log(a2, a1); // 결과 : (0) [] (6) [0, 10, 1, 2, 3, 4]