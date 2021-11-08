/*
Date
*/

// 현재 시간
var now = new Date();
console.log(now); // 결과 : Mon Nov 08 2021 15:38:37 GMT+0900 (대한민국 표준시)

// 2022년 11월 8일
var d1 = new Date(2022,10 /*month -1 */, 8);
console.log(d1); // 결과 : Tue Nov 08 2022 00:00:00 GMT+0900 (대한민국 표준시)

// 2022년 11월 8일 12:30:00
var d2 = new Date(2022, 10, 8, 12, 30, 40);
console.log(d2); // 결과 : Tue Nov 08 2022 12:30:40 GMT+0900 (대한민국 표준시)

// 객체 메소드
console.log(
    "년도 : " + (d2.getYear() + 1900) + "\n" + // 결과 : 년도 : 2022
    "월 : " + (d2.getMonth() + 1) + "\n" + // 결과 : 월 : 11
    "일 : " + d2.getDate() + "\n" + // 결과 : 일 : 8
    "시 : " + d2.getHours() + "\n" +  // 결과 : 시 : 12
    "분 : " + d2.getMinutes() + "\n" +  // 결과 : 분 : 30
    "초 : " + d2.getSeconds() + "\n" +  // 결과 : 초 : 40
    "밀리초 : " + d2.getMilliseconds() + "\n"   // 결과 : 밀리초 : 0
);

d2.setFullYear(2023);
console.log(d2); // 결과 : Wed Nov 08 2023 12:30:40 GMT+0900 (대한민국 표준시)

d2.setMonth(11); // 12월 -1
console.log(d2); // 결과 : Fri Dec 08 2023 12:30:40 GMT+0900 (대한민국 표준시)
