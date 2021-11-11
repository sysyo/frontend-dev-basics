/*
< 배열 >
*/

// 1. 내장객체 (생성자 함수)
console.log("=============== 생성 1 : 내장객체 (생성자 함수) ===================");

var a1 = new Array();
console.log(typeof(a1)); // 결과 : object
console.log(typeof(a1), a1 instanceof Array, a1.length); // 결과 : object true 0


// 배열을 정의할 때 크기 지정은 별 의미가 없다.
// 동적으로 배열은 늘어난다.
var a2 = new Array(10);
a2[0] = 0;
a2[5] = 5;

a2[10] = 10; // -> a2[10] = 10; 추가 시 => 결과 : 0 undefined 11
a2[20] = 20; // -> a2[20] = 20; 추가 시 => 결과 : 0 undefined 21

console.log(a2[0], a2[1], a2.length); // 결과 : 0 undefined 10 
// 배열 요소에 값을 지정안하면 undefined

// 초기값을 지정할 수 있다.
var a3 = new Array(0, 2, 4, 6, 8);
console.log(a3.length); // 결과 : 5


// 2. 리터럴 
console.log("=============== 생성 2 : 내장객체 (생성자 함수) ===================");
var a4 = [function(){
    console.log("Hello");
}, 20, "JavaScript", true, {
    name: "마이콜",
    email: "michol@gmail.com"
}];

console.log(a4.length); // 결과 : 5
for(var i = 0; i < a4.length; i++) {
    console.log(a4[i]); // 결과 : f (){ / 20 / JavaScript / true / {name: '마이콜', email: 'michol@gmail.com'}
}

a4[0](); // 결과 : Hello

// Array VS Object
console.log("=============== Array VS Object ===================")
a5 = [];
a5[0] = 0;
a5["1"] = 1;
a5["name"] = "둘리";
console.log(a5["0"], a5[1], a5.length); // 결과 : 0 1 2

// for...in문은 상속된 열거 가능한 속성들을 포함하여 객체에서 문자열로 키가 지정된 모든 열거 가능한 속성에 대해 반복 (값을 들고 오는 게 아님)
for(porp in a5) {
    console.log(porp) // 결과 : 0 / 1 / name
}

o5 = {};
o5[0] = 0;
o5["1"] = 1;
o5["name"] = "둘리";
console.log(o5["0"], o5[1], o5.length); // 결과 : 0 1 undefined

for(porp in o5) {
    console.log(porp) // 결과 : 0 / 1 / name
}

a5.forEach(function(e, index) {
    console.log(index + ":" + e); // 결과 : 0:0 / 1:1
});

Array.prototype.forEach.call(o5, function(e, index){
    console.log(index + ": " + e);
});

// apply는 파라미터가 없는 함수를 부를 때 좋다





// 유사배열 -> 동적으로 크기가 늘어나지 못함