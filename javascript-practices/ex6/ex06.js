/*
6. 구조 분해
*/

// ex1 - basic
const user = {
    firstName: '둘',
    lastName: '리',
    email: 'dooly@gmail.com'
};

({firstName, lastName} = user);
// let firstName = user.fistName;
// let lastName = user.lastName; 과 같은 의미임

console.log(firstName, lastName);
