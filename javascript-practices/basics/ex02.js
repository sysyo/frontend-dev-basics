/*
변수와 데이터 타입
[기본타입(primitive type)]
undefined
number
string
boolean
[객체1] - object type
1. new 생성자함수()  사용해서 생성
       Number() -> object type
       Boolean() -> object type
       String() -> object type
       Object() -> object type
       Array() -> object type
[객체2] - function type
*/

console.log("==== 원시 타입(Primitive Type) =================================");
var u = undefined; // var u;와 같다. / 선언과 정의의 구분이 없다.

console.log("u : " + typeof(u)); // 결과 : u : undefined -> typeof는 type을 물어보는 것

// console.log(k); // 없는 변수를 실행시키면 에러 발생

var i = 10;
console.log("i : " + typeof(i)); // 결과 : i : number

var s = "Hello World"; // char 타입이 없기 때문에 '' 나 "" 둘 다 가능
console.log("s : " + typeof(s)); // 결과 : s : string

var b = true;
console.log("b : " + typeof(b)); // 결과 : b : boolean


console.log("==== [객체1] (object type) =================================");


var i2 = new Number(1); // 함수에 new를 붙이면 object가 생성되는 것 (생성자 X)
console.log("i2 : " + typeof(i2)); // 결과 : i2 : object

var b2 = new Boolean(false);
console.log("b2 : " + typeof(b2)); // 결과 : b2 : object

var s2 = new String("Hello World");
console.log("s2 : " + typeof(s2)); // 결과 : s2 : object

var o = new Object(); // object : data가 있고 메서드가 있는..
console.log("o : " + typeof(o)); // 결과 : o : object

var a = new Array();
console.log("a : " + typeof(a)); // 결과 : a : object

var o2 = {};
var a2 = [];
console.log("o2 : " + typeof(o2)); // 결과 : o2 : object
console.log("a2 : " + typeof(a2)); // 결과 : a2 : object

var n = null;
console.log("n : " + typeof(n)); // 결과 : n : object


console.log("==== [객체2] (function type) =================================");

var f = new Function("a", "b", "return a + b");
var f2 = function(a, b) {
    return a + b;
}

console.log("f : " + typeof(f));
console.log("f2 : " + typeof(f2));

console.log(f(10, 20)); // 결과 : 30
console.log(f(10, 20)); // 결과 : 30

console.log("==== 원시타입과 원시 타입의 Wrapper 객체는 구분없이 사용할 수 있다. =================================");


