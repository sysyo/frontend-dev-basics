/*

< 변수의 범위(Scope) >

1. 자바스크립트는 어휘에서 변수의 범위를 알수 있는 정적 범위이다. (Lexical Scope)

2. ES6 이전
   - 자바와 같은 블록 범위를 지원하지 못했다.
   - 함수 범위(Function Scope)만 지원했다.
   - function() {...} 안에서 변수 앞에 var 키워드를 사용하면 함수 범위를 가지게 된다.
   - 만일, var 키워드 없이 함수안에서 변수를 정의하게 되면 전역 범위를 가지게 된다.(Hoisting)

3. ES6 이후
   - 새롭게 Block Scope이 생기게 두 키워드를 지원한다.
   - let : 변수
   - const : 상수

4. const/let 만 사용하고 반드시 붙히자.   

*/

var i = 10;
var f = function() {
    var i = 20;
    j = 100;
    console.log("i : " +  i); // 결과 : 20
    i = j -1;
    console.log("i = j -1 : " +  i); // 결과 : 99
}

{
    let x = 1000000;
    const PI = 3.14;
    x = 100;
    // 상수이기 때문에 에러
    // PI = 0;
}

// error: 접근이 안됨
// console.log(x);

f();
console.log("i : " + i); // 결과 : 10
console.log("j : " + j); // 결과 : 100