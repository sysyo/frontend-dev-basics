// callback을 넣지 않고 
const ex02 = function(param) {
    return new Promise(function(resolve, reject) { // resolve - 성공했을 때, reject - 실패했을 때

    // 비동기 코드
    // 파일 시스템에 접근, 네트워크 통신 제어, SQL to DB, setTimeout / 에러있는 코드에서는 에러도 리포팅 해 주어야 한다.
    // 

    setTimeout(function() {
        if(param === 'param-data') { // 성공
            resolve('ok');
        } else { // 실패
            reject(new Error('fail'));
        }

    }, 2000);


    });
}

if(require.main == module) { // require 해서 main이 module이면 실행
        // ------------------- test01 : success -------------------------
    ex02('param-data').then(function(res){ // then이면 성공한 경우
        console.log(res);
    });

    console.log('wait......');

    // 실행 : PS C:\douzone2021\eclipse-workspace\frontend-dev-basics\async> node ex02
    // 결과 : wait... 나오고 2초 후 ok 

    // ------------------- test02 : fail -------------------------
    ex02('param-data').catch(function(error){ // catch이면 실패한 경우
        console.error(error);
    });

    // 일반적으로...
    // ex02('....')
    //     .then(res => {

    //     })
    //     .catch(err => {

    //     });


    console.log('wait......');
} else {
    module.exports = ex02;
}

