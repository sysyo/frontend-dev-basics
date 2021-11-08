/*
function 타입의 객체 (함수)
*/

// 함수를 생성하는 방법 1 : 함수 리터럴
function f1(a, b) {
    return a + b;
}

console.log(typeof(f1), f1(10, 20)); // 결과 : function 30

// ---------------------------------------------------------------

// 함수를 생성하는 방법 2 : 함수 리터럴
var f2 = function(a, b) {
    return a + b;
}

console.log(typeof(f2), f2(10, 20)); // 결과 : function 30


// ---------------------------------------------------------------

// 함수를 생성하는 방법 3 : new 연산자와 함께 Function() 생성자 함수를 사용하는 방법
var f3 = new Function('a', 'b', 'return a + b');
console.log(typeof(f3), f3(10, 20)); // 결과 : function 30

// ---------------------------------------------------------------

// 함수를 생성하는 방법 4 : anonymous(익명) 함수 
// callback
setTimeout(function(){
    console.log("time out!"); // 결과 : 2초 후에 time out이 됐을 때 'time out!' 이라고 뜸
}, 2000);

// ---------------------------------------------------------------

// 즉시 실행하는 함수
var s = (function(a, b) {
    return a + b;
})(10, 20);

console.log(s); // 결과 : 30

// 가변 파라미터 함수
var sum = function() {
    console.log(arguments instanceof Array); // Array가 아니다, 유사배열이다.

    var sum = 0;

    // 구현1
    // for(var i = 0; i < arguments.length; i++) {
    //     sum += arguments[i];
    //}

    // 구현2
    Array.prototype.forEach.call(arguments, function(e){
        sum += e;
    })

    return sum;
}

console.log(sum(10, 20)); // 결과 : false / 30
console.log(sum(10, 20, 30)); // 결과 : false / 60
console.log(sum(10, 20, 30, 40, 50)); // 결과 : false / 150