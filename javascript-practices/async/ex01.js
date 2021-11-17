// 비동기 함수 (ex.ajax) 는 parameter를 꼭 넣어야 한다. url 같은 거..
const ex01 = function(param, callback) { // 뭔갈 하는데 결과가 좀 있다 나오고 callback으로 실행
    //
    // 비동기 코드
    // 파일 시스템에 접근, 네트워크 통신 제어, SQL to DB, setTimeout / 에러있는 코드에서는 에러도 리포팅 해 주어야 한다.
    // 

    // 1) setTimeout
    setTimeout(function() {
        // ex01을 호출 할 때 -> ex('param-data')라고 지정하면 성공이라고 가정
        if(param === 'param-data') {
            callback(null, 'ok')  // 성공했을 때 비동기 함수 호출 : null-> error / data -> 'ok'  
        } else { // param-data를 안넣게 되는 경우 
            callback(new Error('fail'), null);
        }

    }, 2000); // timeout에 시간 지정(2000)

}


// ------------------- test01 : success -------------------------
// 성공인 경우
// ex01('param-data', function(error, res) { } // $.ajax('') 라고 생각하면 됨
ex01('param-data', function(error, res) {
    if(error) { // error 가 있는 경우 error 출력
        console.error(error); // error 가 있는 경우 error 출력
    } else {
        console.log(res);
    }
 });

 console.log("wait......."); // node ex01 으로 실행시키기
// 결과 : wait.... 뜨고 2초 후 ok 뜸


// ------------------- test02 : fail -------------------------
// 실패인 경우
// ex01('param-error', function(error, res) { }
ex01('param-error', function(error, res) {
    if(error) { // error 가 있는 경우 error 출력
        console.error(error); // error 가 있는 경우 error 출력
    } else {
        console.log(res);
    }
 });

 console.log("wait......."); // node ex01 으로 실행시키기
 // 결과 : wait.... 뜨고 2초 후 fail + 오류 코드 뜸

