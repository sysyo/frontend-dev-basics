const ex02 = require('./ex02'); 

const ex03 = async function(param) { // 비동기 함수를 호출하는 함수 (SQL을 호출하는 컨트롤러 함수) // async를 붙여줘야 다음 코드가 실행된다
    try {
        const res = await ex02(param); 
        console.log(res);
    } catch (err) { 
        console.error(err);
    }
}

// 비동기 nonblocking
ex03("param-data"); // ok
ex03("param-error"); // error : fail - param-data 가 아닌 다른 걸 넣으면 에러

console.log('wait...');