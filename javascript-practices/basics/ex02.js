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
2. null
3. {} (객체 리터럴, JSON)
4. [] (배열 리터럴)

[객체2] - function type
1. new Function(...) 생성
2. var f = function(){} 함수 리터럴1을 사용해서 생성
3. function f() { } 함수 리터럴1을 사용해서 생성
*/


/*
< 자바스크립트의 객체를 구분하는 또 다른 방법 >

1. 내장(Built-In, Native, Engine) 객체
   (자바스크립트 엔진안에 미리 내장되어 있는 객체)
   Number, Boolean, Date, RegExp, ....   : 생성자 함수
   parseInt, setTimeout, ...             : 일반 함수 

2. 호스트 객체
   자바스크립트 엔진이 임베디드된 환경(호스트)의 객체(자바스크립트 접근 가능)
   호스트 환경이 브라우저라면: document, location, XmlHttpRequest, window, ....
   호스트 환경이 노드(Node.JS)라면: os, http, fs, path  

3. 사용자 객체
   자바스크립트 엔진이 실행되면서 생성되는 객체들....
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

console.log(i + i2); // 결과 : 11
console.log(s + s2); // 결과 : Hello WorldHello World

// 원시 타입에 메소드가 호출 될 때,
// 임시 Wrapper 객체가 만들어져서 메소드 호출이 일어난 뒤 사라진다.(유사객체)
console.log("==== 원시타입도 메소드 호출이 가능하다. =================================");
console.log(b.valueOf()); // 결과 : true
console.log(b2.valueOf()); // 결과 : false
console.log(s2.valueOf()); // 결과 : Hello World

