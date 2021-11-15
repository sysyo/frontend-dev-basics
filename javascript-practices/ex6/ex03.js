/*
03. Template Literal
*/

let no = 10;
let name = '둘리';
let email = 'dooly@gmail.com';

// ex1
console.log('no: ' + no + ", name: " + name + ", email: " + email); 
console.log(`no: ${no}, name: ${name}, email: ${email}`);
// -> 같은 결과 :  no: 10, name: 둘리, email: dooly@gmail.com

// ex2: 다중행
console.log(`no:${no}
name:${name}
email:${email}`);
